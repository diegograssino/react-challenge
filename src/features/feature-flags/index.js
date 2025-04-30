// @ts-ignore
const featureFlags = JSON.parse(import.meta.env.VITE_FEATURE_FLAGS) || null;

export const getFeatureFlag = (name) => {
  if (featureFlags && featureFlags[name]) {
    return featureFlags[name];
  }

  return false;
};
