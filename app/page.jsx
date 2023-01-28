"use client";

import Icons from "../components/utilities/Icons";
import { categories } from "../utils/categories";

export default function Page() {
  return (
    <main className="px-20">
      <nav
        id="nav_main"
        className="flex h-20 justify-center items-center text-xs gap-8 overflow-scroll mt-4">
        {categories.map((category, i) => {
          const srcName = category.split(" ").join("-").toLowerCase();
          return (
            <button
              key={i}
              className="category-icon relative flex flex-col items-center gap-2 min-w-[60px]">
              <Icons name={srcName} height={28} width={28} />
              <span>{category}</span>
            </button>
          );
        })}
      </nav>
    </main>
  );
}
