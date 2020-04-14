import {AuthenticationRepositoryInterface} from "./AuthenticationRepositoryInterface";
import {UserAccount} from "../../entities/UserAccount";
import {AuthError} from "../../errors/AuthError";
import {MockUser} from "../../../../mock/MockUser";
import {DocumentStorageInterface} from "../../drivers/Storage/DocumentStorage/DocumentStorageInterface";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";

export class MockAuthenticationRepository implements AuthenticationRepositoryInterface {

  private storageDriver: DocumentStorageInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    storageDriver: DocumentStorageInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public authenticate(userAccount: UserAccount): ModuleCommandResponse {
    const conf = new MockUser();
    console.log('userAccount: ', userAccount);
    if (!userAccount.equals(conf.guestUserAccount)) {
      return new ModuleCommandResponse(new AuthError("LOGIN_FAILED"));
    }
    const resStorage = this.storageDriver.write('Auth', 'account', {
      userId: 'guest',
      userPassword: 'mock'
    });
    if (resStorage.err) {
      return new ModuleCommandResponse(resStorage.err);
    }
    return new ModuleCommandResponse(null);
  }

  public deauthenticate(): ModuleCommandResponse {
    const resStorage = this.storageDriver.delete('Auth', 'account');
    if (resStorage.err) {
      return new ModuleCommandResponse(resStorage.err);
    }
    return new ModuleCommandResponse(null);
  }
}