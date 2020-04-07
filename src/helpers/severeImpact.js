const severeImpact = (data) => (
  {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: (data.reportedCases * 50) * (2 ** 10)
  }
);

export default severeImpact;
