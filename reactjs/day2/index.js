const input=document.getElementById('input');
function hi(){
    var box;
    for(let i=0;i<input.value;i++)
    {
        box+='<img src="https://media.istockphoto.com/photos/gift-box-picture-id179270502">'
    }
    document.getElementById("box3").innerHTML=box;
}