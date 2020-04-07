const impact = (data) => (
  {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: (data.reportedCases * 10) * (2 ** 10)
  }
);

export default impact;
