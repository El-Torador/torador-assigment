const severeImpactByDaily = (data) => (
  {
    currentlyInfected: data.reportedCases * 50,
<<<<<<< HEAD
    infectionsByRequestedTime: Math.floor(((data.reportedCases * 50) * (2 ** 10)) / 30)
    /* severeCasesByRequestedTime: Math.floor(
=======
    infectionsByRequestedTime: Math.floor(((data.reportedCases * 50) * (2 ** 10)) / 30),
    severeCasesByRequestedTime: Math.floor(
>>>>>>> bd04f844fda9d9a746311bc49794c13010d70db8
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
<<<<<<< HEAD
    */
=======
>>>>>>> bd04f844fda9d9a746311bc49794c13010d70db8
  }
);

const severeImpactByWeekly = (data) => (
  {
    currentlyInfected: severeImpactByDaily(data).currentlyInfected,
<<<<<<< HEAD
    infectionsByRequestedTime: Math.floor((((data.reportedCases * 50) * (2 ** 10)) / 30) * 7)
    /* severeCasesByRequestedTime: Math.floor(
=======
    infectionsByRequestedTime: Math.floor((((data.reportedCases * 50) * (2 ** 10)) / 30) * 7),
    severeCasesByRequestedTime: Math.floor(
>>>>>>> bd04f844fda9d9a746311bc49794c13010d70db8
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
<<<<<<< HEAD
    */
=======
>>>>>>> bd04f844fda9d9a746311bc49794c13010d70db8
  }
);

const severeImpactByMonthly = (data) => (
  {
    currentlyInfected: data.reportedCases * 50,
<<<<<<< HEAD
    infectionsByRequestedTime: (data.reportedCases * 50) * (2 ** 10)
    // severeCasesByRequestedTime: Math.floor((((data.reportedCases * 50) * (2 ** 10)) * 15) / 100)
=======
    infectionsByRequestedTime: (data.reportedCases * 50) * (2 ** 10),
    severeCasesByRequestedTime: Math.floor((((data.reportedCases * 50) * (2 ** 10)) * 15) / 100)
>>>>>>> bd04f844fda9d9a746311bc49794c13010d70db8
  }
);

export default { severeImpactByDaily, severeImpactByWeekly, severeImpactByMonthly };
