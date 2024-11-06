window.onscroll=function(){
    if(document.documentElement.scrollTop>=300){
        document.getElementById("up").className="up"

    }
    else{
        document.getElementById("up").className="disapper"
    }
}
