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

        var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
function modalBtn() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}