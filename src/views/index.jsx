import { useState } from "react";
import bgHeader from "../assets/images/bg-header-desktop.svg";
import bgHeaderMobile from "../assets/images/bg-header-mobile.svg";
import JobCard from "../components/jobCard";
import { jobs } from "../json/data";
import { TaggedJobs } from "../utils/filterJobs";
const JobLists = () => {
  const [filters, setFilters] = useState([]);
  const handleUpdateFilter = (tag) =>
    !filters.includes(tag) && setFilters((filter) => [...filter, tag]);
  const removeTag = (tag) =>
    setFilters((filter) => filter.filter((tags) => tags != tag));
  const removeTags = () => setFilters([]);
  const taggedJobs = TaggedJobs(jobs, filters).length
    ? TaggedJobs(jobs, filters)
    : jobs;
  return (
    <section className="w-full min-h-screen bg-LightGrayishCyan">
      <div className="relative w-full h-48 md:h-40 bg-DesaturatedDarkCyan">
        <img
          src={bgHeader}
          className="hidden object-cover w-full h-full md:block"
        />
        <img
          src={bgHeaderMobile}
          className="object-cover w-full h-full md:hidden"
        />
        {filters.length > 0 && (
          <div className="absolute bottom-0 flex items-center justify-between w-11/12 px-4 py-2 -translate-x-1/2 translate-y-1/2 rounded-md shadow-xl min-h-20 md:h-20 md:w-2/3 bg-LightGrayishCyan left-1/2">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {filters.map((tag, _) => (
                <div
                  className="flex items-center justify-between gap-4 border rounded-md bg-LightGrayishCyan2"
                  key={_}
                >
                  <p>{tag}</p>
                  <div
                    className="p-2 duration-500 cursor-pointer w-7 bg-DesaturatedDarkCyan rounded-r-md hover:bg-VeryDarkGrayishCyan"
                    onClick={() => removeTag(tag)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                    >
                      <path
                        fill="#FFF"
                        fillRule="evenodd"
                        d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="font-bold text-DesaturatedDarkCyan hover:underline underline-offset-2 decoration-2"
              onClick={() => removeTags()}
            >
              clear
            </button>
          </div>
        )}
      </div>
      <div className="max-w-[1100px] mx-auto px-2 pt-14 md:pt-8">
        {taggedJobs.map((job, _) => (
          <JobCard key={_} job={job} handleUpdateFilter={handleUpdateFilter} />
        ))}
      </div>
    </section>
  );
};

export default JobLists;
