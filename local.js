!function(){
    if(window.location.host.indexOf("localhost")>-1||window.location.host.indexOf("127.0.0.1")>-1){
        var div = document.createElement('div');
        div.setAttribute('class', 'corner-ribbon top-right s1 extension-sticky red shadow');
        div.innerText = window.location.host;
        document.body.insertAdjacentElement('beforeend', div);
    }
}();
