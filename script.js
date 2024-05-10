var sidenavs = document.getElementById('sidenavs');
        sidenavs.style.display = "none";
        function sidebar() {
            sidenavs.style.display = sidenavs.style.display === "none" ? "block" : "none";
        }


        document.querySelectorAll(".sidenavs a").forEach(link => {
            link.addEventListener("click", () => {
                document.getElementById("sidenavs").style.display = "none";
            });
        });