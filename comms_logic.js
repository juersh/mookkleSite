
const commissionsGallery = document.querySelector("#commissions-gallery");

const imageViewer = document.getElementById("image-viewer");
const viewedImage = document.getElementById("viewed-image");

const imageXmark = document.getElementById("image-xmark"); 

const pageBody = document.getElementById("page-body"); 

const Pchart = document.getElementById("pchart"); 

const PchartChibi = document.getElementById("pchart-chibi"); 

imageXmark.style.fontSize = `${window.innerHeight * 0.1}px`; 

for(let i = 1; i <= 6; i++){
	commissionsGallery.innerHTML += `<div class="gallery-container"><img src="pics/commissions/img (${i}).jpg" id="comms-img${i}" class="gallery-image"> </div>
	`;
}

hero.style.fontSize = `${window.innerHeight / 8}%`;

let  galleryImages = document.querySelectorAll(".gallery-image");

console.log(galleryImages);

const backHome = document.getElementById("back-home");

backHome.addEventListener("click", function(){
	window.location.href = "index.html"; 
	
});	


imageXmark.addEventListener("click", function(){
	imageViewer.style.visibility = "hidden"; 
	pageBody.style.filter = "blur(0px)"; 
});


galleryImages.forEach(function(eachImg){
	eachImg.style.height = `${window.innerHeight / 5}px`;
});




function sizeImage(clickedImage){
			if (clickedImage.getBoundingClientRect().height /  clickedImage.getBoundingClientRect().width > window.innerHeight / window.innerWidth){
				console.log("1");
				clickedImage.style.height = "80%"; 
				clickedImage.style.width = "auto"; 					
			} else if (clickedImage.getBoundingClientRect().width /  clickedImage.getBoundingClientRect().height > window.innerWidth / window.innerHeight){
				console.log("2");
				clickedImage.style.height = "auto"; 
				clickedImage.style.width =  "80%"; 	
			} else if (clickedImage.getBoundingClientRect().width >  clickedImage.getBoundingClientRect().height){
				console.log("3");
				clickedImage.style.height = "auto"; 
				clickedImage.style.width =  "80%"; 					
			} else{
				console.log("4");
				clickedImage.style.height = "80%"; 
				clickedImage.style.width =  "auto"; 				
			}
		}


const galleryContainers = document.querySelectorAll(".gallery-container");

galleryContainers.forEach(function(eachContainer){
	let hoveredImg = eachContainer.querySelector(".gallery-image");
	
	eachContainer.addEventListener("mouseover", function(){
		hoveredImg.style.top = "-20px";
		hoveredImg.style.cursor = "pointer";
		hoveredImg.style.filter = "drop-shadow(0px 5px 5px)";
		
		
		
		eachContainer.addEventListener("mouseout", function(){
			hoveredImg.style.top = "0px";	
			hoveredImg.style.filter = "drop-shadow(0px 0px 0px white)";
		});	
	});
	
	
	hoveredImg.addEventListener("click", function(){
		viewedImage.src = this.src; 
		imageViewer.style.visibility= "visible"; 	
		pageBody.style.filter = "blur(20px)"; 
	
		sizeImage(viewedImage);
	});
	
});



Pchart.addEventListener("click", function(){
	viewedImage.src = "pics/commissions/commissions.png"; 
	imageViewer.style.visibility= "visible"; 	
	pageBody.style.filter = "blur(20px)"; 

	sizeImage(viewedImage);
});
	
	
PchartChibi.addEventListener("click", function(){
	viewedImage.src = "pics/commissions/chibi commissions.png"; 
	imageViewer.style.visibility= "visible"; 	
	pageBody.style.filter = "blur(20px)"; 

	sizeImage(viewedImage);
});


	


window.addEventListener("resize", function(){
	
	hero.style.fontSize = `${window.innerHeight / 8}%`;
		
	imageXmark.style.fontSize = `${window.innerHeight * 0.1}px`; 	
		
	galleryImages.forEach(function(eachImg){
		eachImg.style.height = `${window.innerHeight / 5}px`;
	});
		
});

