<!doctype html>

<html  lang="en">

<head>
	<meta charset="utf-8">
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">	
	<link rel="icon" href=""> <!-- image in browser tab -->
	<script src="https://kit.fontawesome.com/425eb7a3f6.js" crossorigin="anonymous"></script>
	<title> </title> 



</head>

<body>
	<div id="image-viewer" class="">		
		<img src="" id="viewed-image">	
		<i id="image-xmark" class="fa-solid fa-xmark"></i> 
	</div>
	
	<div id="page-body">
	
		
	
		<div id="hero">
			<div id="commissions-link">
				commissions
			</div>
			
			<div id="logo">
				<img id="logo-img" src="pics/home/logo.png"> <br>
				<h1 id="logo-text"> michael rivera - m00kkle</h1>				
			</div>
		</div>

		<div id="categories">	
		
			<div id="illustration" class="each-category">
				<div class="category-title">
					<h2>
						<span class="title-text add-padding-hover">illustration</span>
						<i class="fa-solid fa-xmark xmark"></i> 
					</h2>
				</div>
				<div id="illustration-gallery" class="gallery">
					<?php
					    // 1. Define the directory
					    $dir = 'images/';
					
					    // 2. Define supported image formats
					    $formats = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
					
					    // 3. Scan the directory
					    if (is_dir($dir)) {
					        $files = scandir($dir);
					        
					        // 4. Filter for image files and ignore '.' and '..'
					        foreach ($files as $file) {
					            $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
					            if (in_array($ext, $formats)) {
					                // 5. Output the HTML for each image
					                echo '<div class="gallery-item">';
					                echo '<img src="' . $dir . $file . '" alt="' . $file . '">';
					                echo '</div>';
					            }
					        }
					    } else {
					        echo 'Directory not found.';
					    }
					 ?>		
					<div class="spacer"></div>
				</div>
			</div>
			
			<div id="character-design" class="each-category">
				<div class="category-title">
					<h2>
						<span class="title-text add-padding-hover">character design</span>
						<i class="fa-solid fa-xmark xmark"></i> 
					</h2>
				</div>
				
				<div id="character-design-gallery" class="gallery">				
					<h3 class="subgallery-title"> orian</h3>
					<div id="character-design-subgallery1" class="subgallery"></div>
					
					<h3 class="subgallery-title"> mookle </h3>
					<div id="character-design-subgallery2" class="subgallery"></div>
					
					<h3 class="subgallery-title"> others</h3>
					<div id="character-design-subgallery3" class="subgallery"></div>				
				</div>
			</div>		
			
			<div id="sculpting" class="each-category">
				<div class="category-title">
					<h2>
						<span class="title-text add-padding-hover">sculpting</span>
						<i class="fa-solid fa-xmark xmark"></i> 
					</h2>
				</div>
				<div id="sculpting-gallery" class="gallery">
					<div class="spacer"></div>
				</div>
			</div>
			
			<div id="animation" class="each-category">
				<div class="category-title">
					<h2>
						<span class="title-text add-padding-hover">animation</span>
						<i class="fa-solid fa-xmark xmark"></i> 
					</h2>
				</div>
				<div id="animation-gallery" class="gallery">
					<div class="spacer"></div>
				</div>
			</div>
			
			<div id="sketches" class="each-category">
				<div class="category-title">
					<h2>
						<span class="title-text add-padding-hover">sketches</span>
						<i class="fa-solid fa-xmark xmark"></i> 
					</h2>
				</div>
				<div id="sketches-gallery" class="gallery">
					<div class="spacer"></div>
				</div>
			</div>	
			
		</div>
	</div>


	<script src="logic.js" type="text/javascript"> 
	</script>
</body>

<style>

#logo-text{
	font-family: "Roboto Mono", monospace;
	font-optical-sizing: auto;
	font-weight: 600;
	font-style: normal;
}


::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-thumb {
  background: gray; 
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: black; 
}

</style>






</html>
