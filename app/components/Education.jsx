import React from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

const Education = ({ icon, name, detail, timeLine, link }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-left">
      {icon}
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-wrap">
        {name}
      </h5>
      <p className="mb-1 font-normal text-gray-500 dark:text-gray-400">
        {detail}
      </p>
      <p className="text-gray-900 dark:text-white mb-3">{timeLine}</p>
      <a
        href={link}
        target="_blank"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Visit
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};

export default Education;
