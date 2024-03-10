console.log("test js")
document.onreadystatechange = function () {
    console.log(document.readyState)
    if (document.readyState == 'interactive') {
        let flag = false;
        console.log("c'est ok")
        document.getElementById("my_id").style.color = "#D5F5E3 ";
        document.getElementById("my_id").style.fontSize = "10px";
        document.getElementById("my_id").style.backgroundColor = "#8EB6F0";
        document.getElementsByTagName("h2")[0].style.fontSize = "10px";
        document.getElementsByTagName("h2")[1].style.fontSize = "20px";
        document.getElementsByTagName("h2")[2].style.fontSize = "30px";
        for (i = 0; i < document.getElementsByClassName("c1").length; i++) {
            document.getElementsByClassName("c1")[i].style.fontStyle = "italic";
            document.getElementsByClassName("c1")[i].style.fontSize = "24px";
            document.getElementsByClassName("c1")[i].style.color = "blue";
        }
        console.log(id2)
        document.getElementById("id2").innerText = "Hello Mister";
        document.getElementById("id2").innerHTML = "Hello Misters";
        document.getElementById("id2").textContent = "Hello Misterss";
        let initColor = document.getElementById("id3").style.backgroundColor;
        document.getElementsByName("b_valid")[0].onclick = function () {
            if (flag) {
                document.getElementById("id3").style.backgroundColor = "grey";
                document.getElementsByName("b_valid")[0].style.backgroundColor = "yellow";
            } else {
                document.getElementById("id3").style.backgroundColor = initColor;
                document.getElementsByName("b_valid")[0].style.backgroundColor = "cyan";
            }
            flag = !flag
        }
        let colorInput = document.querySelector('#id4 input[type="color"][name="textStart"]');
        let paragraph = document.querySelector("#id4 p");
        colorInput.addEventListener("change", function () {
            paragraph.style.color = colorInput.value;
        });
        let color2Input = document.querySelector('#id4 input[type="color"][name="textAutre"]');
        color2Input.addEventListener("change", function () {
            paragraph.style.color = color2Input.value;
        });
        let number = document.getElementById("numberInput");
        number.addEventListener("change", function() {
            let number1 = parseFloat(number.value);
            if (number1 < 0 || number1 > 20) {
                alert("La valeur saisie doit être comprise entre 0 et 20");
            }
        });

        document.addEventListener("DOMContentLoaded", function () {
            let button = document.getElementById("button");
            let lycee = document.getElementById("text2");
            let switchInput = document.querySelector('.toggle-switch input[type="checkbox"]');
            button.addEventListener("click", function () {
                if (switchInput.checked){
                    lycee.textContent = "";
                }else{
                    lycee.textContent = "Lycee Astier";
                }
            });
            document.querySelector("#text1").textContent = "BTS Ciel";
        });

        document.addEventListener("DOMContentLoaded", function() {
            let checkbox = document.getElementById("checkbox");
            checkbox.addEventListener("change", function() {
                if (this.checked) {
                    document.body.classList.add("dark-mode");
                } else {
                    document.body.classList.remove("dark-mode");
                }
            });
        });

    }
}
