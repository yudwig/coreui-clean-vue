interface OutputInterface {
  userId: string,
  userName: string,
  userGroupName: string
}

export interface UserAccountPresenterInterface {
  format(): OutputInterface;
}