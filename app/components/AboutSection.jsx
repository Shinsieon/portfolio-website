"use client";
import React, { useTransition, useState } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Title,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import DoughnutChart from "./DoughnutChart";
import HorizontalLineChart from "./HorizontalLineChart";
Chart.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  Legend
);

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    component: (
      <div className="p-3 rounded-lg" role="tabpanel">
        <div className="w-full flex justify-center">
          <DoughnutChart />
          <HorizontalLineChart />
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    component: (
      <ul className="list-disc pl-2">
        <li>경희대학교 산업경영공학과 졸업</li>
        <li>한국디지털미디어고등학교 해킹방어과 졸업</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    component: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const selectedClass =
    "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
  const notSelectedClass =
    "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {TAB_DATA.map((item, idx) => {
          return (
            <li className="me-2" key={idx}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange(e.target.innerHTML.toLowerCase());
                }}
                className={item.id === tab ? selectedClass : notSelectedClass}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
      <div>{TAB_DATA.find((t) => t.id === tab).component}</div>
    </div>
  );
};

export default AboutSection;

// import React, { useEffect, useState } from "react";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
// import { useRecoilState } from "recoil";
// import { urlState } from "../../src/recoilState";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// );

// function Lastweek() {
//     const [rootUrl, setRootUrl] = useRecoilState(urlState);
//     const [chatData, setChatData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     `${rootUrl}/admin/dashboard/lastweek`
//                 );
//                 const json = await response.json();
//                 setChatData(json.data);
//             } catch (error) {
//                 console.log("Error :", error);
//             }
//         };
//         fetchData();
//         console.log(chatData);
//     }, []);

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: "top",
//             },
//             title: {
//                 display: true,
//                 text: "지난 7일 간 채팅 건수",
//             },
//         },
//     };

//     let labels = [];
//     if (chatData.length > 0) {
//         labels = chatData.map((data) => data.x);
//     }

//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: "채팅 건수",
//                 data: chatData.map((data) => data.y),
//                 borderColor: "rgb(255, 99, 132)",
//                 backgroundColor: "rgba(255, 99, 132, 0.5)",
//             },
//         ],
//     };
//     return (
//         <div>
//             {chatData.length > 0 && <Line options={options} data={data} />}
//         </div>
//     );
// }

// export default Lastweek;
