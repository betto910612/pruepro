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


function onPhotoDataSuccess(imageData) {
      var smallImage = document.getElementById('smallImage');
      smallImage.style.display = 'block';
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }


function capturePhoto() {
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 90,
        destinationType: destinationType.DATA_URL,
		sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
		 });
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