import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Layout from "./layout";
import useFirebaseAuth from "./useAuth";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import { useEffect, useRef, useState } from "react";

const ProfilePage = () => {

  const {user, loading, logOut} = useFirebaseAuth()  

  const [userDetails , setUserDetails] = useState({})
  const bioTrRef = useRef();
  const addressTrRef = useRef();
  const passwordTrRef = useRef();
  const photoURL = user?.photoURL;
  const userDbRef = `users/${user?.uid}`;

  console.log("UserDbRef", userDbRef)

  useEffect(() => {
    getUpdatedUser()
  }, [user])

  const getUpdatedUser = () => {
      try{
        const db = getDatabase();

        const dbRef =ref(db, userDbRef)
        onValue(dbRef, (snapshot) => {
          setUserDetails(snapshot.val())
        })
      }
      catch(err) {
        console.log(err)
      }

  }

  const handleDelete = () => {
    try{
      const db = getDatabase();

      const dbRef =ref(db, userDbRef)
      
      remove(dbRef)
    }
    catch(err) {
      console.log(err)
    }
  }

  const handleProfileUpdate = () => {
    const db = getDatabase();
    
    const dbRef = ref(db, userDbRef)

    const newUserDetails = {
      bio: bioTrRef.current?.value,
      password: passwordTrRef.current?.value,
      address: addressTrRef.current?.value,
    }

    set(dbRef, newUserDetails);
    console.log("Success!!!", newUserDetails)
  }

  if (loading){
    return <p>Loading please wait.......</p>
  }
  return (
    <><Layout /><div className="container p-5 rounded-4 bg-secondary">
      <h1>Profile</h1>
      <div className="row mt-4 bg-dark justify-content-center p-4 rounded">
        <div className="col-md-5 p-2 d-flex justify-content-center ">
            <img src={photoURL} alt={user?.displayName} height={100} width={100} className="img-fluid rounded"/>
        </div>
        <div className="col-md-7 text-light">
            <p>{userDetails?.bio || "Bio is not availble"}</p>
            <p>{userDetails?.address || "Address is not availble"}</p>
          </div>
        </div>
        <div className="row mt-4 d-flex justify-content-center">
          <div className="col">
            
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Address</span>
              <input type="text" className="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon1" ref={addressTrRef}/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Password</span>
              <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" ref={passwordTrRef}/>
            </div>
          </div>
          <div className="input-group">
              <span className="input-group-text">
                Bio
              </span>
              <textarea
              placeholder="Bio here! write whatever you want"
               ref={bioTrRef}
               className="form-control"
               aria-label="bio"
               >
               </textarea>
            </div>
          
        </div>
        
          <div className="d-flex justify-content-center">
            <button 
            type="button" 
            onClick={handleProfileUpdate} 
            className="btn btn-success mt-md-2 btn-sm mt-4 me-2">
              <i className="bi bi-save"> Update Profile</i>
              
            </button>
            <button 
            type="button" 
            onClick={handleDelete} 
            className="btn btn-danger mt-md-2 btn-sm mt-4">
              <i className="bi bi-trash-fill"> Delete</i>
              
            </button>
          </div>



    </div></>
  )
}

export default ProfilePage