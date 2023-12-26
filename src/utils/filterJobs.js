export const TaggedJobs = (allJob, filters) => {
  var jobs = allJob.filter((job) => {
    const jobtags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every((tag) => jobtags.includes(tag));
  });
  return jobs;
};
