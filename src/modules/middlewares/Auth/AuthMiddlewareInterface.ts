export interface AuthMiddlewareInterface {
  isAuthenticated();
  isAuthErrorOccurred();
  login();
  logout();
}