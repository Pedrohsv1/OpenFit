import { NavBar } from "../components/navBar"
import useFirebaseAuth from "./useAuth"

const Layout = (props: any) =>{
  const auth = useFirebaseAuth()
  return (<>
    {auth.user && <NavBar isLoggedIn={true} auth={auth}/>}
    {!auth.user && <NavBar isLoggedIn={false}/>}
  </>)
}

export default Layout;