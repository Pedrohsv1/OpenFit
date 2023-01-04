import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const LoginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const navigate = useNavigate();

  
  const handleLogin = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
          const user = result.user;
          console.log(user);
          navigate("/home");
          
      }).catch((error) => {
          console.log(error);
      });
  };

  return(
    <>
      <button type="button" onClick={handleLogin}>Login With Google</button>
    </>
  )
};

export default LoginWithGoogle;