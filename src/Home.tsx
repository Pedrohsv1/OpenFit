import useFirebaseAuth from "./useAuth"

export const Home = () => {

    const {user, loading, logOut} = useFirebaseAuth()  

    if (loading){
      return <p>Loading please wait.......</p>
    }

    return (
      <div>
        <h1>Im the home page</h1>
        <p>Hi {user?.displayName}</p>
        <p>you should see me only if you are logged in</p>
        <button type="button" onClick={logOut}>LogOut</button>
        <a href="/">
        <button>Go to Index Page</button>
      </a>
      <a href="/Profile">
        <button>Go to Profile Page</button>
      </a>
      </div>
    )
  }