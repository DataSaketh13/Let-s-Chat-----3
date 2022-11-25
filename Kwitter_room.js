//Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsrSEoVjkvkK0lVYy9G9kQ63G1XuApOYU",
    authDomain: "let-s-chat-webapp-dfff0.firebaseapp.com",
    databaseURL: "https://let-s-chat-webapp-dfff0-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-webapp-dfff0",
    storageBucket: "let-s-chat-webapp-dfff0.appspot.com",
    messagingSenderId: "383325044146",
    appId: "1:383325044146:web:695144175338a1705638ab"
};
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  username = localStorage.getItem("user_name");
  document.getElementById("username").innerHTML = "Welcome " + username + "!";
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        
  console.log(Room_names);
  row = "<div class='room_name' id="+ Room_names + "onclick = 'redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
        
        });});}
  getData();
  
  function AddRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"room_name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }
   function redirectToRoomName(name){
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
  
  
   }
  
   function Logout(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "index.html"
   } 