function show_pattern(){
    var top_pos=screen.availHeight/2-150,left_pos=screen.availWidth/2-150;
    var width=300,height=300;
    var color_list=["red","orange","blue","purple","yellow","black","green","silver","gold","violet","indigo"];
    var the_body=document.getElementById("the_body");

    while(width>50){
        var this_div=document.createElement("div");
        var random_color=Math.random()*11;
        random_color=Math.floor(random_color);
        this_div.style.top=top_pos+"px";
        this_div.style.left=left_pos+"px";
        this_div.style.width=width+"px";
        this_div.style.height=height+"px";
        this_div.style.background=color_list[random_color];
        the_body.appendChild(this_div);
        top_pos+=10;
        left_pos+=10;
        width-=20;
        height-=20;
    }
    //location.reload();
}
