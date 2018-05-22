

export class User{

     private userName: string ;
     private password: string ;
 
 
     constructor(data: any)
     {
         this.userName = data.username;
         this.password = data.password;
     }

    public get _username()
    {
        return this.userName;
    }

    public get _password()
    {
        return this.password;
    }

    public set _username(_username: string)
    {
        this.userName = _username;
    }

    public set _password(_password: string)
    {
        this.password = _password;
    }
}