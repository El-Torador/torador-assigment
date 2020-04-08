const severeImpactByDaily = (data) => (
  {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: Math.floor(((data.reportedCases * 50) * 2) / 3)
  }
);

const severeImpactByWeekly = (data) => (
  {
    currentlyInfected: severeImpactByDaily(data).currentlyInfected,
    infectionsByRequestedTime: severeImpactByDaily(data).infectionsByRequestedTime * 7
  }
);

const severeImpactByMonthly = (data) => (
  {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: (data.reportedCases * 50) * (2 ** 10)
  }
);

export default { severeImpactByDaily, severeImpactByWeekly, severeImpactByMonthly };
