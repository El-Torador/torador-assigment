const severeImpactByDaily = (data) => (
  {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc(data.timeToElapse / 3)
    ),
    severeCasesByRequestedTime: 0.15 * (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc(data.timeToElapse / 3)
    ),
    hospitalBedsByRequestedTime: Math.trunc(
      (
        0.35 * data.totalHospitalBeds
      ) - (
        0.15 * (
          data.reportedCases * 50
        ) * (
          2 ** Math.trunc(data.timeToElapse / 3)
        )
      )
    )
  }
);

const severeImpactByWeekly = (data) => (
  {
    currentlyInfected: severeImpactByDaily(data).currentlyInfected,
    infectionsByRequestedTime: (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc((data.timeToElapse * 7) / 3)
    ),
    severeCasesByRequestedTime: 0.15 * (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc((data.timeToElapse * 7) / 3)
    ),
    hospitalBedsByRequestedTime: Math.trunc(
      (
        0.35 * data.totalHospitalBeds
      ) - (
        0.15 * (
          data.reportedCases * 50
        ) * (
          2 ** Math.trunc((data.timeToElapse * 7) / 3)
        )
      )
    )
  }
);

const severeImpactByMonthly = (data) => (
  {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc((data.timeToElapse * 30) / 3)
    ),
    severeCasesByRequestedTime: 0.15 * (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc((data.timeToElapse * 30) / 3)
    ),
    hospitalBedsByRequestedTime: Math.trunc(
      (
        0.35 * data.totalHospitalBeds
      ) - (
        0.15 * (
          data.reportedCases * 50
        ) * (
          2 ** Math.trunc((data.timeToElapse * 30) / 3)
        )
      )
    )
  }
);

export default { severeImpactByDaily, severeImpactByWeekly, severeImpactByMonthly };
