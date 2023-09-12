import "./globals.css";
import { Navigation } from "./components/Navigation";
import Image from "next/image";

const links = [
  {
    label: "First Floor",
    route: "/",
  },
  {
    label: "Second Floor",
    route: "/secondfloor",
  },
];

export default function RootLayout({ children }) {
  return (
    <>
      <div className="fixed w-full  flex flex-col lg:flex-row justify-center py-4 top-2 z-[1] bg-white">
        <Image src="/logo.png" alt="" width={100} height={100} />
      </div>
      <h1 className=" fixed top-2 z-[1] pt-24 text-black w-full mx-auto text-center">
        Locker
      </h1>
      <body className="pt-36 ">
        <Navigation />
        {children}
      </body>
    </>
  );
}
