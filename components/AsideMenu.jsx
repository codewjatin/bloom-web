import { Fragment, useState } from "react";
import cn from "classnames";
import { bookmarks, passes, saved } from "../utils/data";
import Pass from "./Pass";
import Bookmark from "../components/Bookmark";
import Saved from "../components/Saved";

export default function AsideMenu({ setIsOpen, isOpen }) {
  const [index, setIndex] = useState(0);
  return (
    <aside
      className={cn(
        "w-[40%] absolute right-0 top-0 z-50 px-10 h-full shadow rounded-l-2xl",
        isOpen ? "block" : "translate-x-full",
        "backdrop-saturate-150 backdrop-blur-lg bg-white bg-opacity-80 transition duration-300"
      )}>
      <nav className="h-24 flex items-center justify-between border-b">
        <ul className="w-full flex items-center gap-2 text-gray-500 text-lg">
          {["Passes", "Saved", "Bookmarks"].map((item, i) => {
            return (
              <Fragment key={i}>
                <li
                  onClick={() => setIndex(i)}
                  className={cn(
                    index === i ? "text-gray-800 font-medium" : null,
                    "hover:text-gray-800 cursor-pointer"
                  )}>
                  {item}
                </li>
                {i < 2 ? (
                  <span className="w-1 h-1 mt-[2px] rounded-full bg-gray-500"></span>
                ) : null}
              </Fragment>
            );
          })}
        </ul>
        <button onClick={() => setIsOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>
      <main className="py-4 h-[85%] overflow-scroll">
        {index === 0 &&
          passes.map((pass, i) => {
            return <Pass key={i} data={pass} />;
          })}
        {index === 1 &&
          saved.map((pass, i) => {
            return <Saved key={i} data={pass} />;
          })}
        {index === 2 &&
          bookmarks.map((pass, i) => {
            return <Bookmark key={i} data={pass} />;
          })}
      </main>
    </aside>
  );
}
