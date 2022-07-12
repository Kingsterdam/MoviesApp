import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./Registration";
import { Header } from "./Header";

export const Login = () => {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);
  const [signup, setSignup] = useState(true);
  const [header, setHeader] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let myMail = localStorage.getItem("userEmail").replace(/"/g, "");
    let myPassword = localStorage.getItem("userPassword").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
    } else if (passwordlog !== myPassword || emaillog !== myMail) {
      setFlag(true);
    } else {
      setHeader(!header);
      setFlag(false);
    }
   
  }
  
  function handleClick() {
    setSignup(false);
    console.log("signed",signup )
  }


  return (
<>
<div>
{ signup ? (<>
{header ? (
    <form onSubmit={handleLogin}>
<section className="vh-100 gradient-custom">
  <div class="container py-5 ">
    <div class="row d-flex justify-content-center align-items-center h-50">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white " style={{borderRadius: '1rem'}}>
          <div class="card-body p-4 text-center " style={{ height:'80vh'}}>

            <div class="mb-md-5 mt-md-4 pb-5">

              <h4 class="fw-bold mb-2 text-uppercase">Login Form</h4>
              <p class="text-white-50 mb-4">Login Your App</p>

              <div class="form-outline form-white mb-3">
                <input placeholder ="Enter Email Id"
                 type="email" id="typeEmailX" 
                 class="form-control form-control-md"
                 onChange={(event) => setEmaillog(event.target.value)}
                  />
              </div>
              <div class="form-outline form-white mb-4">
                <input placeholder ="Password" 
                type="password" id="typePasswordX" 
                class="form-control form-control-md"
                 onChange={(event) => setPasswordlog(event.target.value)}
                  />
              </div>
              <button class="btn btn-outline-success btn-md px-3" type="submit">Sign In</button>
              
              <div>
                <p class="mt-3
                ">Already have an account? 
                <button onClick={handleClick}  className="btn btn-outline-primary btn-sm mx-2 px-3">
                    Sign Up?
                </button>
                
                </p>
              </div>

            {flag && (
            <div class="text-ms alert alert-danger" role="alert">
                 Fill correct Info else keep trying.
               </div>
             )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form> ): (<Header />) 
} 
</>
 ) : <Registration />}

</div>
    </>
  );
}


