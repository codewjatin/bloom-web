import Icons from "../components/utilities/Icons";
import { categories, events } from "../utils/data";

export default async function Page() {
  return (
    <main>
      <nav className="px-20 h-20 border-b flex">
        <div
          id="nav_main"
          className="flex justify-center items-center text-xs gap-8 overflow-scroll ">
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
        </div>
      </nav>
      <section className="mt-16 px-20 flex justify-around flex-wrap gap-x-4 gap-y-8">
        {events.map((event, i) => {
          return (
            <div
              key={i}
              className="flex flex-col overflow-hidden bg-white rounded-xl shadow-md text-slate-500 shadow-slate-200 sm:flex-row w-max">
              <figure className="px-4 py-4">
                <img
                  src={event.imageUrl}
                  alt="card image"
                  className="object-cover w-[310px] aspect-auto rounded-md"
                />
              </figure>
              <div className="p-6 ml-1 mr-4 sm:px-0">
                <header className="flex gap-4 mb-4">
                  <a
                    href="#"
                    className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full">
                    <img
                      src="https://i.pravatar.cc/48?img=24"
                      alt="user name"
                      title="user name"
                      width="48"
                      height="48"
                      className="max-w-full rounded-full"
                    />
                  </a>
                  <div>
                    <h3 className="text-xl font-medium text-slate-700">
                      {event.name}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {" "}
                      In {event.venue}, {event.date}
                    </p>
                  </div>
                </header>
                <p className="h-24 w-64 overflow-hidden">{event.details}</p>
                <div className="space-x-4 mt-4">
                  <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-gray-800 hover:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span>Register</span>
                  </button>
                  <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none justify-self-center whitespace-nowrap bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-600 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-none">
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
