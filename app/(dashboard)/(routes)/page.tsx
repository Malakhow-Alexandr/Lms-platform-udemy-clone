import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <div className="">
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}
