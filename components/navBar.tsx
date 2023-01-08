import React from "react";
import { Link, Route } from "react-router-dom";
import LoginWithGoogle from "../src/loginWithGoogle";
import useFirebaseAuth from "../src/useAuth";
import SignUpFirebase from "../src/signUp";
import SignInFirebase from "../src/signIn";


export const NavBar = (props: any) => {

  const auth = props.auth || null

  const getNavBarUserLoggedIn = () => {
    const {user, loading, logOut} = useFirebaseAuth()
    return(
      <>
        <nav className="navbar navbar-expand-lg bg-dark text-light mb-3">
          <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/">
                      <button type="button" className="btn btn-outline-light btn-sm ms-md-5">
                        <i className="bi bi-house-door-fill">
                          {" "}
                          Home
                        </i>
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/profile">
                      <button type="button" className="btn btn-outline-light btn-sm ms-md-2">
                        <i className="bi bi-person-fill">
                          {" "}
                          Profile
                        </i>
                      </button>
                    </Link>
                  </li>
                </ul>
                </div>
                  <div className="me-md-5">
                    <button type="button" onClick={logOut} className="btn btn-outline-light btn-sm ms-md-5" ><i className="bi bi-box-arrow-left">
                          {" "}
                          LogOut
                        </i></button>
                  </div>            
          </div>
      </nav>
    </>
    );
  }
  const getNavBarUserNotLoggedIn = () => {
    return(
      <>
        <nav className="navbar navbar-expand-lg bg-dark text-light mb-3">
          <div className="container-fluid">
            <Link to="/">
              <button type="button" className="btn btn-outline-light btn-sm ms-md-5">
                Home
              </button>

            </Link>
            <div className="me-md-5">
              <SignUpFirebase />
              <SignInFirebase />
            </div>
          </div>
        </nav>
      </>
      );
  }
  return(
    <>
      {auth && getNavBarUserLoggedIn()}
      {!auth && getNavBarUserNotLoggedIn()}
    </>
  )

  
};