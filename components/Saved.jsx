export default function Pass({ data: { name, imageUrl } }) {
  return (
    <div className="flex flex-col justify-center overflow-hidden bg-white rounded-xl shadow-md text-slate-500 shadow-slate-200 sm:flex-row w-full mt-4 py-4">
      <header className="flex gap-1 items-center px-5">
        <a
          href="#"
          className="relative inline-flex items-center justify-center w-12 h-12 text-white">
          <img src={imageUrl} alt="" />
        </a>
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-medium text-slate-700">{name}</h3>
          <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none justify-self-center whitespace-nowrap bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-600 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-none">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.5 6H5.25C4.65326 6 4.08097 6.23705 3.65901 6.65901C3.23705 7.08097 3 7.65326 3 8.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H15.75C16.3467 21 16.919 20.7629 17.341 20.341C17.7629 19.919 18 19.3467 18 18.75V10.5M7.5 16.5L21 3M21 3H15.75M21 3V8.25"
                stroke="black"
                strokeWidth="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Verify</span>
          </button>
        </div>
      </header>
    </div>
  );
}
