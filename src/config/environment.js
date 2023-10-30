let _Environments = {
  production: {
    BASE_URL: 'https://thelaundrymachine.in/api', // "http://172.105.35.91/ambrogio/public/api",
    WEB_URL: 'https://thelaundrymachine.in', //"http://172.105.35.91/ambrogio/public",
  },
  // production: {
  //   BASE_URL: 'http://65.0.42.219/api', // "http://172.105.35.91/ambrogio/public/api",
  //   WEB_URL: 'http://65.0.42.219', //"http://172.105.35.91/ambrogio/public",
  // },
  development: {
    BASE_URL: 'https://thelaundrymachine.in/api', // "http://172.105.35.91/ambrogio/public/api",
    WEB_URL: 'https://thelaundrymachine.in', //"http://172.105.35.91/ambrogio/public",
  },

  // development: {
  //   BASE_URL: 'http://65.0.42.219/api', // "http://172.105.35.91/ambrogio/public/api",
  //   WEB_URL: 'http://65.0.42.219', //"http://172.105.35.91/ambrogio/public",
  // },

};

const getEnvironment = () => {
  let platform = getPlatform();
  return _Environments[platform];
};

const getPlatform = () => {
  let environment = '';
  if (__DEV__) {
    environment = 'development';
  } else {
    environment = 'production';
  }
  return environment;
};

export const Environment = getEnvironment();
