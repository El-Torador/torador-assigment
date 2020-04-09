const severeImpactByDaily = (data) => (
  {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: Math.floor(((data.reportedCases * 50) * (2 ** 10)) / 30)
    /* severeCasesByRequestedTime: Math.floor(
      (
        (
          (
            (
              data.reportedCases * 50
            ) * (
              2 ** 10
            )
          ) / 30
        ) * 15
      ) / 100
    )
    */
  }
);

const severeImpactByWeekly = (data) => (
  {
    currentlyInfected: severeImpactByDaily(data).currentlyInfected,
    infectionsByRequestedTime: Math.floor((((data.reportedCases * 50) * (2 ** 10)) / 30) * 7)
    /* severeCasesByRequestedTime: Math.floor(
      (
        (
          (
            (
              (
                data.reportedCases * 50
              ) * (
                2 ** 10
              )
            ) / 30
          ) * 7
        ) * 15
      ) / 100
    )
    */
  }
);

const severeImpactByMonthly = (data) => (
  {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: (data.reportedCases * 50) * (2 ** 10)
    // severeCasesByRequestedTime: Math.floor((((data.reportedCases * 50) * (2 ** 10)) * 15) / 100)
  }
);

export default { severeImpactByDaily, severeImpactByWeekly, severeImpactByMonthly };
