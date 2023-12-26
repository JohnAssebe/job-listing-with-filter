import bgHeader from "../assets/images/bg-header-desktop.svg";
import bgHeaderMobile from "../assets/images/bg-header-mobile.svg";
import JobCard from "../components/jobCard";
import { jobs } from "../json/data";
const JobLists = () => {
  return (
    <section className="w-full min-h-screen bg-LightGrayishCyan">
      <div className="w-full h-48 md:h-40 bg-DesaturatedDarkCyan">
        <img
          src={bgHeader}
          className="hidden object-cover w-full h-full md:block"
        />
        <img
          src={bgHeaderMobile}
          className="object-cover w-full h-full md:hidden"
        />
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
