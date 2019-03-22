import http from '../http/main';


/**
 * authenticates with OAuth password flow
 * @param credentials - user credentials (username/password)
 * @param options - the app client id, the oauth token url and whether to return a promise
 */
const authenticateWithCredentials = (credentials, options) => {
  let {
    username,
    password
  } = credentials;
  let {
    clientId,
    tokenUrl,
    returnPromise
  } = options;
  let oauthData = new FormData();
  oauthData.set('grant_type', 'password');
  oauthData.set('username', username);
  oauthData.set('password', password);
  oauthData.set('client_id', clientId);

  let httpClientOptions = {
    method: 'POST',
    data: oauthData,
    returnPromise
  };
  return http.request(tokenUrl, httpClientOptions);
};

export default authenticateWithCredentials;
