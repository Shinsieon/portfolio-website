"use client";
import React, { useState, useEffect } from "react";
import { Typography, Avatar, Input } from "@material-tailwind/react";
import Link from "next/link";
import Skeleton from "./Skeleton";

const TABLE_HEAD = ["Title", "Skills", "Created", "Viewed"];

const BlogTableSection = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // 페이지당 항목 수
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectOptions, setSelectOptions] = useState([]);

  useEffect(() => {
    // 데이터를 가져오는 비동기 함수
    const fetchData = async () => {
      try {
        const response = await fetch("/api/blogPost");
        const jsonData = await response.json();
        setData(jsonData);
        // 데이터를 가져온 후 skills 배열을 처리하여 select box에 사용할 형태로 변환
        let skillsOptions: String[] = [];
        jsonData?.map((item) => {
          skillsOptions = [
            ...skillsOptions,
            ...item.fileInfo.skills.split(","),
          ];
        });
        const uniqueSkillsOptions = [...new Set<String>(skillsOptions)]; // 중복 제거
        setSelectOptions(uniqueSkillsOptions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // 컴포넌트가 처음 마운트될 때 데이터를 가져옴
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 함

  const filteredData = data.filter((item) => {
    const includesSearchTerm = item.fileInfo.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const includesSelectedSkill = selectedSkill
      ? item.fileInfo.skills.toLowerCase().includes(selectedSkill.toLowerCase())
      : true;
    return includesSearchTerm && includesSelectedSkill;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSelectChange = (e) => {
    setSelectedSkill(e.target.value);
    setCurrentPage(1); // select 값이 변경될 때 페이지를 초기화하여 첫 페이지로 돌아감
  };

  const paginate = (pageNumber) => {
    if (
      pageNumber === 0 ||
      pageNumber > Math.ceil(filteredData.length / itemsPerPage)
    )
      return;
    setCurrentPage(pageNumber);
  };

  const slicePagination = (paginationArray, currentPage) => {
    const start = Math.max(currentPage - 2, 1); // 현재 페이지 주변에 보여질 페이지 수
    const end = Math.min(
      start + 4,
      Math.ceil(filteredData.length / itemsPerPage)
    ); // 최대 5개의 페이지 번호를 표시
    return paginationArray.slice(start - 1, end); // 배열 인덱스는 0부터 시작하므로 start에서 1을 빼고, end는 포함되지 않도록 함
  };
  return (
    <div>
      <form className="w-full flex justify-end gap-5">
        <ul className="flex items-center -space-x-px h-14 text-base">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-14 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => paginate(currentPage - 1)}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          {slicePagination(
            Array.from({
              length: Math.ceil(filteredData.length / itemsPerPage),
            }),
            currentPage
          ).map((_, index) =>
            currentPage === index + 1 ? (
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 w-12 h-14 leading-tight text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ) : (
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 w-12 h-14 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            )
          )}

          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-14 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => paginate(currentPage + 1)}
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
        <div className="pb-4  dark:bg-gray-900">
          <label className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block ps-10 h-14 text-lg text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for posts"
              onChange={handleSearch}
            />
          </div>
        </div>

        <select
          id="skills"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-14 text-lg"
          onChange={handleSelectChange}
        >
          <option value="" selected>
            All Skills
          </option>
          {selectOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th key={index} className="px-6 py-3 text-left">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map(({ fileInfo, fileName, viewed }, index) => {
                const { title, date, skills, cover_image, content } = fileInfo;
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={index}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={`/images/${cover_image}`}
                          alt={fileName || ""}
                          placeholder={""}
                          size="sm"
                        />
                        <div className="flex flex-col ">
                          <Link
                            className="font-normal text-base"
                            href={`/blog/${fileName.replace(".md", "")}`}
                          >
                            {title}
                          </Link>
                          <Typography
                            placeholder={""}
                            variant="small"
                            className="font-normal opacity-70"
                          >
                            {""}
                          </Typography>
                        </div>
                      </div>
                    </th>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <Typography
                          placeholder={""}
                          variant="small"
                          className="font-normal"
                        >
                          {skills}
                        </Typography>
                      </div>
                    </td>

                    <td className="p-4">
                      <Typography
                        placeholder={""}
                        variant="small"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        placeholder={""}
                        variant="small"
                        className="font-normal text-center"
                      >
                        {viewed}
                      </Typography>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4}>
                  <Skeleton />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogTableSection;
