// For Mobile Sidebar Filter
function openSidebar() {
    document.getElementById("mySidebar").classList.add("active");
    document.getElementById("sidebarOverlay").classList.add("active");
}

function closeSidebar() {
    document.getElementById("mySidebar").classList.remove("active");
    document.getElementById("sidebarOverlay").classList.remove("active");
}

document.getElementById("sidebarOverlay").addEventListener("click", closeSidebar);