import { Observable } from 'rxjs';
import http from '../src/http/main';
import axios from 'axios';

describe('Http', () => {

  it('should throw an error if no path is specified', () => {
    const mockOptions = {
      method : 'GET',
      data : {},
    };
    expect(() => { http.request(null, mockOptions)}).toThrowError('No path has been provided');
  });

  it('should throw the method is invalid', () => {
    const mockOptions = {
      method : 'GETT',
      data : {},
    };
    expect(() => { http.request('fake/url', mockOptions)}).toThrowError('Invalid method, method must be GET, POST, PUT, DELETE');
  });

  it('should return a promise if returnPromise option is set to true', () => {
      const mockOptions = {
        method : 'GET',
        data : {},
        returnPromise: true
      };
      expect(http.request('fake/url', mockOptions)).toEqual(jasmine.any(Promise));
  });

  it('should return a promise if returnPromise option is null', () => {
    const mockOptions = {
      method : 'GET',
      data : {},
    };
    expect(http.request('fake/url', mockOptions)).toEqual(jasmine.any(Observable));
  });

  it('should send a http request using axios', () => {
    spyOn(axios, 'request').and.callThrough();
    spyOn(Math, 'random').and.returnValue('777');
    const mockOptions = {
      method : 'GET',
      data : {},
      headers: {},
      returnPromise: true,
      responseType: 3
    };
    const mockConfig = {
      url: 'fake/url',
      data: mockOptions.data,
      method : mockOptions.method,
      headers: mockOptions.headers,
      requestId: '777-xhr-id',
      responseType: 3
    };
    http.request('fake/url', mockOptions);
    expect(axios.request).toHaveBeenCalledWith(mockConfig);

  });
});


