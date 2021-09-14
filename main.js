var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";

    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;

    console.log(Content);
    if (Content=="take my selfie")
    {
        console.log("Taking selfie")
        speak();
    }
}
//Set up the size of webcam and then convert to textospeech
function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function() {
        takeSnap();
        save();
    }, 5000);
}
//Set up the actual webcam, the dimensions of it, and the quality (caught in 4K)
Webcam.set({
    height: 360,
    width: 250,
   image_format: 'png',
    png_quality: 90,
});
camera= document.getElementById("camera");

function takeSnap()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img id='selfie_img' src="+data_uri+" >"
    })

}

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_img").src;
    link.href=image;
    link.click();
}