// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
var track = null;

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger"),
    snapList = document.querySelector("#snap--list"),
    snapItem = document.querySelector(".snap__item");


// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}

// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);

    let cameraOutput = document.querySelector(".shot").cloneNode();

    cameraOutput.src = cameraSensor.toDataURL("image/jpeg");
    // track.stop();

    let snap = snapItem.cloneNode().appendChild(cameraOutput)

    snapList.appendChild(snap);
    snap.classList.add("taken");

};

const url = '/register_user';

let request = new Request(url)

// curl -i -X POST -H "Content-Type: multipart/form-data" -F "image=image1.jpg" -F "image=image2.jpg" -F "image=image3.jpg" -F "user_id=123" -F "user_name=Artur Zahreba" http://0.0.0.0:8080/register_user

fetch(request, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'http://0.0.0.0:8080'
        },
        mode: 'cors',
        body: {}
    })
    .then(console.log)
    .catch(console.log);

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);