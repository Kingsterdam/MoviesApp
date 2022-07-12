import React, { useState } from "react";
import { Form} from "react-bootstrap";
import {Login} from "./Login";


function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!email || !password ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("userEmail", JSON.stringify(email));
      localStorage.setItem(
        "userPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }


  return (
    <>
 
<div>
{login ?(
    <Form onSubmit={handleFormSubmit}>
 <section className="vh-100 gradient-custom">
  <div class="container py-5 ">
    <div class="row d-flex justify-content-center align-items-center h-50">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white " style={{borderRadius: '1rem'}}>
          <div class="card-body p-4 text-center " style={{ height:'80vh'}}>

            <div class="mb-md-5 mt-md-4 pb-5">

              <h4 class="fw-bold mb-2 text-uppercase">Registration Form</h4>
              <p class="text-white-50 mb-4">Registration Yourself</p>


              <div class="form-outline form-white mb-3">
                <input placeholder ="Enter Email Id"
                 type="email"
                 id="typeEmailX"
                 class="form-control form-control-md" 
                 onChange={(event) => setEmail(event.target.value)}  
                 />
              </div>

              <div class="form-outline form-white mb-4">
                <input 
                placeholder ="Password" 
                type="password" 
                id="typePasswordX" 
                class="form-control form-control-md" 
                onChange={(event) => setPassword(event.target.value)}   
                />
              </div>

              <button class="btn btn-outline-primary btn-md px-3" type="submit">SignUp</button>
              <div>
              <p class="mt-3
              ">Already have an account? 
              <button onClick={handleClick} className="btn btn-outline-success btn-sm mx-2 px-3">
                log in?
              </button>
              </p>
              {flag && (            
                <div class="text-ms alert alert-danger" role="alert">
                I got it you are in hurry! But every Field is important!
               </div>
              )}
            </div>

            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</Form>
 ): <Login />}
</div>
       
    </>
  );
}

export default Registration;