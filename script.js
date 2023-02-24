let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitle = document.querySelector('#main-title');
  mainTitle.textContent = "Welcome";

  // Part 2
  const body = document.querySelector('body');
  body.style.backgroundColor = "rgb(149, 73, 73)";

  // Part 3
  const favList = document.querySelector("#favorite-things");
  favList.lastElementChild.remove()
  
  // Part 4
  const specialTitle = document.querySelectorAll(".special-title");
  specialTitle.forEach(title => {
      title.style.fontSize = "2rem";
  })

  // Part 5
  const pastRaces = document.querySelectorAll("#past-races > li");
  for(let i = 0; i < pastRaces.length; i++) {
    if(pastRaces[i].textContent === "Chicago"){
      pastRaces[i].remove()
    }
  }

  // Part 6
  const newLi = document.createElement("li")
  newLi.textContent = "Paris"
  const pastRacesUl = document.querySelector("#past-races")
  pastRacesUl.appendChild(newLi)
  

  // Part 7
  const newDiv = document.createElement("div");
  newDiv.classList.add("blog-post", "purple");
  newDiv.innerHTML =
    "<h1>Paris</h1><p>OMG I CRASHED 7 CARS AND STILL ALIVE!!!! </p>";
  const mainDivWithBlogs = document.querySelector(".main")
  mainDivWithBlogs.appendChild(newDiv)
  

  // Part 8
  const quoteTitle = document.getElementById("quote-title")
  quoteTitle.addEventListener("click", randomQuote)
  quoteTitle.style.cursor = "pointer"

  // Part 9
  const blogPosts = document.querySelectorAll(".blog-post")
  console.log(blogPosts)
  blogPosts.forEach(post => {
    post.addEventListener("mouseout", () => {
      post.classList.toggle("purple")
    })
    post.addEventListener("mouseenter", () => {
      post.classList.toggle("red");
    });
  })

});
