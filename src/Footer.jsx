export function Footer() {
  return (
    <>
      <div className="container mx-auto">
        <div className="border-red-600 border-t-2 w-full pb-2"></div>
      </div>

      <footer className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center sm:justify-start h-16 w-16">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 773.87 773.87"
                width="100%"
                height="100%"
              >
                <defs>
                  <style>
                    {`.cls-1 {
            fill: #dc2626;
          }`}
                  </style>
                </defs>
                <path
                  className="cls-1"
                  d="m690.08,627.11c52.43-66.03,83.79-149.51,83.79-240.18C773.87,173.58,600.29,0,386.93,0c-73.71,0-142.66,20.72-201.36,56.64h-101.79v90.11C31.36,212.79,0,296.26,0,386.93s31.36,174.15,83.79,240.18v90.11h76.83v-16.65c63.68,46.08,141.88,73.29,226.32,73.29,94.6,0,181.36-34.14,248.66-90.73h54.49v-56.03Zm0-43.61V190.37c36.84,56.62,58.27,124.13,58.27,196.57s-21.44,139.95-58.27,196.57ZM25.52,386.93c0-72.43,21.44-139.95,58.27-196.57v393.13c-36.84-56.62-58.27-124.13-58.27-196.57Zm135.1,281.56v-259.66h309.33v-62.67H160.62V119.33h352.71v-62.69H240.28c44.84-19.99,94.47-31.12,146.66-31.12,125.27,0,235.84,64.07,300.71,161.15h-87.97l-157.15,417.21-68.36-182.29h-57.64l98.19,261.54h56.34l155.06-413.03h1.38v386.31c-63.94,57.14-148.26,91.93-240.55,91.93-85.6,0-164.33-29.93-226.32-79.86Z"
                />
                <rect className="cls-1" x="195.68" y="421.6" width="62.59" height="261.54" />
                <polygon
                  className="cls-1"
                  points="195.68 186.67 195.68 333.41 258.27 333.41 258.27 270.11 259.65 270.11 283.4 333.41 341.09 333.41 286.08 186.67 195.68 186.67"
                />
              </svg>
            </div>

            <p className="mt-4 text-center text-sm text-red-600 lg:mt-0 lg:text-right">
              Farhan J Mohamed {new Date().getFullYear()}. Working on a dream.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
