document.getElementById("click").addEventListener("mouseenter", addImage);
document.getElementById("click").addEventListener("mouseleave", changeImage);
function addImage() {
 document.getElementById("click").innerHTML =
 '<img src= "1.jpg" alt="Pic-2" height="400" width="400">';
}
function changeImage() {
 document.getElementById("click").innerHTML =
 '<img src= "2.jpg" alt="Pic-2" height="400" width="400">';
}