const impactByDaily = (data) => (
  {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: Math.floor(((data.reportedCases * 10) * 2) / 3)
  }
);

const impactByWeekly = (data) => (
  {
    currentlyInfected: impactByDaily(data).currentlyInfected,
    infectionsByRequestedTime: impactByDaily(data).infectionsByRequestedTime * 7
  }
);

const impactByMonthly = (data) => (
  {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: (data.reportedCases * 10) * (2 ** 10)
  }
);

export default { impactByDaily, impactByWeekly, impactByMonthly };
