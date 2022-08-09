//1. First we need to fetch the first object i nthe Array of data, (the first cake)

fetch("http://localhost:3000/cakes/1")
.then(res => res.json())
.then(data => renderFirstCake(data))

//2. create variables for the first cake, then we'll have to build a function after the variables are made. 

let cakeName = document.getElementById("cake-name") // "cake-name" from the id="cake-name" in the index.html file...go have a look!.
let cakeImage = document.getElementById("cake-image") // "cake-image" from the id="cake-image" in the index.html file...go have a look!.
let cakeDescription = document.getElementById("cake-description") // "cake-description" from the id="cake-description" in the index.html file...go have a look!.
let cakeReview = document.getElementById("review-list") // "review-list" from the id="review-list" in the index.html file...go have a look!.

//3. create a function to append the first cake data onto the part of our html document whats empty

function renderFirstCake(data){
  cakeName.textContent = data.name; // CakeName, cakeImage, and cakeDescription variables are what we delacre up above, were now changing it in this function to the data from our first cake. 
  cakeImage.src = data.image_url;
  cakeDescription.textContent = data.description;
  for(const item of data.reviews){ // here we're iterating through the reviews data
    let firstCake = document.createElement("li") // herewe're creating a new li html element to hold the new review.
    firstCake.innerText = item; //changing that innterText to the items in the reviews
    cakeReview.append(firstCake) //finally, placing it onto the element so everyone can see.
  }

}

// 4. Now we wan to render all the cakes so first we need to fetch all the cakes for our dd.json file.

fetch("http://localhost:3000/cakes")
.then(res => res.json())
.then(data => createNewLi(data))

//5. next we create a variable for our list of cakes function below.
let cakeList = document.getElementById("cake-list") // "cake-list" from the id="cake-list" in the index.html file...go have a look!

//6. now we create the function that will be called in our fetch to see all the cake data
function createNewLi(data){
  for(item of data){
    let newLi = document.createElement("li");
    newLi.innerHTML = item.name;
    cakeList.append(newLi)
  }
}

//7. we will now create a variable for our form 

let mainForm = document.getElementById("review-form") // "review-form" from the id="review-form" in the index.html file...go have a look!.

let inputForm = document.getElementById("review"); //"review" from the id="review" in the index.html file...go have a look!.

//8. here we create the function  that will also have a submit action for he form

mainForm.addEventListener("submit", function(e){
  e.preventDefault(); // this si alwasy equired when using submit action, tos revents from page reloading. 
  let newLi = document.createElement("li");// this create a new li html element for when creating a new html node to post to the page. 
  newLi.innerText = review.value // this addes the value of whatever the user enters into the form. 
  cakeReview.append(newLi) // this finally shows the new value in the html file so users can see it. 
  mainForm.reset() // this reses the form when a user clicks the submit button
})


///END OF LINE
