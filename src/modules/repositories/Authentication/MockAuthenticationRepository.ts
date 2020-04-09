import {AuthenticationRepositoryInterface} from "./AuthenticationRepositoryInterface";
import {UserAccount} from "../../entities/UserAccount";
import {AuthError} from "../../errors/AuthError";
import {MockUser} from "../../../../mock/MockUser";
import {DocumentStorageInterface} from "../../drivers/Storage/DocumentStorage/DocumentStorageInterface";
import {CookieDocumentStorage} from "../../drivers/Storage/DocumentStorage/CookieDocumentStorage";

export class MockAuthenticationRepository implements AuthenticationRepositoryInterface {

  private storageDriver: DocumentStorageInterface;

  constructor() {
    this.storageDriver = new CookieDocumentStorage();
  }

  public authenticate(userAccount: UserAccount) {
    const conf = new MockUser();
    if (!userAccount.equals(conf.guestUserAccount)) {
      return {
        err: new AuthError("LOGIN_FAILED")
      };
    }
    const resStorage = this.storageDriver.write('Auth', 'account', {
      userId: 'guest',
      userPassword: 'mock'
    });
    if (resStorage.err) {
      return {data: null, err: resStorage.err};
    }
    return {err: null};
  }

  public deauthenticate() {
    const resStorage = this.storageDriver.delete('Auth', 'account');
    if (resStorage.err) {
      return {data: null, err: resStorage.err};
    }
    return {err: null};
  }
}