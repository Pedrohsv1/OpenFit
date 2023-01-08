import Layout from "./layout"
import useFirebaseAuth from "./useAuth"

export const Home = () => {

  const firstTimeLogged = true;



    const {user, loading, logOut} = useFirebaseAuth()  

    if (loading){
      return <p>Loading please wait.......</p>
    }

    return (
      
      <><Layout/><div className="container p-5 rounded bg-secondary">
        <h1>Home</h1>
        <div className="text-light">
          <p>Hi {user?.displayName}</p>
          <p>you should see me only if you are logged in</p>
        </div>

      </div></>
    )
  }