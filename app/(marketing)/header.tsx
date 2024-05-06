import Image from "next/image";
import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton, SignIn,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full bg-red-500">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="logo" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            lingo
          </h1>
        </div>
        <ClerkLoading>
          <Loader className='h-5 w-5 text-muted-foreground animate-spin'/>
        </ClerkLoading>
        <ClerkLoaded>
          <SignIn>

          </SignIn>
        </ClerkLoaded>
      </div>
    </header>
  );
};
