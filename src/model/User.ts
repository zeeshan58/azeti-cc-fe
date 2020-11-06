export interface UserEntity {
    email: string;
    username: string;
  }
  
  export const createEmptyUser = (): UserEntity => ({
    email: "",
    username: ""
  });