console.log("test js")
document.onreadystatechange = function () {
    console.log(document.readyState)
    if(document.readyState == 'interactive') {
        let flag = false;
        console.log("c'est ok")
        document.getElementById("my_id").style.color="red";
        document.getElementById("my_id").style.fontSize="10px";
        document.getElementById("my_id").style.backgroundColor="green";
        document.getElementsByTagName("h2")[0].style.fontSize="10px";
        document.getElementsByTagName("h2")[1].style.fontSize="20px";
        document.getElementsByTagName("h2")[2].style.fontSize="30px";
        for ( i = 0; i < document.getElementsByClassName("c1").length; i++) {
            document.getElementsByClassName("c1")[i].style.fontStyle="italic";
            document.getElementsByClassName("c1")[i].style.fontSize = "24px";
            document.getElementsByClassName("c1")[i].style.color="blue";
        }
        console.log(id2)
        document.getElementById("id2").innerText="Hello Mister";
        document.getElementById("id2").innerHTML="Hello Misters";
        document.getElementById("id2").textContent="Hello Misterss";
        let initColor = document.getElementById("id3").style.backgroundColor;
        document.getElementsByName("b_valid")[0].onclick = function (){
            if (flag){
                document.getElementById("id3").style.backgroundColor="grey";
                document.getElementsByName("b_valid")[0].style.backgroundColor="yellow";
            }else {
                document.getElementById("id3").style.backgroundColor=initColor;
                document.getElementsByName("b_valid")[0].style.backgroundColor="cyan";
            }
            flag =! flag
        };
        document.getElementsByName("textStart")[0].onchange = function(){
            document.getElementById("id4").style.color;
        }
        document.getElementsByName("textAutre")[0].onchange = function(){
            document.getElementById("id4").style.color;
        }
    }
}
