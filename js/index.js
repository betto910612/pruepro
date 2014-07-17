var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }
};

window.onload=function(){
    document.getElementById("foto").style.width = (window.innerWidth-50)+"px";
    document.getElementById("foto").style.height = (window.innerWidth-50)+"px";
    document.getElementById("foto").style.backgroundSize="50% 50%";
};
function capturePhoto2() {
	
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: destinationType.FILE_URI,
	correctOrientation: true,
	targetWidth: 500,
    targetHeight: 500,
	saveToPhotoAlbum: true }); 
      /*navigator.camera.getPicture(EnviarServidor, onFail, { quality: 90,
        destinationType: camera.destinationType.DATA_URL,
		correctOrientation: true,
        targetWidth: 1000,
        targetHeight: 1000
		 });*/
    }
function onSuccess(image){
document.getElementById("foto").style.backgroundImage="url('"+image+"')";
document.getElementById("foto").style.backgroundSize="100% 100%";

if (image.substring(0,21)=="content://com.android") {
photo_split=image.split("%3A");
image="content://media/external/images/media/"+photo_split[1];
 } 
                                                 
path = image.fullPath;
name = image.name;
                                
var options = new FileUploadOptions();
options.fileKey="file";
options.fileName=image.name;
options.mimeType="image/jpeg";
                               
var params = new Object();
params.fullpath = path;
params.name = name;

options.params = params;
options.chunkedMode = false;
var url="http://parkingapp.260mb.net/subir.php";
var url2="http://parkingapp.260mb.net/subir.php";
var ft = new FileTransfer();
ft.upload(image, url2, options, true);
                            }
							
function on_Success(imageData) {
document.getElementById("foto").style.backgroundImage="url('data:image/jpeg;base64,"+imageData+"')";
 document.getElementById("foto").style.backgroundSize="100% 100%";
}



function onPhotoURISuccess(imageURI) {
document.getElementById("foto").style.backgroundImage="url('"+imageURI+"')";
document.getElementById("foto").style.backgroundSize="100% 100%";
}

function onFail(message) {
    alert('Error debido a : ' + message);
}