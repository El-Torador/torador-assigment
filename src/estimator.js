import impact from './helpers/impact';
import severeImpact from './helpers/severeImpact';

const covid19ImpactEstimator = (data) => (
  {
    data,
    impact: impact(data),
    severeImpact: severeImpact(data)
  }
);

export default covid19ImpactEstimator;
