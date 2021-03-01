import React,{useEffect} from 'react'
import './App.scss'

export default function NewsCards({news,articleNumber}) {
    useEffect(()=>{
            if (articleNumber%4==0 && articleNumber!==0){
                window.scrollTo(0, window.pageYOffset+300)
            }
    },[articleNumber])
    return (

        <div className="content-wrapper">
            {
                news.map(({ urlToImage, title, publishedAt },i) => (

                    <div className={`news-card ${articleNumber===i?"activeArticle":""}`}>
                        <a href="#" className="news-card__card-link" />
                        <img src={urlToImage} alt="" className="news-card__image" />
                        <div className="news-card__text-wrapper">
                            <h2 className="news-card__title">{title}</h2>
                            <div className="news-card__post-date">{publishedAt}</div>
                            {/* <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit…</p>
                    <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right" /></a>
                  </div> */}
                  <p>Artcle Number: {i}</p>
                        </div>

                    </div>



                ))
            }

        </div>
    )
}
