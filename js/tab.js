function openSubject(subjectName, element, color) {
    var tabcontent = document.querySelectorAll(".tabcontent");
    tabcontent.forEach(function(tab){
        tab.style.display = "none";
    });
  
    var tablinks = document.querySelectorAll(".tablink");
    tablinks.forEach(function(link){
        link.style.backgroundColor = "";
    });
  
    document.getElementById(subjectName).style.display = "block";
  
    element.style.backgroundColor = color;
  }
  
  document.getElementById("defaultOpen").click();