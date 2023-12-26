import bgHeader from "../assets/images/bg-header-desktop.svg";
import JobCard from "../components/jobCard";
import { jobs } from "../json/data";
const JobLists = () => {
  return (
    <section className="w-full min-h-screen bg-LightGrayishCyan">
      <div className="w-full h-28 bg-DesaturatedDarkCyan">
        <img src={bgHeader} className="object-cover w-full h-full" />
      </div>
      <div className="max-w-[1100px] mx-auto">
        {jobs.map((job, _) => (
          <JobCard key={_} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobLists;
