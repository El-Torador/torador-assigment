import impact from './helpers/impact';
import severeImpact from './helpers/severeImpact';

const covid19ImpactEstimator = (data) => {
  let estimation;
  switch (data.periodType) {
    case 'days':
      estimation = {
        data,
        estimate: {
          impact: impact.impactByDaily(data),
          severeImpact: severeImpact.severeImpactByDaily(data)
        }
      };
      break;
    case 'weeks':
      estimation = {
        data,
        estimate: {
          impact: impact.impactByWeekly(data),
          severeImpact: severeImpact.severeImpactByWeekly(data)
        }
      };
      break;
    case 'months':
      estimation = {
        data,
        estimate: {
          impact: impact.impactByMonthly(data),
          severeImpact: severeImpact.severeImpactByMonthly(data)
        }
      };
      break;
    default:
      break;
  }
  return estimation || { data, impact: {}, severeImpact: {} };
};

export default covid19ImpactEstimator;
