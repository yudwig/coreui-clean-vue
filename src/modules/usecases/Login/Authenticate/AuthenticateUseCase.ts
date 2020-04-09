export interface AuthenticateUseCase {
  handle(loginId: string, password: string);
}