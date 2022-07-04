const path = document.querySelectorAll("#text path")
for(let i = 0; i < path.length; i++) {
    console.log("Check", path[i].getTotalLength())
}