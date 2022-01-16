const twilio = require('twilio');
const AccessToken = twilio.jwt.AccessToken;
const { VideoGrant } = AccessToken;

const generateToken = config => {
  return new AccessToken(
    'AC9b7a96f60382e9c6c0e00ce4771200ac',
    'SK4c8b4768fd9cb2282da33902a014a404',
    'pY6txbj5Vag0iapXEYzWjd4ASYp1M5P3'
  );
};

const videoToken = (identity, room, config) => {
  let videoGrant;
  if (typeof room !== 'undefined') {
    videoGrant = new VideoGrant({ room });
  } else {
    videoGrant = new VideoGrant();
  }
  const token = generateToken(config);
  token.addGrant(videoGrant);
  token.identity = identity;
  return token;
};

module.exports = { videoToken };
