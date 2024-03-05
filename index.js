'use strict';

(function () {
  var _private = {};
  var _public = {};

    $(function () {
      if(!$("#baixandoApk").hasClass('none'))
        _public.DownloadApk();
    });
  
    _public.DownloadApk = function () {
      setTimeout(function() {
        var file_path = 'downloads/app-release.apk';
        var a = document.createElement('A');
        a.href = file_path;
        a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        //location.href = window.origin + "/downloads/app-release.apk";
      }, 4000);
      setTimeout(function() {
        $('#baixandoApk').addClass('none');
        $('#apkBaixado').css('display','block');
      }, 5000);

    };
    
})();