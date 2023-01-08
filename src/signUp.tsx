import { getAuth, signInWithEmailAndPassword } from "firebase/auth/";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginWithGoogle from "./loginWithGoogle";

const SignUpFirebase = () => {
  

  const [resgisterEmail, setRegisterEmail] = useState("")
  const [resgisterPassword, setRegisterPassword] = useState("")

  const auth = getAuth();

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try{
      const user = await signInWithEmailAndPassword(auth, resgisterEmail, resgisterPassword)
      console.log("Created", user)
    } catch (err) {
      console.log("Hi")
      console.log(err)
    }
    
  }



  return (
    <>
    
    <div
    className="modal fade text-black"
    id="exampleModalToggle"
    aria-labelledby="exampleModalToggleLabel"
    tabIndex={-1}
    aria-hidden="true"
    style={{display: "none"}}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
          Log In
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Address</span>
              <input type="text" className="form-control" placeholder="User" aria-label="Address" aria-describedby="basic-addon1" onChange={event => {setRegisterEmail(event.target.value)}}/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Password</span>
              <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={event => {setRegisterPassword(event.target.value)}}/>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-primary"
            onClick={handleSignUp}
            data-bs-dismiss="modal"
          >
            Sign Up
          </button>
          <LoginWithGoogle />
        </div>
      </div>
    </div>
  </div>
  <button
    className="btn btn-outline-light btn-sm ms-md-5"
    data-bs-target="#exampleModalToggle"
    data-bs-toggle="modal"
  >
    Log In
  </button> </>
  )

};

export default SignUpFirebase;