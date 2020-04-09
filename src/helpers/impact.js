const impactByDaily = (data) => (
  {
    currentlyInfected: data.reportedCases * 10,
<<<<<<< HEAD
    infectionsByRequestedTime: Math.floor(((data.reportedCases * 10) * (2 ** 10)) / 30)
    /* severeCasesByRequestedTime: Math.floor(
=======
    infectionsByRequestedTime: Math.floor(((data.reportedCases * 10) * (2 ** 10)) / 30),
    severeCasesByRequestedTime: Math.floor(
>>>>>>> bd04f844fda9d9a746311bc49794c13010d70db8
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
<<<<<<< HEAD
    */
=======
>>>>>>> bd04f844fda9d9a746311bc49794c13010d70db8
    // hospitalBedsByRequestedTime: data.totalHospitalBeds - ((data.totalHospitalBeds * 50) / 100)
  }
);

const impactByWeekly = (data) => (
  {
    currentlyInfected: impactByDaily(data).currentlyInfected,
<<<<<<< HEAD
    infectionsByRequestedTime: Math.floor((((data.reportedCases * 10) * (2 ** 10)) / 30) * 7)
    /* severeCasesByRequestedTime: Math.floor(
=======
    infectionsByRequestedTime: Math.floor((((data.reportedCases * 10) * (2 ** 10)) / 30) * 7),
    severeCasesByRequestedTime: Math.floor(
>>>>>>> bd04f844fda9d9a746311bc49794c13010d70db8
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
<<<<<<< HEAD
    */
=======
>>>>>>> bd04f844fda9d9a746311bc49794c13010d70db8
  }
);

const impactByMonthly = (data) => (
  {
    currentlyInfected: data.reportedCases * 10,
<<<<<<< HEAD
    infectionsByRequestedTime: (data.reportedCases * 10) * (2 ** 10)
    //severeCasesByRequestedTime: Math.floor((((data.reportedCases * 10) * (2 ** 10)) * 15) / 100)
=======
    infectionsByRequestedTime: (data.reportedCases * 10) * (2 ** 10),
    severeCasesByRequestedTime: Math.floor((((data.reportedCases * 10) * (2 ** 10)) * 15) / 100)
>>>>>>> bd04f844fda9d9a746311bc49794c13010d70db8
  }
);

export default { impactByDaily, impactByWeekly, impactByMonthly };
