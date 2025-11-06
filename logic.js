


//put into scope for screen resize
//let screenHeight = window.innerHeight;

//all animations are local variables everything else is global

const eachCategory = document.querySelectorAll(".each-category");  
const hero = document.getElementById("hero");
const pageBody = document.getElementById("page-body"); 
const categoryTitle = document.querySelectorAll(".category-title");

const illustration = document.getElementById("illustration"); 
const CharacterDesign = document.getElementById("character-design");
const animation = document.getElementById("animation");  
const sculpting = document.getElementById("sculpting"); 
const sketches = document.getElementById("sketches"); 

const imageViewer = document.getElementById("image-viewer");
const viewedImage = document.getElementById("viewed-image");

const imageXmark = document.getElementById("image-xmark"); 

const subgalleryTitles = document.querySelectorAll(".subgallery-title");

let loader = 1; 

offsetCoefficient = 0; 


imageXmark.style.fontSize = `${window.innerHeight * 0.1}px`; 

hero.style.height = `${window.innerHeight / 2}px`; 
hero.style.fontSize = `${window.innerHeight / 6}%`;

imageXmark.addEventListener("click", function(){
	imageViewer.style.visibility = "hidden"; 
	pageBody.style.filter = "blur(0px)"; 
});


const commissionsLink = document.getElementById("commissions-link");

commissionsLink.addEventListener("click", function(){
	window.location.href = "commissions.html"; 
	
});

function addTransition(added){	
	added.style.transition = "0.5s"; 
	setTimeout(function(){
		added.style.transition = "0s"; 		
	},600);
	
}

const illustrationGallery = document.querySelector("#illustration-gallery");
	
for(let i = 1; i <= 21; i++){
	illustrationGallery.innerHTML += `<div class="gallery-container"><img src="pics/illustration/img (${i}).jpg" id="ill-img${i}" class="gallery-image"> </div>
	`;
}


const cdSubgallery1 = document.querySelector("#character-design-subgallery1");
	
for(let i = 1; i <= 10; i++){
	cdSubgallery1.innerHTML += `<div class="gallery-container"><img src="pics/character design/gallery 1/img (${i}).jpg" id="cds1-img${i}" class="gallery-image"> </div>
	`;
}

const cdSubgallery2 = document.querySelector("#character-design-subgallery2");
	
for(let i = 1; i <= 5; i++){
	cdSubgallery2.innerHTML += `<div class="gallery-container"><img src="pics/character design/gallery 2/img (${i}).jpg" id="cds2-img${i}" class="gallery-image"></div>
	`;
}

const cdSubgallery3 = document.querySelector("#character-design-subgallery3");
	
for(let i = 1; i <= 35; i++){
	cdSubgallery3.innerHTML += `<div class="gallery-container"><img src="pics/character design/gallery 3/img (${i}).jpg" id="cds3-img${i}" class="gallery-image"></div>
	`;
}

const animationGallery = document.querySelector("#animation-gallery");
	
for(let i = 1; i <= 2; i++){
	animationGallery.innerHTML += `<div class=""><video src="pics/animation/video (${i}).mp4" type="video/mp4" id="animation-vid${i}" class="gallery-image" controls></video></div>
	`;
}

for(let i = 3; i <= 4; i++){
	animationGallery.innerHTML += `<div class=""><video src="pics/animation/video (${i}).mov" type="video/mov" id="animation-vid${i}" class="gallery-image" controls></video></div>
	`;
}

for(let i = 1; i <= 9; i++){
	animationGallery.innerHTML += `<div class="gallery-container"><img src="pics/animation/img (${i}).gif" id="animation-img${i}" class="gallery-image"></div>
	`;
}


const sculptingGallery = document.querySelector("#sculpting-gallery");
	
for(let i = 1; i <= 2; i++){
	sculptingGallery.innerHTML += `<div class="gallery-container"><img src="pics/sculpting/img (${i}).gif" id="sculpting-img${i}" class="gallery-image"></div>
	`;
}

for(let i = 3; i <= 14; i++){
	sculptingGallery.innerHTML += `<div class="gallery-container"><img src="pics/sculpting/img (${i}).jpeg" id="sculpting-img${i}" class="gallery-image"></div>
	`;
}

const sketchesGallery = document.querySelector("#sketches-gallery");
	
for(let i = 1; i <= 10; i++){
	sketchesGallery.innerHTML += `<div class="gallery-container"><img src="pics/sketches/img (${i}).jpeg" id="sketches-img${i}" class="gallery-image"></div>
	`;
}



subgalleryTitles.forEach(function(eachSubtitle){
	eachSubtitle.style.fontSize = `${window.innerHeight / 35}px`;
});

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
		viewedImage.src = hoveredImg.src; 
		imageViewer.style.visibility= "visible"; 	
		pageBody.style.filter = "blur(20px)"; 
		
		if (viewedImage.getBoundingClientRect().height /  viewedImage.getBoundingClientRect().width > window.innerHeight / window.innerWidth){
			console.log("1");
			viewedImage.style.height = "80%"; 
			viewedImage.style.width = "auto"; 					
		} else if (viewedImage.getBoundingClientRect().width /  viewedImage.getBoundingClientRect().height > window.innerWidth / window.innerHeight){
			console.log("2");
			viewedImage.style.height = "auto"; 
			viewedImage.style.width =  "80%"; 	
		} else if (viewedImage.getBoundingClientRect().width >  viewedImage.getBoundingClientRect().height){
			console.log("3");
			viewedImage.style.height = "auto"; 
			viewedImage.style.width =  "80%"; 					
		} else{
			console.log("4");
			viewedImage.style.height = "80%"; 
			viewedImage.style.width =  "auto"; 				
		}		
	});
	
});



categoryTitle.forEach(function(eachTitle){
	eachTitle.style.height = `${window.innerHeight / 10}px`;
	eachTitle.style.fontSize = `${window.innerHeight / 5}%`;	
	eachTitle.style.paddingLeft = `${window.innerHeight / 25}px`;
	
	eachTitle.addEventListener("click", function(){
		addTransition(pageBody);
		
		if (this.parentElement.style.height == `${window.innerHeight}px`){
			offsetCoefficient = 0;
			contractGallery(this.parentElement);
		} else {
			switch(this.parentElement.id){
				case "illustration":
					offsetCoefficient = 5;
					break
				case "character-design":
					offsetCoefficient = 6;
					break	
				case "sculpting":
					offsetCoefficient = 7;
					break	
				case "animation":
					offsetCoefficient = 8;
					break	
				case "sketches":
					offsetCoefficient = 9;
			}	
			expandGallery(this.parentElement); 
		}
		pageBody.style.top = `${0 - window.innerHeight / 10 * offsetCoefficient}px`;	
		
		
		addTransition(this);
		expand(this); 
		
	});	
	
});


function expandGallery(changed){	
	let gallery = changed.querySelector(".gallery"); 
	addTransition(gallery);
	gallery.style.height = `${window.innerHeight * 0.85}px`
}

function contractGallery(changed){	
	let gallery = changed.querySelector(".gallery"); 
	addTransition(gallery);
	gallery.style.height = `${window.innerHeight * 0}px`
}


let galleryImages = document.querySelectorAll(".gallery-image");
			
	
galleryImages.forEach(function(eachImg){
	eachImg.style.height = `${window.innerHeight / 5}px`;
});


eachCategory.forEach(function(category){
	category.style.height = `${window.innerHeight / 10}px`; 		
	
	
		
	
	category.addEventListener("mouseover", function(){
		let hovered = category.querySelector(".add-padding-hover");
		if (hovered !== null){
		
			hovered.style.paddingRight = `${window.innerHeight / 50}px`;
			
			category.addEventListener("mouseout", function(){
				hovered.style.paddingRight = "0px";
			});
		}
	})


	let categoryTitle = category.querySelector(".category-title");
	
	categoryTitle.addEventListener("click", function(e){
			 
		
	});
});

function expand(expanded){	
loader = expanded.parentElement; 
hover = loader.querySelector(".title-text");

	if (expanded.parentElement.style.height != `${window.innerHeight}px`){
		
		expanded.parentElement.style.height = `${window.innerHeight}px`; 
		addTransition(expanded.parentElement);
		expanded.style.paddingLeft = "0px";
		hover.classList.remove("add-padding-hover");
		
	} else {
		categoryTitle.forEach(function(eachTitle){
			addTransition(expanded.parentElement);
			addTransition(eachTitle);
			eachTitle.style.paddingLeft = `${window.innerHeight / 25}px`;
		});
		
		expanded.parentElement.style.height = `${window.innerHeight / 10}px`;
		//addTransition(expanded.parentElement);
		//expanded.style.paddingLeft = `${window.innerHeight / 25}px`;
		loader = 1; 
		hover.classList.add("add-padding-hover");	
	}
}






//on screen resize
window.addEventListener("resize", function(){
	pageBody.style.top = `${0 - window.innerHeight / 10 * offsetCoefficient}px`	

	hero.style.height = `${window.innerHeight / 2}px`;
	hero.style.fontSize = `${window.innerHeight / 6}%`;
	
	eachCategory.forEach(function(category){
		category.style.height = `${window.innerHeight / 10}px`; 
	});
	
	imageXmark.style.fontSize = `${window.innerHeight * 0.1}px`;
	
	subgalleryTitles.forEach(function(eachSubtitle){
		eachSubtitle.style.fontSize = `${window.innerHeight / 35}px`;
	});
	
	categoryTitle.forEach(function(eachTitle){
		eachTitle.style.height = `${window.innerHeight / 10}px`;
		eachTitle.style.fontSize = `${window.innerHeight / 5}%`;
		
		let  galleryImages = document.querySelectorAll(".gallery-image");
			
		galleryImages.forEach(function(eachImg){
			eachImg.style.height = `${window.innerHeight / 5}px`;
		});
		
		if (loader !== 1){	
			loader.style.height = `${window.innerHeight}px`;				
			loader.style.paddingLeft = `${0 - window.innerHeight / 50}px`;
			
			let loaderGallery = loader.querySelector(".gallery");
			
			
			loaderGallery.style.height = `${window.innerHeight * 0.85}px`;
		} else {
			eachTitle.style.paddingLeft = `${window.innerHeight / 25}px`;
		
		}	
		
	});		
});
