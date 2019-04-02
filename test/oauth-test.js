import oauth from '../src/oauth/main';
import http from '../src/http/main';
import { Observable } from 'rxjs';


describe('OAuth password flow', () => {
  beforeEach(() => {
    spyOn(http, 'request').and.callThrough();
  });
  it('should send an http request to authenticate to oauth server using credentials', () => {
    const mockCredentials = {
      username : 'test_user',
      password : 'test_password'
    };
    const mockOptions = {
      clientId : 'test_client_id',
      tokenUrl : '/oauth/token',
      returnPromise: true
    };
    const mockOauthData = new FormData();
    mockOauthData.set('grant_type', 'password');
    mockOauthData.set('username', mockCredentials.username);
    mockOauthData.set('password', mockCredentials.password);
    mockOauthData.set('client_id', mockOptions.clientId);
    const mockHttpClientOptions = {
      method: 'POST',
      returnPromise: true,
      data: mockOauthData
    };
    oauth.authenticateWithCredentials(mockCredentials, mockOptions);
    expect(http.request).toHaveBeenCalledWith(mockOptions.tokenUrl, mockHttpClientOptions);
  });

  it('should return Observable', () => {
    const mockCredentials = {
      username : 'test_user',
      password : 'test_password'
    };
    const mockOptions = {
      clientId : 'test_client_id',
      tokenUrl : '/oauth/token',
    };
    expect(oauth.authenticateWithCredentials(mockCredentials, mockOptions)).toEqual(jasmine.any(Observable));
  });
});