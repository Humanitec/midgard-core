import http from '../http/main';

/**
 * authenticate with oAuth password flow
 * @param credentials - user credentials (username/password)
 * @param options - the app client id and the oauth token url
 */
const authenticateWithCredentials = (credentials, options) => {
  let {
    username,
    password
  } = credentials;
  let {
    clientId,
    tokenUrl,
  } = options;
  let httpClientOptions = {
    method: 'POST',
    data: {
      grant_type: password,
      username,
      password,
      client_id: clientId
    }
  };
  return http.request(tokenUrl, httpClientOptions);
};

export default authenticateWithCredentials;
