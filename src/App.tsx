import { useNavigate } from "react-router-dom";
import initMyFirebase from "./firebase-config"
import LoginWithGoogle from "./loginWithGoogle";
import useFirebaseAuth from "./useAuth";
import { NavBar } from "../components/navBar"
import Layout from "./layout";

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
      <Layout/>
      <div className="container p-5 rounded text-center">
        <h1>Olá! O que você vai  <span className="text-success">comer </span>hoje?</h1>
        <h4>Nos estamos Open para seu mundo Fit</h4>
        <div  className="container mt-5">
          <div className="row">
            <div  className="col"><img src="comidafit.jpg" alt="" style={{width:"100%", height: "150%"}} className="rounded-4 "/></div>
            <div  className="col"><img src="comidafit.jpg" alt="" style={{width:"100%", height: "150%"}} className="rounded-4 "/></div>
            <div  className="col"><img src="comidafit.jpg" alt="" style={{width:"100%", height: "150%"}} className="rounded-4 " /></div>
          </div>
        </div>

        
      </div>
    </div>
  )
}
