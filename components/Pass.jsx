export default function Pass({
  data: { name, date, time, day, venue, imageUrl, qrcodeUrl, bookingId },
}) {
  return (
    <div className="flex w-full flex-col justify-center overflow-hidden bg-white rounded-xl shadow-md text-slate-500 shadow-slate-200 sm:flex-row mt-4 py-8 px-2">
      <div>
        <header className="flex justify-between gap-2 mb-4 border-b-4 border-dotted">
          <a
            href="#"
            className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full">
            <img
              loading="lazy"
              src={imageUrl}
              alt="meta"
              className="h-auto w-20 rounded-full"
            />
          </a>
          <div>
            <h3
              className="font-medium text-slate-700 w-28"
              style={{ lineHeight: 1.2 }}>
              {name}
            </h3>
            <p className="text-sm text-slate-400">
              {time} | {day}
            </p>
            <p className="text-sm text-slate-400">{date}</p>
            <p className="text-sm text-slate-400 mb-5">{venue}</p>
          </div>
          <div>
            <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-gray-800 hover:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span>View on Map</span>
            </button>
          </div>
        </header>
        <div className="flex flex-col items-center justify-between overflow-hidden bg-white rounded-xl text-slate-500 sm:flex-row">
          <figure>
            <img
              src={qrcodeUrl}
              alt="card image"
              className="object-cover w-36 aspect-auto rounded-md"
            />
          </figure>
          <div>
            <header className="flex gap-4 mb-4">
              <div>
                <h3 className="text-xl font-medium text-slate-700">
                  Booking ID: {bookingId}
                </h3>
                <p className="text-sm text-slate-500 mt-4">
                  Get this QR code scanned before <br />
                  entering the event.
                </p>
              </div>
            </header>
            <div className="space-x-4 mt-4">
              <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none justify-self-center whitespace-nowrap bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-600 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-none">
                <svg
                  width="27"
                  height="21"
                  viewBox="0 0 27 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.1634 11.5296C13.6587 11.5296 14.1103 11.2964 14.6386 10.7681L24.855 0.625521C24.4045 0.218411 23.5938 0.0213013 22.4442 0.0213013H3.5496C2.54624 0.0213013 1.83374 0.208801 1.42382 0.587083L11.6883 10.7681C12.2091 11.2868 12.6586 11.5296 13.1634 11.5296ZM0.314062 18.5939L8.72367 10.2591L0.324373 1.9727C0.112734 2.33669 0 2.94981 0 3.81746V16.7676C0 17.6271 0.102187 18.2383 0.314062 18.5939ZM3.84421 20.5734H22.7388C23.7675 20.5734 24.4915 20.3754 24.9119 19.9856L16.3404 11.4792L15.6176 12.2116C14.7984 12.9998 14.0241 13.3598 13.1634 13.3598C12.2932 13.3598 11.5167 12.9998 10.7072 12.2116L9.97687 11.4834L1.42453 19.976C1.89726 20.3754 2.69812 20.5734 3.84421 20.5734ZM25.9861 18.5843C26.1862 18.2191 26.2905 17.6175 26.2905 16.7676V3.81746C26.2905 2.96903 26.1778 2.35591 25.9758 2.00153L17.5936 10.2591L25.9861 18.5843Z"
                    fill="black"
                  />
                </svg>
                <span>I want to mail it</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
