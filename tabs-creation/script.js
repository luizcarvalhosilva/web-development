function openCity(event, cityName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    tabLinks = document.getElementsByClassName("tabLinks");
    
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    for (i = 0; i <tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    event.currentTraget.className += " active";
}