// here be your javascript
let url = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=5a1c26fca2cd4a66893c07f9df8ae532";
fetch(url)
  .then(r => {
    return r.json();
})
  .then (data => {
    console.log(data);
    
    let articles = data.articles; console.log(articles);
    
    let articlesList = document.createElement("ul");
 
  let body = document.querySelector("body");
      body.appendChild(articlesList);
    articles.map(articles => {
     
  let articlesItem = document.createElement("li");
      articlesItem.innerHTML = 
        '<a href = "' + articles.url + '">' + articles.title +"</a>";
      articlesList.appendChild(articlesItem);
  //  });
})

.catch(e => {
  console.log(`An error occurred: ${e}`);
    });
});