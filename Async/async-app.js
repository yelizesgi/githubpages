//!ASYNC TEKRAR CALİSMASİ////
const getNews = async () =>{
    const API_KEY = "c745c1432ad343b0ab1e4922eba33f4b"
    const URL = `https://newsapi.org/v2/everything?q=apple&from=2023-06-15&to=2023-06-15&sortBy=popularity&apiKey=${API_KEY}`

    try {
        const res = await fetch(URL)
        console.log(res)
        //?Error handling
        if (!res.ok) {
          throw new Error("News can not be fetched")
        }
        const data = await res.json()
        // console.log(data)
        renderNews(data.articles)
      } catch (err) {
        console.log(err)
        renderError(err)
      }
    }

const renderError = (err) => {
  const newsDiv = document.getElementById("news")
  newsDiv.innerHTML += `
  <h3 class="text-center text-warning">${err}</h3>
  <img src="./img/404-error.png" alt="404" /> 
  `
}




const renderNews = (news) => {
    const newsDiv = document.getElementById("news")
    news.map((item) => {
      const {title, content, url, urlToImage} = item
      newsDiv.innerHTML +=`
      <div class="col-sm-6 col-md-6 col-lg-3>
          <div class="card">
            <img src="${urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${content}</p>
              <a href="${url}" target="_blank" class="btn btn-info">Go Detail</a>
            </div>
          </div>
      </div>
      `
    })

}

window.addEventListener("load", () => {
  getNews()
})