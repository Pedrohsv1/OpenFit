import useFirebaseAuth from "./useAuth";

const LogoutPage = () => {
    const { logOut } = useFirebaseAuth();
    return <>{logOut()}</>
}


export default LogoutPage;