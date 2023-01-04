import { useNavigate } from "react-router-dom";
import initMyFirebase from "./firebase-config"
import LoginWithGoogle from "./loginWithGoogle";
import useFirebaseAuth from "./useAuth";
import { NavBar } from "../components/navBar"

export const App = () => {

  const navigate = useNavigate()

  const {user, loading, logOut} = useFirebaseAuth()  

  if (loading){
    return <p>Loading please wait.......</p>
  }
  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <NavBar/>
      
      <h1>Teste Firebase</h1>
      <LoginWithGoogle/>
      <a href="/home">
        <button>Go to Home Page</button>
      </a>
      <a href="/Profile">
        <button>Go to Profile Page</button>
      </a>

    </div>
  )
}
