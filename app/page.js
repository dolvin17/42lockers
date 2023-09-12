import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center px-3 py-3 mx-auto mt-16 border-2 border-purple-300 w-fit rounded-2xl">
        <Link className="" href="/">
          Login
        </Link>
      </div>
    </>
  );
}
