export default function Login(){
    return (
        <div className="login">
               <h3 className="text-center">Log In</h3>
               <br/>
               <input type="text" className="userName me-2" placeholder="Username"></input>
               <input type="password" className="passWord me-2" placeholder="Password"></input>
               <br/><br/>
               <a href="http://localhost:3000/">
               <button id='submit' className=" btn btn-primary form-control">submit</button>
               </a>
        </div>
    )

}