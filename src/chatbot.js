import React,{useEffect} from "react";

function Kommunicatechat()
{
    useEffect(()=> {
        (function(d, m){
            var kommunicateSettings = {"appId":"2d8cb05abe480a69db0eb42c8c9c82cf8","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
    },[] );
    return <div></div>;
    
}

export default Kommunicatechat