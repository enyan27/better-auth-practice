"use client";

import { BetterAuthActionButton } from "@/components/auth/better-auth-action-button";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/auth-client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { data: session, isPending: loading } = authClient.useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-6 px-4 max-w-md mx-auto">
      <div className="text-center space-y-6">
        {session == null ? (
          <>
            <h1 className="text-3xl font-bold">Welcome to Our App</h1>
            <Button asChild size="lg">
              <Link href="/auth/login">Sign In / Sign Up</Link>
            </Button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">Welcome {session.user.name}!</h1>

            <Image
              width={100}
              height={100}
              src={session.user.image || "/ena.png"}
              alt="user-avatar"
              className="mx-auto rounded-full"
            />

            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/profile">Profile</Link>
              </Button>

              <BetterAuthActionButton
                size="lg"
                variant="destructive"
                successMessage="See you soon!"
                action={() => authClient.signOut()}
              >
                Sign Out
              </BetterAuthActionButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
