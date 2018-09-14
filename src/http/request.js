import { Observable } from 'rxjs/Observable';
import axios from 'axios';

// accepted methods by the client
const ACCEPTED_METHODS = ['GET', 'POST', 'PUT', 'DELETE'];

/**
 * @param url - the url of the request
 * @param options - object that contains the method, payload and headers
 */
const request = (url, options) => {
  let [method, data, headers, returnPromise] = options;
  data = data || {};
  headers = headers || {};
  method = method || 'GET';
  // validate if a path is specified
  if (!url) {
    throw new Error('No path has been provided');
  }
  if (options && typeof options === 'object') { // validate if options are provided
    // validate if the method is valid
    if (ACCEPTED_METHODS.indexOf(method.toUpperCase() === -1)) {
      throw new Error(`Invalid method, method must be ${ACCEPTED_METHODS.join(', ')}`);
    }
  }
  let result;
  if (returnPromise) {
    result = axios.request(url, method, headers);
  } else {
    result = Observable.create((observer) => {
      axios.request(url, method, headers)
        .then((response) => {
          observer.next(response);
          observer.complete();
        }).catch((error) => {
          observer.error(error);
        });
    });
  }
  return result;
};

export default request;
