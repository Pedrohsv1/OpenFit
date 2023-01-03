import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics} from "firebase/analytics";
import { getPerformance} from "firebase/performance";

export const firebaseConfig = {
  apiKey: "AIzaSyCuINAUlP1r2l1CzeS4UdhKqe11UmYZVlU",
  authDomain: "openfit-2ba57.firebaseapp.com",
  projectId: "openfit-2ba57",
  storageBucket: "openfit-2ba57.appspot.com",
  messagingSenderId: "1045140129299",
  appId: "1:1045140129299:web:47014c077cb853b63ea1e6"
};



const initMyFirebase = () => {

  if(!getApps().length) {

    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);
    
    if(typeof window !== "undefined"){
      const analytics = getAnalytics(app);
      const performance = getPerformance(app);
    }

    console.log("Initialized firebase")
  } else {
    console.log("Already Initialized firebase")
  }
};

export default initMyFirebase;
