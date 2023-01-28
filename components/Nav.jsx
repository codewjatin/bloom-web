import {
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  BookmarkIcon,
} from "@heroicons/react/solid";

import Link from "next/link";
import User from "./User";

export default function Nav({ placeholder }) {
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
          placeholder={placeholder || "Search"}
        />
        <SearchIcon className=" md:inline-flex h-[2.3rem] bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500 ">
        <BookmarkIcon className="h-6 cursor-pointer fill-gray-800 hover:fill-gray-700 " />
        <User />
      </div>
    </header>
  );
}
