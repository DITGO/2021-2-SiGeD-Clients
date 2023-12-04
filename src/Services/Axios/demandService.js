const { APIDemands } = require('./baseService');

const getDemands = async (token) => {
  try {
    const demands = await APIDemands.get('/demand', {
      headers: { 'x-access-token': token },
    }).then((response) => response.data);
    return demands;
  } catch (err) {
    return { error: 'Could not connect to api_demands' };
  }
};

module.exports = {
  getDemands,
};
