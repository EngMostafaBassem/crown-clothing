import firebase,{firestore,auth} from "./firebaseConfig";

export const AuthWithGoogle= async()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider)
}
export const SignOut=async ()=>{
  await auth.signOut();
}
export const SignUpForEmailAndPassword= (email,password,userName)=>{   
  return new Promise(async(_,reject)=>{
    try{
    const userCredintial=await auth.createUserWithEmailAndPassword(email,password)
    await CreateOrGetUserProfile(userCredintial.user.uid,email,userName)
    }catch(ex){
      reject(ex.message)
    }
  })
 
}

export const SignInForEmailAndPassword=(email,password)=>{
  return new Promise(async(_,reject)=>{
    try{
      await auth.signInWithEmailAndPassword(email,password)   
    }catch(ex){
      reject(ex.message)
    }
  })
}
export const CreateOrGetUserProfile=async(userId,email,userName)=>{
  var userRef=firestore.doc(`/users/${userId}`)
  const snapshot=await userRef.get()
    if(!snapshot.exists){     
      await userRef.set({
          Id:userId,
          email,
          displayName:userName,
          createAt:Date.now()
      })
    }
   
    return userRef
}