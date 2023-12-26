/*eslint-disable*/
const JobCard = ({ job, handleUpdateFilter }) => {
  var tags = [job.role, job.level, ...job.languages, ...job.tools];
  return (
    <div
      className={`relative flex md:flex-row flex-col items-start md:items-center justify-between px-5 py-3 my-12 md:my-8 shadow-lg font-leagueSpartan ${
        job.featured && "border-l-4 border-DesaturatedDarkCyan"
      }`}
    >
      <div className="flex flex-col items-start justify-center gap-4 py-2 border-b md:items-center md:flex-row md:border-none">
        <div className="absolute top-0 w-12 h-12 mb-4 -translate-y-1/2 rounded-full md:w-16 md:h-16 left-6 md:left-0 md:relative bg-DesaturatedDarkCyan md:translate-y-0 md:mb-0">
          <img
            src={job.logo}
            alt="company"
            className="object-cover w-full h-full rounded-full "
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-1 pt-5 md:pt-0">
          <div className="flex items-center justify-center gap-3">
            <h4 className="text-base font-bold capitalize text-DesaturatedDarkCyan">
              {job.company}
            </h4>
            {job.new && (
              <p className="px-2 text-xs font-bold text-white uppercase rounded-md bg-DesaturatedDarkCyan">
                new!
              </p>
            )}
            {job.featured && (
              <p className="px-2 text-xs font-bold text-white uppercase rounded-md bg-VeryDarkGrayishCyan">
                featured
              </p>
            )}
          </div>
          <h3 className="text-base font-bold capitalize duration-500 cursor-pointer md:text-lg text-VeryDarkGrayishCyan hover:text-DesaturatedDarkCyan">
            {job.position}
          </h3>
          <div className="flex items-center justify-center gap-4 text-sm text-DarkGrayishCyan">
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
            <p>{job.location}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-2 mt-4 text-sm font-bold md:justify-center md:gap-6 text-DesaturatedDarkCyan md:mt-0">
        {tags.map((lang, _) => (
          <p
            className="px-2 py-1 duration-500 rounded-lg shadow-md cursor-pointer shadow-LightGrayishCyan bg-LightGrayishCyan2 hover:text-white hover:bg-DesaturatedDarkCyan"
            key={_}
            onClick={() => handleUpdateFilter(lang)}
          >
            {lang}
          </p>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
