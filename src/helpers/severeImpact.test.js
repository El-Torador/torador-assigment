import severeImpact from './severeImpact';

const data = [
  {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  },
  {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'weeks',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  },
  {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'months',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  }
];

describe('test all the severe Impacts by period', () => {
  it('should return correct severeImpact by daily', () => {
    expect(severeImpact.severeImpactByDaily(data[0]))
      .toStrictEqual(
        {
          currentlyInfected: data[0].reportedCases * 50,
          infectionsByRequestedTime: Math.floor(((data[0].reportedCases * 50) * (2 ** 10)) / 30)
          /* severeCasesByRequestedTime: Math.floor(
            (
              (
                (
                  (
                    data[0].reportedCases * 50
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
  });
  it('should return correct severeImpact by weekly', () => {
    expect(severeImpact.severeImpactByWeekly(data[1]))
      .toStrictEqual(
        {
          currentlyInfected: severeImpact.severeImpactByDaily(data[1]).currentlyInfected,
          infectionsByRequestedTime: Math.floor(
            (
              (
                (
                  data[1].reportedCases * 50
                ) * (
                  2 ** 10
                )
              ) / 30
            ) * 7
          )
          /* severeCasesByRequestedTime: Math.floor(
            (
              (
                (
                  (
                    (
                      data[1].reportedCases * 50
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
  });
  it('should return correct severeImpact by monthly', () => {
    expect(severeImpact.severeImpactByMonthly(data[2]))
      .toStrictEqual(
        {
          currentlyInfected: data[2].reportedCases * 50,
          infectionsByRequestedTime: (data[2].reportedCases * 50) * (2 ** 10)
          /* severeCasesByRequestedTime: Math.floor(
            (
              (
                (
                  data[2].reportedCases * 50
                ) * (
                  2 ** 10
                )
              ) * 15
            ) / 100
          )
          */
        }
      );
  });
});
