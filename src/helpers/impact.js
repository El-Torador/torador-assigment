const impactByDaily = (data) => (
  {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: (data.reportedCases * 10) * (2 ** Math.trunc(data.timeToElapse / 3)),
    severeCasesByRequestedTime: 0.15 * (
      data.reportedCases * 10
    ) * (
      2 ** Math.trunc(data.timeToElapse / 3)
    ),
    hospitalBedsByRequestedTime: Math.trunc(
      (
        0.35 * data.totalHospitalBeds
      ) - (0.15 * (
        data.reportedCases * 10
      ) * (
        2 ** Math.trunc(data.timeToElapse / 3)
      )
      )
    )
  }
);

const impactByWeekly = (data) => (
  {
    currentlyInfected: impactByDaily(data).currentlyInfected,
    infectionsByRequestedTime: (
      data.reportedCases * 10
    ) * (
      2 ** Math.trunc((data.timeToElapse * 7) / 3)
    ),
    severeCasesByRequestedTime: 0.15 * (
      data.reportedCases * 10
    ) * (
      2 ** Math.trunc((data.timeToElapse * 7) / 3)
    ),
    hospitalBedsByRequestedTime: Math.trunc(
      (
        0.35 * data.totalHospitalBeds
      ) - (0.15 * (
        data.reportedCases * 10
      ) * (
        2 ** Math.trunc((data.timeToElapse * 7) / 3)
      )
      )
    )
  }
);

const impactByMonthly = (data) => (
  {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: (
      data.reportedCases * 10
    ) * (
      2 ** Math.trunc((data.timeToElapse * 30) / 3)
    ),
    severeCasesByRequestedTime: 0.15 * (
      data.reportedCases * 10
    ) * (
      2 ** Math.trunc((data.timeToElapse * 30) / 3)
    ),
    hospitalBedsByRequestedTime: Math.trunc(
      (
        0.35 * data.totalHospitalBeds
      ) - (0.15 * (
        data.reportedCases * 10
      ) * (
        2 ** Math.trunc((data.timeToElapse * 30) / 3)
      )
      )
    )
  }
);

export default { impactByDaily, impactByWeekly, impactByMonthly };
