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
        location.href = "downloads/app-release.apk";
      }, 4000);
      setTimeout(function() {
        $('#baixandoApk').addClass('none');
        $('#apkBaixado').css('display','block');
      }, 5000);

    };
    
})();