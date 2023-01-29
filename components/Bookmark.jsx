export default function Bookmark({
  data: { name, imageUrl, time, date, venue },
}) {
  return (
    <div className="flex flex-col overflow-hidden bg-white rounded-xl shadow-md text-slate-500 shadow-slate-200 sm:flex-row w-max mt-4">
      <div className="p-6 ml-1 mr-4 sm:px-0">
        <header className="flex gap-4 px-5">
          <a
            href="#"
            className="relative inline-flex items-center justify-center w-12 h-12 text-white">
            <img src={imageUrl} alt="" />
          </a>
          <div>
            <h3 className="text-xl font-medium text-slate-700">{name}</h3>
            <p className="text-sm text-slate-400">
              {time}, {date}
            </p>
            <p className="text-sm text-slate-400">{venue}</p>
          </div>
          <div>
            <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none justify-self-center whitespace-nowrap bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-600 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-none">
              <span>View Details</span>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}
