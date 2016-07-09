/*
* @Author: prabhakar
* @Date:   2016-07-10 00:47:28
* @Last Modified by:   Prabhakar Gupta
* @Last Modified time: 2016-07-10 01:29:49
*/
function get_html(email){
    var email_html = 
    '<li aria-label="Email" class="vcard-detail py-1 css-truncate css-truncate-target" itemprop="email"><svg aria-hidden="true" class="octicon octicon-mail" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg><a href="mailto:' + email + '">' + email + '</a></li>';
    return email_html
}
$(document).ready(function(){
    var user_information_div = $(document).find('.vcard-details');

    if(user_information_div.length && !(user_information_div.find('li[itemprop=email]').length)){
        var url = "https://localhost:5000";
        var username = window.location.pathname.trim();
        username = username.slice(1);

        alert(username)

        // $.ajax({
        //     url : url,
        //     data: {"username" : username},
        //     type : 'POST',
        //     success : function(data){
        //         alert(data)
        //     },
        // });
        // var xhr = new XMLHttpRequest();
        // xhr.open("POST", url, true);
        // xhr.onreadystatechange = function() {
        //     if (xhr.status == 200) {
        //     // WARNING! Might be injecting a malicious script!
        //     // document.getElementById("resp").innerHTML = xhr.responseText;
        //     // ...
        //         alert(xhr.responseText)
        //     }
        // }
        // xhr.send("username=" + username);
        // 
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://api.example.com/data.json", true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            // WARNING! Might be injecting a malicious script!
            // document.getElementById("resp").innerHTML = ;
            // ...
            alert(xhr.responseText)
          }
        }
        xhr.send();
    }
})