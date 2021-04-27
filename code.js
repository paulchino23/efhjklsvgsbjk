var reasons=["Brother","Me","Family","Mom and dad"];
var image=["IMG_1433.jpg","IMG_1611(1).jpg","IMG_2545.JPG","IMG_6660(1).JPG"];
var i=0;
function nextslide(){
document.getElementById("save").src=image[i];
  document.getElementById("reason").innerHTML=reasons[i];i++;
}
