
const artDes = [];

//switches the opacity of the image and overlay
function changeOpacity(num) {
    let img = document.getElementById('imageId' + num);
    let overlay = document.getElementById('overlayId' + num);

    const style = window.getComputedStyle(img);
    const opacity = style.getPropertyValue('opacity');

    if (opacity == 0) {
        img.style.opacity = 1;
        overlay.style.opacity = 0;
    }
    else {
        img.style.opacity = 0;
        overlay.style.opacity = 1;
    }
}

function func_active(element, i) {

    // Get the currently active image
    const activeImage = document.querySelector('.slider-img.active');

    if (activeImage === element) {
        changeOpacity(i);
        if (activeImage.querySelector('div').style.opacity == 1) {
            activeImage.classList.add('back_class');
        } else {
            activeImage.classList.remove('back_class');
        }

    }// If there is an active image, remove the active class from it
    else if (activeImage) {
        activeImage.classList.remove('active');
        activeImage.querySelector('div').style.opacity = 0;
        activeImage.querySelector('img').style.opacity = 1;
        element.classList.add('active');
        activeImage.classList.remove('back_class');

    }
}


function jsonFunc(data, jsonIsGood) {

    for (let i = 1; i < 10; i++) {

        const overlay_ = document.createElement('div');
        overlay_.setAttribute('class', 'overlay');
        overlay_.setAttribute('id', 'overlayId' + i);

        const p = document.createElement('p');

        if (jsonIsGood) {
            //adds the description of artwork to the p element text property
            p.innerHTML = data[i - 1].piece_description;
        }
        else
            p.innerHTML = "There was an issue retrieving the JSON file image data";

        overlay_.appendChild(p);

        const newImage = document.createElement('img');
        newImage.setAttribute('src', 'art_images/' + i + '.jpg');
        newImage.setAttribute('id', 'imageId' + i);

        const desc = document.createElement('div');
        desc.setAttribute('class', 'slider-img');
        if (i === 3) {
            desc.classList.add('active');
            desc.setAttribute('style', 'position: relative;');

            let circle = document.createElement('span');
            circle.setAttribute('class', 'click_animation');
            circle.setAttribute('id', 'circle_id');

            desc.appendChild(circle);

        }


        desc.setAttribute('onclick', 'func_active(this, ' + i + ')');
        desc.appendChild(overlay_);
        desc.appendChild(newImage);

        document.querySelector('.pic_list').appendChild(desc);
    }
}

// initial funciton that starts the setup by grabbing
// and setting up art images and their descriptions
function createArtPictureStrip() {
    fetch('json/artwork.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            jsonFunc(data, true);
        })
        .catch(error => {
            //console.error('There was a problem with the fetch operation:', error);
            jsonFunc(null, false);
        })
}


