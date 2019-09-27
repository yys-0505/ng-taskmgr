import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AuthService } from './auth.service';
import { defer } from "rxjs";
import { User } from '../domain';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
describe('AuthService', () => {
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  let service: AuthService;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        { provide: 'BASE_CONFIG', useValue: { uri: 'http://localhost:3000' } },
        { provide: HttpClient, useValue: httpClientSpy },
        AuthService,
      ]
    });
  });

  it('注册后应该返回一个 Observable<Auth>', async(() => {
    const mockUser: User = {
      name: 'someuser@dev.local',
      password: '123abc',
      email: 'someuser@dev.local'
    };
    const mockResponse = {
      id: 'obj123abc',
      name: 'someuser@dev.local',
      password: '123abc',
      email: 'someuser@dev.local'
    }
    httpClientSpy.get.and.returnValue(asyncData([]));
    httpClientSpy.post.and.returnValue(asyncData(mockResponse));
    service = TestBed.get(AuthService);
    expect(service.register(mockUser).subscribe(auth => {
      expect(auth.token).toBeDefined();
      expect(auth.user).toBeDefined();
      expect(auth.user.id).toEqual(mockResponse.id);
    }));
  }))
});
