// This function is designed to dynamically adjusts the lines that connects the 
// images in the body; initially based on the position of an image with the ID "pic_id" 
function updateLines() {
    const combos = document.querySelectorAll(".line_combo");

    combos.forEach(combo => {
        const line = combo.querySelector(".custom_divider");
        const rightLine = combo.querySelector(".right_line");
        const leftLine = combo.querySelector(".left_line");

        const pic = document.getElementById("pic_id");
        const picRect = pic ? pic.getBoundingClientRect() : { x: 0, width: 70 };

        const width = (((picRect.x + picRect.width / 2) - (window.innerWidth / 2)) * 2);
        line.style.width = `${width}px`;

        const lineRect = line.getBoundingClientRect();

        rightLine.style.left = `${line.getBoundingClientRect().x + (lineRect.width)}px`;
        leftLine.style.left = `${line.getBoundingClientRect().x}px`;

    });

}

//initial calls to update lines
window.addEventListener('resize', updateLines);
window.addEventListener('DOMContentLoaded', updateLines);

function eefunction() {
    const img = document.getElementById("img_id");
    img.addEventListener("click", function () {
        if (img.classList.contains("ee")) {
            img.classList.remove("ee");
        } else {
            img.classList.add("ee");
        }
    });
}

eefunction();

