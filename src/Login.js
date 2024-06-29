export default function Login(){
    return (
        <div className="login">
               <h3 className="text-center">Log In</h3>
               <br/>
               <input type="text" className="userName me-2" placeholder="Username"></input>
               <input type="text" className="passWord me-2" placeholder="Password"></input>
               <button id='submit'>submit</button>
        </div>
    )

}