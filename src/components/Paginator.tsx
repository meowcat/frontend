import React from 'react';

interface PaginatorProps {
  page: number;
  length: number;
  total: number;
}

const step = 10;

const Paginator = ({ page, length, total }: PaginatorProps) => {
  const start = page * step;
  const end = start + Math.min(step, length);
  const totalPages = Math.floor(total / step);
  const disablePrev = page === 0;
  const disableNext = page + 1 === totalPages;
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
      <div className="flex justify-between flex-1 sm:hidden">
        <a
          href={`?page=${page - 1}`}
          className={`${
            disablePrev ? 'link-disable ' : ''
          }relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700`}
        >
          Previous
        </a>
        <a
          href={`?page=${page + 1}`}
          className={`${
            disableNext ? 'link-disable ' : ''
          }relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700`}
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm leading-5 text-gray-700">
            Showing
            <span className="px-1 font-medium">{start + 1}</span>
            to
            <span className="px-1 font-medium">{end}</span>
            of
            <span className="px-1 font-medium">{total}</span>
            results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex shadow-sm">
            <a
              href={`?page=${page - 1}`}
              className={`${
                disablePrev ? 'link-disable ' : ''
              }relative inline-flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-l-md hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500`}
              aria-label="Previous"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {Array(totalPages)
              .fill(0)
              .map((_, index) => (
                <a
                  href={`?page=${index}`}
                  key={index}
                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
                >
                  {index + 1}
                </a>
              ))}
            <a
              href={`?page=${page + 1}`}
              aria-label="Next"
              className={`${
                disableNext ? 'link-disable ' : ''
              }relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-r-md hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500`}
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
