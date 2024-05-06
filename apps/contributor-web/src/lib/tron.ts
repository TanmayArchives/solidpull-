import { options } from '@/app/api/auth/[...nextauth]/options';
import TronWeb from 'tronweb';
import * as bs58 from 'bs58';
import { Session, getServerSession } from 'next-auth';
import { extractUserIdFromAvatarUrl, getGithubUsernamefromUserId } from '.';
import db from '@repo/database/client';
import dotenv from 'dotenv';

dotenv.config();

const tronWeb = new TronWeb({
  fullHost: process.env.TRON_URL,
  headers: { 'TRON-PRO-API-KEY': process.env.TRON_API_KEY },
  privateKey: process.env.SENDER_PRIVATE_KEY,
});

const senderPublicKey = process.env.SENDER_PUBLIC_KEY;
// TODO: Use some API to fetch realtime price of Tron token
const currentTronPrice = process.env.TRON_PRICE_USD as string;

export async function sendTrxToAnotherAddress(receiverWalletAddress: string) {
  console.log(receiverWalletAddress);
  try {
    if (!tronWeb.isAddress(receiverWalletAddress)) {
      throw new Error('Invalid receiver wallet address');
    }

    if (!senderPublicKey) {
      throw new Error('Please provide sender public key in the environment variables.');
    }

    const session = (await getServerSession(options)) as Session;
    const githubUserId = extractUserIdFromAvatarUrl(session.user?.image as string);
    const username = await getGithubUsernamefromUserId(githubUserId as string);
    const totalBountyOfUser = await db.bountyTable.aggregate({
      _sum: { amount: true },
      where: { username: username },
    });
    const amount = totalBountyOfUser._sum.amount as number;

    const trxAmount = amount / +currentTronPrice;

    // Send TRX to the receiver address
    const sendTrxResult = await tronWeb.trx.sendTransaction(
      receiverWalletAddress,
      tronWeb.toSun(trxAmount)
    );

    console.log('Transaction sent:', sendTrxResult);

    // remove bounties of the user
    await db.bountyTable.deleteMany({ where: { username } });
  } catch (error: any) {
    throw new Error(error.message);
  }
}