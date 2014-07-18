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
        destinationType: Camera.DestinationType.FILE_URI,
		sourceType : Camera.PictureSourceType.CAMERA,
		encodingType :  Camera.EncodingType.JPEG,
		mediaType: Camera.MediaType.ALLMEDIA,
		saveToPhotoAlbum : true,
		correctOrientation: true,
        targetWidth: 350,
        targetHeight: 500
    });
}




  /* var cameraoptions = { quality : 60,
                destinationType : Camera.DestinationType.FILE_URI,
                sourceType : Camera.PictureSourceType.CAMERA,
                allowEdit : true,
                encodingType :  Camera.EncodingType.JPEG,
                targetWidth : 480,
                targetHeight : 800,
                mediaType: Camera.MediaType.ALLMEDIA,
                saveToPhotoAlbum : true,
                correctOrientation: true,
                cameraDirection:Camera.Direction.FRONT
            };

            function onSuccess(imageData){
               
                var image = document.getElementById("pic");
                
 if (cameraoptions.destinationType ==Camera.DestinationType.FILE_URI){
                    image.src = imageData;
                }
                else{
                    image.src = "data:image/jpeg;base64," + imageData;
                }
            }
           
            
function capturePhoto(){
navigator.camera.getPicture(onSuccess,onFail, {quality : 60,
                destinationType : Camera.DestinationType.FILE_URI,
                sourceType : Camera.PictureSourceType.CAMERA,
                allowEdit : true,
                encodingType :  Camera.EncodingType.JPEG,
                targetWidth : 250,
                targetHeight : 400,
                mediaType: Camera.MediaType.ALLMEDIA,
                saveToPhotoAlbum : true,
                correctOrientation: true,
                cameraDirection:Camera.Direction.FRONT});
            }

*/

<!-------------------------------------------------------------------->

function uploadPhoto(imageURI) {	
document.getElementById("foto").style.backgroundImage="url('"+imageURI+"')";
    document.getElementById("foto").style.backgroundSize="100% 100%";
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
            ft.upload(imageURI, "http://servicespub.260mb.net/subir.php", win, fail, options);
			alert("Foto Almacenada");
        }


<!-------------------------------------------------------------------->
/*function Enviar(image){
var options = new FileUploadOptions();
                                options.fileKey="file";
                                options.fileName=image.name;
                                options.mimeType="image/jpeg";
                               
                                var params = new Object();
                                params.fullpath = path;
                                params.name = name;

                                options.params = params;
                                options.chunkedMode = false;
                                var url="http://servicespub.260mb.net/subir.php";
                                var url2="http://servicespub.260mb.net/subir.php";
								
                                var ft = new FileTransfer();
                                ft.upload(image, url2, win, fail, options, true);alert("hey");
                            } 
<!-------------------------------------------------------------------->

function subirFoto(imageURI){
document.getElementById("foto").style.backgroundImage="url('"+imageURI+"')";
document.getElementById("foto").style.backgroundSize="100% 100%";
			//Creamos un objeto FileUploadOptions que almacenará las opciones del archivo a enviar al servidor	
			var options = new FileUploadOptions();
            options.fileKey = "imageData";//Nombre del elemento que se envía por POST
			
			//Capturamos el nombre que la imagen tendrá en el servidor...
imagen_a_mostrar = imageURI.substr(imageURI.lastIndexOf('/')+1);
			
options.fileName = imageURI.substr(imageURI.lastIndexOf('/')+1);//Nombre del archivo
			options.mimeType = "image/jpeg";//Tipo MIME del archivo
			
			//Parametros clave:valor;
            var params = new Object();
            /*params.value_latitud = latitud;
            params.value_longitud = longitud;
			params.value1 = "test";
            params.value2 = "param";
			
			//Añadimos los parámetros al objeto de las opciones.
            options.params = params;

			//Creamos un objeto FileTransfer que realizará el envio a traves del método upload
            var ft = new FileTransfer();
            ft.upload(imageURI,"http://servicespub.260mb.net/subir.php", options);
			alert("sube");	
			
        }*/

function onSuccess(imageData) {
document.getElementById("foto").style.backgroundImage="url('data:image/jpeg;base64,"+imageData+"')";
document.getElementById("foto").style.backgroundSize="100% 100%";
}

function onPhotoURI(imageURI) {
    document.getElementById("foto").style.backgroundImage="url('"+imageURI+"')";
    document.getElementById("foto").style.backgroundSize="100% 100%";
}

function onFail(message) {
    alert('Error debido a : ' + message);
}