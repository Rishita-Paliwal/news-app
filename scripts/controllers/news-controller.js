// Talks to View Layer (HTML)
import { newsService } from "../services/news-service.js";

// Entry point function
async function prepareNews() {
    const allNews = await newsService.readNews();

    // ✅ Optional: Clear old news if this runs multiple times
    const newsId = document.querySelector('#news');
    newsId.innerHTML = '';

    allNews.forEach(news => printNews(news));
    console.log('All News are', allNews);
}

// DOM render function
function printNews(news) {
    const newsId = document.querySelector('#news');

    const colDiv = document.createElement('div');
    colDiv.className = 'col-4';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style.width = '18rem';
    colDiv.appendChild(cardDiv);

    const img = document.createElement('img');
    img.src = news.image;
    img.className = 'card-img-top';
    img.alt = 'News Image'; // ✅ good accessibility
    cardDiv.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardDiv.appendChild(cardBody);

    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = news.title;

    // 🚨 ERROR FIXED: You had h5.appendChild(h5);
    // That creates a DOM error by appending the element to itself.
    cardBody.appendChild(h5); // ✅ Correct usage

    const pTag = document.createElement('p');
    pTag.innerText = news.desc;
    pTag.className = 'card-text';
    cardBody.appendChild(pTag);

    const aTag = document.createElement('a');
    aTag.href = news.url;
    aTag.className = 'btn btn-primary';
    aTag.innerText = 'Read more';
    aTag.target = '_blank'; // ✅ opens in new tab
    cardBody.appendChild(aTag);

    newsId.appendChild(colDiv);
}

// Call on load
prepareNews();
