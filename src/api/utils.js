export const formatResult = (res) => {
  return res
    ? res.sort((perv, curr) => curr.score - perv.score).map((curr) => curr.name)
    : [];
};
