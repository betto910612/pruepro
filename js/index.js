<!------------------------------------------------------------------------->


var pictureSource;   // picture source
var destinationType; // sets the format of returned value
var urlfoto;
                        // Wait for device API libraries to load
                        //
document.addEventListener("deviceready",onDeviceReady,false);

                        // device APIs are available
                        //
function onDeviceReady() {
ictureSource=navigator.camera.PictureSourceType;
destinationType=navigator.camera.DestinationType;
                        }

                        // Called when a photo is successfully retrieved
                        //
function onPhotoDataSuccess(imageData) {

urlfoto=imageData;
                          // Uncomment to view the base64-encoded image data
                          // console.log(imageData);
alert(imageData);
                          // Get image handle
                          //
var smallImage = document.getElementById('smallImage');

                          // Unhide image elements
                          //
smallImage.style.display = 'block';

                          // Show the captured photo
                          // The inline CSS rules are used to resize the image
                          //
smallImage.src = "data:image/jpeg;base64," + imageData;
                        }

                        // Called when a photo is successfully retrieved
                        //
function onPhotoURISuccess(imageURI) {
                          // Uncomment to view the image file URI
                          // console.log(imageURI);
alert(imageURI);
                          // Get image handle
                          //
var largeImage = document.getElementById('largeImage');

                          // Unhide image elements
                          //
largeImage.style.display = 'block';

                          // Show the captured photo
                          // The inline CSS rules are used to resize the image
                          //
largeImage.src = imageURI;
                        }

                        // A button will call this function
                        //
function capturePhoto() {
                          // Take picture using device camera and retrieve image as base64-encoded string
 navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
destinationType:destinationType.DATA_URI,
targetWidth: 500,
targetHeight: 500,
saveToPhotoAlbum: true });
                        }


                        // A button will call this function
                        //
                      

                        // Coger de la Galeria
                        //
function getPhoto(source) {
 navigator.camera.getPicture(EnviarServidor, onFail, { quality: 50,
destinationType : Camera.DestinationType.FILE_URI,
                            sourceType: source });
                        }

                      
function onFail(message) {
                          //alert('Failed because: ' + message);
                        }




<!------------------------------------------------------------------------->

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
						
function onFail(message) {
    alert('Error por: ' + message);
}