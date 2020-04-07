import impact from './helpers/impact';

const covid19ImpactEstimator = (data) => ({ data, impact: impact(data), severeImpact: {} });

export default covid19ImpactEstimator;
