import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { options } from '@/app/api/auth/[...nextauth]/options';

import SignInButton from '@/components/SignInButton';

const SignInPage = async () => {
  const session = await getServerSession(options);
  console.log({ session });
  if (session) {
    redirect('/profile');
  }

  return (
  
      <div className="max-w-md ml-96 mt-24 w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-purple-600 mb-8">SolidPull</h1>
        <p className="text-gray-600 mb-8">Welcome to SolidPull! Join us to start earning rewards for your GitHub contributions.</p>
        <SignInButton />
       
      </div>

  );
};

export default SignInPage;
