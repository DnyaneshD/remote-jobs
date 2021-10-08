function getJobs(req, res) {
  return res.status(200).send({
    salary: "40k-50k",
    isFullTime: "true",
    isEuropeOnly: "true",
    title: "Engineering Manager",
    company: {
      name: "HotJar",
      logo: "URL",
    },
  });
}
export default getJobs;
