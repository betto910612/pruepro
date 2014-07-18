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

function capturePhoto() {
    navigator.camera.getPicture(uploadPhoto, onFail, { quality: 90,
        destinationType: navigator.camera.DestinationType.FILE_URI,
		correctOrientation: true,
        targetWidth: 500,
        targetHeight: 500
    });
}


function uploadPhoto(imageURI) {	
var smallImage = document.getElementById('smallImage');
 
    // Mostrar elemento de imagen
    smallImage.style.display = 'block';
 
    // Mostrar la foto capturada
    smallImage.src = "data:image/jpeg;base64," + imageURI;
  var options = new FileUploadOptions();
  options.fileKey="file";
  options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
 
            var params = new Object();
            params.value1 = "test";
            params.value2 = "param";
 
            options.params = params;
            options.chunkedMode = false;
 
            var ft = new FileTransfer();
            ft.upload(imageURI, "http://parkingapp.260mb.net/subir.php", win, fail, options);
			alert("Foto Almacenada");
        }



function onSuccess(imageData) {
document.getElementById("foto").style.backgroundImage="url('data:image/jpeg;base64,"+imageData+"')";
document.getElementById("foto").style.backgroundSize="100% 100%";
}

function onPhotoURISuccess(imageURI) {
    document.getElementById("foto").style.backgroundImage="url('"+imageURI+"')";
    document.getElementById("foto").style.backgroundSize="100% 100%";
}

function onFail(message) {
    alert('Error por: ' + message);
}