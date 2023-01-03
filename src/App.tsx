import initMyFirebase from "./firebase-config"
import LoginWithGoogle from "./loginWithGoogle";

export const App = () => {

  initMyFirebase();
  

  return (
    <div>
      <LoginWithGoogle/>
      <h1>Hello World</h1>

    </div>
  )
}
