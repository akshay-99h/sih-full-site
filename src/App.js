import React from 'react';
// import { useRef, useState } from 'react'
import './App.css';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import Kommunicatechat from './chatbot'; 

// firebase.initializeApp({
//   apiKey: "AIzaSyDlJYq0ovYNMsRh2y3LsQN3sZzHjPj4c2o",
//   authDomain: "chat-342a1.firebaseapp.com",
//   projectId: "chat-342a1",
//   storageBucket: "chat-342a1.appspot.com",
//   messagingSenderId: "124175900417",
//   appId: "1:124175900417:web:fc132c792721b28ae78500"
// });

// const auth = firebase.auth();
// const firestore = firebase.firestore();
const proStyle = { color:"rgb(244,123,55);" }

function App() {

  // const [user] = useAuthState(auth);

  return (
    <>
    {/* <div className="App"> */}
      {/* <header>
        <h1>Chat Forum💬</h1>
        <SignOut />
      </header>

      <section>
        {/* Profile icon */}
        {/* {user ? <ChatRoom /> : <SignIn />} */}
      {/* </section> */}

      {/* // </div> */}
      <Kommunicatechat />
    </>
  );
}

// function SignIn() {

//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

//   return (
//     <>
//       <div className='mb-3'><button className="btn btn-primary shadow d-block w-10" onClick={signInWithGoogle}><i className='icon-social-google'></i>&nbsp; Sign in with Google</button></div>
//       <p>Do not violate the community guidelines or you will be banned for life!</p>
//     </>
//   )

// }

// function SignOut() {
//   return auth.currentUser && (
//     <button className="sign-out button-chat" onClick={() => auth.signOut()}>Sign Out</button>
//   )}


// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt').limit(100);

//   const [messages] = useCollectionData(query, { idField: 'id' });

//   const [formValue, setFormValue] = useState('');


//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL
//     })

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   }

//   return (<>
//     <main className='main-chat'>

//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

//       <span ref={dummy}></span>

//     </main>

//     <form onSubmit={sendMessage} className="form-chat">

//       <input className="input-form" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Tell people how you are feeling today" />

//       <button className="button-chat" type="submit" disabled={!formValue}>🕊️</button>

//     </form>
//   </>)
// }


// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (<>
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="" />
//       <p>{text}</p>
//     </div>
//   </>)
// }


export default App;