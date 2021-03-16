import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import JobList from "../components/JobList";

import axios from "axios";
import Navbar from "../components/navbar";

const sortbydata = [
  {
    key: "Location",
    selected: false,
  },
  {
    key: "Role",
    selected: false,
  },
  {
    key: "Department",
    selected: false,
  },
  {
    key: "Education",
    selected: false,
  },
  {
    key: "Experience",
    selected: false,
  },
];

function Index(props) {
  let [filters, setFilters] = useState({});
  let [jobs, setJobs] = useState([]);
  let [keyword, setKeyword] = useState("");

  let [sortByData, setSortByData] = useState(sortbydata);

  const getJobList = async () => {
    let filtrs = {};

    for (const key in filters) {
      if (Object.hasOwnProperty.call(filters, key)) {
        const element = filters[key];

        element.forEach((i) => {
          if (i.selected) {
            if (!filtrs[key]) {
              filtrs[key] = [];
            }
            filtrs[key].push(i.key);
          }
        });
      }
    }

    const jobList = await axios.post("api/jobs", {
      filters: filtrs,
      keyword: keyword,
    });
    setJobs(jobList.data.jobs);
  };

  const selectItem = (item) => {
    item.selected = !item.selected;
    let newfilters = { ...filters };
    setFilters(newfilters);
    getJobList();
  };

  const selectSortItem = (item) => {
    item.selected = !item.selected;
    let newdata = [...sortByData];
    setSortByData(newdata);
    getJobList();
  };

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios.get("api/filters");
      setFilters(result.data);
    };

    fetchData();
    getJobList();
  }, []);

  return (
    <div className="flex flex-col  bg-gray-100">
      
        <Header className="hidden" />
      

      {/* <div>
        <Navbar />
      </div> */}

      <div className="shadow flex m-4">
        <input
          className="w-full rounded-md p-2"
          type="text"
          placeholder="Search..."
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getJobList();
            }
          }}
        />
      </div>
      <div className="flex-grow ">
        <div className="flex flex-row">
          <div className="hidden md:block sm:flex sm:flex-col ">
            {filters.job_type ? (
              <div className="flex flex-col m-2 p-4 bg-white rounded-md text-sm leading-relaxed">
                <h1 className="font-bold uppercase">Job type</h1>
                {filters.job_type.map((e) => {
                  return (
                    <div
                      onClick={(event) => {
                        console.log(e);
                        selectItem(e);
                      }}
                      className={`${
                        e.selected ? "text-blue-400" : "text-gray-800"
                      } flex cursor-pointer`}
                    >
                      <p className="text-left pr-4">
                        {e.key}{" "}
                        <span className="text-xs text-gray-400">
                          {e.doc_count}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : null}
            {filters.department ? (
              <div className="flex flex-col m-2  p-4 bg-white rounded-md text-sm leading-relaxed">
                <h1 className="font-bold uppercase">Department</h1>
                {filters.department.map((e) => {
                  return (
                    <div
                      onClick={(event) => {
                        console.log(e);
                        selectItem(e);
                      }}
                      className={`${
                        e.selected ? "text-blue-400" : "text-gray-800"
                      } flex cursor-pointer`}
                    >
                      <p className="text-left pr-4">
                        {e.key}{" "}
                        <span className="text-xs text-gray-400">
                          {e.doc_count}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : null}
            {filters.work_schedule ? (
              <div className="flex flex-col m-2  p-4 bg-white rounded-md text-sm leading-relaxed">
                <h1 className="font-bold uppercase">Work schedule</h1>
                {filters.work_schedule.map((e) => {
                  return (
                    <div
                      onClick={(event) => {
                        console.log(e);
                        selectItem(e);
                      }}
                      className={`${
                        e.selected ? "text-blue-400" : "text-gray-800"
                      } flex cursor-pointer`}
                    >
                      <p className="text-left pr-4">
                        {e.key}{" "}
                        <span className="text-xs text-gray-400">
                          {e.doc_count}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : null}
            {filters.experience ? (
              <div className="flex flex-col m-2  p-4 bg-white rounded-md text-sm leading-relaxed">
                <h1 className="font-bold uppercase">Experience</h1>
                {filters.experience.map((e) => {
                  return (
                    <div
                      onClick={(event) => {
                        console.log(e);
                        selectItem(e);
                      }}
                      className={`${
                        e.selected ? "text-blue-400" : "text-gray-800"
                      } flex cursor-pointer`}
                    >
                      <p className="text-left pr-4">
                        {e.key}{" "}
                        <span className="text-xs text-gray-400">
                          {e.doc_count}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div className="flex-1 flex flex-col m-2 p-4 bg-white rounded-md text-sm ">
            <div className="flex flex-row justify-end p-3">
              <div className="flex flex-row flex-wrap space-x-3">
                <p className="text-gray-500">Sort by:</p>

                {sortByData.map((e) => {
                  return (
                    <div
                      onClick={(event) => {
                        console.log(e);
                        selectSortItem(e);
                      }}
                      className={`${
                        e.selected ? "text-blue-400" : "text-gray-800"
                      } flex cursor-pointer`}
                    >
                      <p>{e.key}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <JobList jobs={jobs} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Index;
