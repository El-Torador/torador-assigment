const impactByDaily = (data) => (
  {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: Math.floor(((data.reportedCases * 10) * (2 ** 10)) / 30)
    /* severeCasesByRequestedTime: Math.floor(
      (
        (
          (
            (
              data.reportedCases * 10
            ) * (
              2 ** 10
            )
          ) / 30
        ) * 15
      ) / 100
    )
    */
    // hospitalBedsByRequestedTime: data.totalHospitalBeds - ((data.totalHospitalBeds * 50) / 100)
  }
);

const impactByWeekly = (data) => (
  {
    currentlyInfected: impactByDaily(data).currentlyInfected,
    infectionsByRequestedTime: Math.floor((((data.reportedCases * 10) * (2 ** 10)) / 30) * 7)
    /* severeCasesByRequestedTime: Math.floor(
      (
        (
          (
            (
              (
                data.reportedCases * 10
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

const impactByMonthly = (data) => (
  {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: (data.reportedCases * 10) * (2 ** 10)
    //severeCasesByRequestedTime: Math.floor((((data.reportedCases * 10) * (2 ** 10)) * 15) / 100)
  }
);

export default { impactByDaily, impactByWeekly, impactByMonthly };
