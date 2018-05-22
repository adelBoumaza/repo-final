

export class User {

     userName: string;
     password: string;

     constructor(data: any) {
         this.userName = data.username;
         this.password = data.password;
     }
}
