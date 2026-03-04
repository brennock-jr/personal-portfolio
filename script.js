      function openTab(tabName) {
            var i;
            var x = document.getElementsByClassName("tab-content");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            
            var links = document.getElementsByClassName("tab-link");
            for (i = 0; i < links.length; i++) {
                links[i].classList.remove("active");
            }
            
            document.getElementById(tabName).style.display = "block";
            document.getElementById("link-" + tabName).classList.add("active");
        }
