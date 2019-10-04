// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const entryPoint = document.querySelector('.cards-container');
console.log(entryPoint);


const newCard = (object) => {

    //add elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const imgUrl = document.createElement('img');
    const byline = document.createElement('span');

    //add classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    //add content
    headline.textContent = object.headline;
    imgUrl.src = object.authorPhoto;
    byline.textContent = `By ${object.authorName}`;

    //add structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(imgUrl);
    author.appendChild(byline);

return card

}

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
  .then (response => {
    const artJavascript = response.data.articles.javascript;
    const artBootstrap = response.data.articles.bootstrap;
    const artTechnology = response.data.articles.technology;
    const artJquery = response.data.articles.jquery;
    const artNode = response.data.articles.node;
      artJavascript.forEach(element => { 
        const artFunc = newCard(element);
        entryPoint.appendChild(artFunc);
        console.log(artFunc);
      })
      artBootstrap.forEach(element => { 
        const artFunc = newCard(element);
        entryPoint.appendChild(artFunc);
        console.log(artFunc);
      })
      artTechnology.forEach(element => { 
        const artFunc = newCard(element);
        entryPoint.appendChild(artFunc);
        console.log(artFunc);
      })
      artJquery.forEach(element => { 
        const artFunc = newCard(element);
        entryPoint.appendChild(artFunc);
        console.log(artFunc);
      })
      artNode.forEach(element => { 
        const artFunc = newCard(element);
        entryPoint.appendChild(artFunc);
        console.log(artFunc);
      })
    })
  .catch(error => {
    console.log("The data was not returned", error);
  });
  

  