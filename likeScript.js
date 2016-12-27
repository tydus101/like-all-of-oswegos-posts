/**
 * Created by tyler on 12/26/16.
 */

window.fbAsyncInit = function() {
    FB.init({
      appId      : '108871012947936',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

$("#like").click(function(e){
    FB.getLoginStatus(function (response) {
    if (response.status == 'connected') {
        console.log(response);
    }
    else {
        FB.login(function(response) {
            console.log(response)
            }, {
            scope:'publish_actions',
            return_scopes: true
            }
        );
    }

});
});


