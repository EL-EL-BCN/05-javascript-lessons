let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages) {
	galleryImages.forEach(function(image, index) {
		image.onclick = function() {
			let getElementCss = window.getComputedStyle(image);
			let getFullImageUrl = getElementCss.getPropertyValue("background-image");
			let getImageUrlPos = getFullImageUrl.split("/assets/images/gallery/thumbnails/");
			let SetNewImageUrl = getImageUrlPos[1].replace('")', '');
			
			getLatestOpenedImg = index + 1;

			// Create popup photo display window //
			let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "assets/images/gallery/fullsize/" + SetNewImageUrl);
            newImg.setAttribute("id", "current-image");


            // Prev/Next buttons
            newImg.onload = function(){
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");
                newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");
                newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
            }

		}
	});
}

function closeImg() {
	    // Remove the image window
    document.querySelector(".img-window").remove();

    // Remove the prev/next buttons
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
	document.querySelector("#current-image").remove();

	let getImgWindow = document.querySelector(".img-window");
	let newImg = document.createElement("img");
	getImgWindow.appendChild(newImg);

	// Set new image "src"
    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if(calcNewImg > galleryImages.length) {
            calcNewImg = 1;
        }
    }
    else if(changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImages.length;
        }
    }
    newImg.setAttribute("src", "assets/images/gallery/fullsize/img" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-image");

    // Adjust our global variable "getLatestOpenedImg"
    getLatestOpenedImg = calcNewImg;

    // Change the button positions
    newImg.onload = function(){
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
    }
}