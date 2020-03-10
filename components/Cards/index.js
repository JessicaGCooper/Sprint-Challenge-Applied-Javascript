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
      for (let key in response.data.articles){
          response.data.articles[key].forEach(element => { 
                const artFunc = newCard(element);
                entryPoint.appendChild(artFunc);
        })
      }
    })
  .catch(error => {
    console.log("The data was not returned", error);
  });


// axios
// .get('https://lambda-times-backend.herokuapp.com/articles')
//   .then (response => {
//         const articles = Object.keys(response.data.articles);
//         console.log(articles);
//         [articles].forEach(element => {
//             const artFunc = newCard(element);
//             entryPoint.appendChild(artFunc);
//         })
//     })
//   .catch(error => {
//     console.log("The data was not returned", error);
//   });
  
  