

document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll(".list-item");
    const infoBoxes = document.querySelectorAll(".info-box");

    infoBoxes.forEach(box => {
        box.style.display = "none";
    });

    if (infoBoxes.length > 0) {
        infoBoxes[0].style.display = "block";
    }

    if (listItems.length > 0) {
        listItems[0].style.color = "#5e63b6"; 
    }

    listItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetId = item.getAttribute("data-target");
            const targetBox = document.getElementById(targetId);


            infoBoxes.forEach(box => {
                box.style.display = "none";
            });

            if (targetBox) {
                targetBox.style.display = "block";
            }


            listItems.forEach(listItem => {
                if (listItem === item) {
                    listItem.style.color = "#5e63b6"; 
                } else {
                    listItem.style.color = "#333"; 
                }
            });
        });
    });
});



