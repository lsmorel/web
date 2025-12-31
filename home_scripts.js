// This function is designed to dynamically adjusts 
// the line that connects the images in the body 
function createSVGLines() {

    const path = document.getElementById("pathForLineID");
    const container = document.getElementById('svgContainerID');

    //return if ids aren't found... shouldn't happen
    if (!path || !container) return;

    const containerRect = container.getBoundingClientRect();
    const rect1 = document.getElementById("picId1").getBoundingClientRect();
    const rect2 = document.getElementById("picId2").getBoundingClientRect();
    const rect3 = document.getElementById("picId3").getBoundingClientRect();
    const rect4 = document.getElementById("picId4").getBoundingClientRect();

    //center points relative to document
    const x1 = (rect1.left  + rect1.width / 2) - containerRect.left;
    const y1 = (rect1.top  + rect1.height / 2) - containerRect.top;
    const x2 = (rect2.left + rect2.width / 2) - containerRect.left;
    const y2 = (rect2.top + rect2.height / 2) - containerRect.top;
    const x3 = (rect3.left + rect3.width / 2) - containerRect.left;
    const y3 = (rect3.top + rect3.height / 2) - containerRect.top;
    const x4 = (rect4.left + rect4.width / 2) - containerRect.left;
    const y4 = (rect4.top + rect4.height / 2) - containerRect.top;

    const diff = (rect1.left - rect2.left);

    //pictues are not vertically aligned
    if(diff > 0 && diff > 1 || diff < 0 && diff < -1){

        const verticalDist = (y2 - y1) * 1.25;
                
        const cp1y = y1 + verticalDist;
        const cp2y = y2 - verticalDist;
        const cp3y = y3 + verticalDist;
        const cp4y = y4 - verticalDist;

        const d = `M ${x1} ${y1}
        C ${x1} ${cp1y}, ${x2} ${cp2y}, ${x2} ${y2}
        C ${x2} ${cp2y + verticalDist*2}, ${x3} ${cp3y - verticalDist*2}, ${x3} ${y3}
        C ${x3} ${cp3y}, ${x4} ${cp4y}, ${x4} ${y4}`;

        path.setAttribute('d', d);

        //Another option for line connecting images (more rigid style)
        // const dd = `M ${x1} ${y1}
        // L ${x1} ${y1 +(y2-y1)/2}, ${x2} ${y1 + (y2-y1)/2}, ${x2} ${y2},
        //  ${x2} ${y2 + (y3-y2)/2}, ${x3} ${y2 + (y3-y2)/2}, ${x3} ${y3},
        //  ${x3} ${y3 + (y4-y3)/2}, ${x4} ${y3 + (y4-y3)/2}, ${x4} ${y4}`;
        // path.setAttribute('d', dd);

    }
    else{//mobile view - simple line straight down
        const d = `M ${x1} ${y1} L ${x4} ${y4}`;
        path.setAttribute('d', d);
    }
    
}

window.addEventListener('load', () => createSVGLines());
window.addEventListener('resize',() => createSVGLines());
    
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

