import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="my-6 px-4 max-w-md mx-auto">
      <div className="text-center space-y-6">
        <Image
          src="/ena.jpg"
          alt="ena"
          width={64}
          height={64}
          className="mx-auto rounded-full"
        />
        <h1 className="text-3xl font-bold">こんにちは</h1>
        <Link href="/auth/login">Sign In / Sign Up</Link>
      </div>
    </div>
  );
}