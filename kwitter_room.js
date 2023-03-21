var firebaseConfig = {
      apiKey: "AIzaSyAUg2s5wXmJsiWAa9nIF0Gc5l6t_NFC8kU",
      authDomain: "class-93-b04e1.firebaseapp.com",
      databaseURL: "https://class-93-b04e1-default-rtdb.firebaseio.com",
      projectId: "class-93-b04e1",
      storageBucket: "class-93-b04e1.appspot.com",
      messagingSenderId: "888856467133",
      appId: "1:888856467133:web:b016d99e128b4697f0c9d4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});

localStorage.setItem("room_name", room_name);

window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
      }
      
      function send()
      {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      
      document.getElementById("msg").value="";
      }