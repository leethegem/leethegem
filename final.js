function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}





// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function three() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}









function search (){
  var search, tabcontent, tabchildren, i, b, element, text;
  search = document.getElementById("search").value.toLowerCase();
  if(search===""){
    location.reload();
  }
  tabcontent=document.getElementsByClassName("tabcontent");
  for(i=0;i < tabcontent.length;i++){
    tabchildren=tabcontent[i].childNodes;
    search_recursion(tabcontent[i],search)

  }
}

function search_recursion(element,search){
  var tabchildren,i,b,text;
  if (element.nodeName.toLowerCase()==="div"){
    tabchildren= element.childNodes;
    for (b=0; b< tabchildren.length;b++){
      new_div= tabchildren[b];
      search_recursion(new_div,search);

    }
  }else{
    if(element.nodeName && element.nodeName.toLowerCase()!== "#text" && element.nodeName.toLowerCase()!=="#comment"){
      element.style.display="none";
    }
    text = element.text|| element.innerText||element.textContent;
    if(text.toLowerCase().includes (search)){
      parent(element);
    }
  }
}
function parent(element){
  element.style.display="block";
  var parentElement = element.parentNode;
  parentElement.style.display="block";

  if (parentElement.className === "tabcontent"){
    var name = parentElement.id;
    var c = document.getElementsByClassName("name").childNodes;
    for(var i=0;i<c.length;i++){
      var child = c[i];
      child.style.display ="block";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i=0; i < tablinks.length; i++){
      tablinks[i].className = tablinks[i].className.replace("active","");
    }
  }else{
    parent(parentElement);
}
}
