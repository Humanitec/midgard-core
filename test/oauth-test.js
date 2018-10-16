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
    };
    const mockOauthData = new FormData();
    oauthData.set('grant_type', 'password');
    oauthData.set('username', mockCredentials.username);
    oauthData.set('password', mockCredentials.password);
    oauthData.set('client_id', mockOptions.clientId);
    const mockHttpClientOptions = {
      method: 'POST',
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


