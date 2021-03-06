import impact from './impact';

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

describe('test all the impacts by period', () => {
  it('should return correct impact by daily', () => {
    expect(impact.impactByDaily(data[0]))
      .toStrictEqual(
        {
          currentlyInfected: data[0].reportedCases * 10,
          infectionsByRequestedTime: (
            data[0].reportedCases * 10
          ) * (
            2 ** Math.trunc(data[0].timeToElapse / 3)
          ),
          severeCasesByRequestedTime: 0.15 * (
            data[0].reportedCases * 10
          ) * (
            2 ** Math.trunc(data[0].timeToElapse / 3)
          ),
          hospitalBedsByRequestedTime: Math.trunc(
            (
              0.35 * data[0].totalHospitalBeds
            ) - (0.15 * (
              data[0].reportedCases * 10
            ) * (
              2 ** Math.trunc(data[0].timeToElapse / 3)
            )
            )
          ),
          casesForICUByRequestedTime: Math.trunc(0.05 * (
            data[0].reportedCases * 10
          ) * (
            2 ** Math.trunc(data[0].timeToElapse / 3)
          )),
          casesForVentilatorsByRequestedTime: Math.trunc(0.02 * (
            data[0].reportedCases * 10
          ) * (
            2 ** Math.trunc(data[0].timeToElapse / 3)
          )),
          dollarsInFlight: Math.trunc(((
            (
              data[0].reportedCases * 10
            ) * (
              2 ** Math.trunc(data[0].timeToElapse / 3)
            ) * data[0].region.avgDailyIncomePopulation
          ) * data[0].region.avgDailyIncomeInUSD) / data[0].timeToElapse)
        }
      );
  });
  it('should return correct impact by weekly', () => {
    expect(impact.impactByWeekly(data[1]))
      .toStrictEqual(
        {
          currentlyInfected: impact.impactByDaily(data[1]).currentlyInfected,
          infectionsByRequestedTime: (
            data[1].reportedCases * 10
          ) * (
            2 ** Math.trunc((data[1].timeToElapse * 7) / 3)
          ),
          severeCasesByRequestedTime: 0.15 * (
            data[1].reportedCases * 10
          ) * (
            2 ** Math.trunc((data[1].timeToElapse * 7) / 3)
          ),
          hospitalBedsByRequestedTime: Math.trunc(
            (
              0.35 * data[1].totalHospitalBeds
            ) - (0.15 * (
              data[1].reportedCases * 10
            ) * (
              2 ** Math.trunc((data[1].timeToElapse * 7) / 3)
            )
            )
          ),
          casesForICUByRequestedTime: Math.trunc(0.05 * (
            data[1].reportedCases * 10
          ) * (
            2 ** Math.trunc((data[1].timeToElapse * 7) / 3)
          )),
          casesForVentilatorsByRequestedTime: Math.trunc(0.02 * (
            data[1].reportedCases * 10
          ) * (
            2 ** Math.trunc((data[1].timeToElapse * 7) / 3)
          )),
          dollarsInFlight: Math.trunc(((
            (
              data[1].reportedCases * 10
            ) * (
              2 ** Math.trunc((data[1].timeToElapse * 7) / 3)
            ) * data[1].region.avgDailyIncomePopulation
          ) * data[1].region.avgDailyIncomeInUSD) / (data[1].timeToElapse * 7))
        }
      );
  });
  it('should return correct impact by monthly', () => {
    expect(impact.impactByMonthly(data[2]))
      .toStrictEqual(
        {
          currentlyInfected: data[2].reportedCases * 10,
          infectionsByRequestedTime: (
            data[2].reportedCases * 10
          ) * (
            2 ** Math.trunc((data[2].timeToElapse * 30) / 3)
          ),
          severeCasesByRequestedTime: 0.15 * (
            data[2].reportedCases * 10
          ) * (
            2 ** Math.trunc((data[2].timeToElapse * 30) / 3)
          ),
          hospitalBedsByRequestedTime: Math.trunc(
            (
              0.35 * data[2].totalHospitalBeds
            ) - (0.15 * (
              data[2].reportedCases * 10
            ) * (
              2 ** Math.trunc((data[2].timeToElapse * 30) / 3)
            )
            )
          ),
          casesForICUByRequestedTime: Math.trunc(0.05 * (
            data[2].reportedCases * 10
          ) * (
            2 ** Math.trunc((data[2].timeToElapse * 30) / 3)
          )),
          casesForVentilatorsByRequestedTime: Math.trunc(0.02 * (
            data[2].reportedCases * 10
          ) * (
            2 ** Math.trunc((data[2].timeToElapse * 30) / 3)
          )),
          dollarsInFlight: Math.trunc(((
            (
              data[2].reportedCases * 10
            ) * (
              2 ** Math.trunc((data[2].timeToElapse * 30) / 3)
            ) * data[2].region.avgDailyIncomePopulation
          ) * data[2].region.avgDailyIncomeInUSD) / (data[2].timeToElapse * 30))
        }
      );
  });
});
