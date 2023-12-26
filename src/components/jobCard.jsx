/*eslint-disable*/
const JobCard = ({ job }) => {
  var tags = [job.role, job.level, ...job.languages, ...job.tools];
  return (
    <div
      className={`flex items-center justify-between px-5 py-3 my-8 shadow-lg font-leagueSpartan ${
        job.featured && "border-l-4 border-DesaturatedDarkCyan"
      }`}
    >
      <div className="flex items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-full bg-DesaturatedDarkCyan">
          <img
            src={job.logo}
            alt="company"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
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
          <h3 className="text-lg font-bold capitalize text-VeryDarkGrayishCyan">
            {job.position}
          </h3>
          <div className="flex items-center justify-center gap-4 text-sm text-DarkGrayishCyan">
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
            <p>{job.location}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-DesaturatedDarkCyan">
        {tags.map((lang, _) => (
          <p
            className="px-2 py-1 shadow-md shadow-LightGrayishCyan bg-LightGrayishCyan2"
            key={_}
          >
            {lang}
          </p>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
