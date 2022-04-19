async function getBlog(){
    try{
        let ftch = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json?fbclid=IwAR13sONrCBE53xzvqGGnwJ0mYXym3VYvE7KS5zsqcbXPOxoo15Q9TTcGck8');
        return await ftch.json();
    } catch(error){
        console.log(error);
    }
}

async function renderBlog() {
    let pagg = await getBlog();
    let blank = '';
    let article = pagg.articles;
    
    for (var i = 0; i < article.length; i++) {
        let elementss = `<a href='' class = "card">
            <div class = 'card-img'>
            <img src = '${article[i].urlToImage}'>
            <h1>${article[i].title}</h1>
            <p>${article[i].description}</p>
            <h2>By: ${article[i].author}</h2>
            </div>
            <h1></h1>

            </a>`;

        blank += elementss;
        let cont = document.querySelector('.cards');
        cont.innerHTML = blank;    

        
    }
}

renderBlog();