import Link from "next/link";
import User from "./User";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white border-b border-t py-5 px-5 md:px-10">
      <Link
        href="/"
        className="relative flex items-center h-10 cursor-pointer my-auto">
        <img
          className="h-full"
          src="assets\images\bloomlogo.png"
          layout="fill"
          style={{ objectFit: "cover", objectPosition: "left" }}
        />
      </Link>

      <div className="flex items-center border rounded-full py-2">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-md text-gray-600 placeholder-gray-400 "
          type="text"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="h-9 md:inline-flex bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 cursor-pointer md:mx-2">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500 ">
        <User />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="w-[1.75rem] h-[1.75rem] cursor-pointer stroke-gray-800"
          viewBox="0 0 24 24"
          stroke-width="2">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </header>
  );
}
