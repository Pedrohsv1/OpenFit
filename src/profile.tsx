import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import useFirebaseAuth from "./useAuth";

const ProfilePage = () => {

  const {user, loading, logOut} = useFirebaseAuth()  

  if (loading){
    return <p>Loading please wait.......</p>
  }

  return (
    <div>
      <h1>Im the home Profile</h1>
      <p>User: {user?.displayName}</p>
      

      <p>Email: {user?.email}</p>
      <p>you should see me only if you are logged in</p>
      <button type="button" onClick={logOut}>LogOut</button>
      <a href="/home">
        <button>Go to Home Page</button>
      </a>
      <a href="/Profile">
        <button>Go to Profile Page</button>
      </a>
    </div>
  )
}

export default ProfilePage