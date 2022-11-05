var firebaseConfig = {
    apiKey: "AIzaSyBv7It0ZHJhLeYtLVtE5XUnD_UVz6sMtdA",
    authDomain: "kwitter-81d39.firebaseapp.com",
    databaseURL: "https://kwitter-81d39-default-rtdb.firebaseio.com",
    projectId: "kwitter-81d39",
    storageBucket: "kwitter-81d39.appspot.com",
    messagingSenderId: "50238474963",
    appId: "1:50238474963:web:6bc88e47b4be2bd154e226"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("room name-" + Room_names);
            row = "<div class='room_name'id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;

            //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}