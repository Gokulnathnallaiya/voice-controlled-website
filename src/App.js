import logo from './psgLogo.png';
import React from 'react'
import axios from 'axios';
import './App.scss';
import alanBtn from '@alan-ai/alan-sdk-web';
import {  sampleNews } from './sampleNews'

class NewsApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      news: []

    }
  }

  componentDidMount() {
    console.log(window.pageYOffset)
    this.setState({ news: sampleNews.articles })
    
      alanBtn({
        key: '7b6566ba40cb0c9b30abeed7189b7f9d2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: ({ command, articles, number }) => {
          if (command === 'scrolldown') {
            window.scrollTo(0, window.pageYOffset+200)
            console.log(window.pageYOffset+200)

            
          } 
          else if (command == 'scrollup'){
            console.log(window.pageYOffset-200)
            window.scrollTo(0, window.pageYOffset-200)


          }
          
        },
      });
    

  }


  render() {
    return (
      <div className="App">
        <div>
          <header>
            <img className="psgtech-logo" src={logo} />
          </header>
          <div className="body">
            <div className="content-wrapper">
              {
                this.state.news.map(({ urlToImage, title, publishedAt }) => (

                  <div className="news-card">
                    <a href="#" className="news-card__card-link" />
                    <img src={urlToImage} alt="" className="news-card__image" />
                    <div className="news-card__text-wrapper">
                      <h2 className="news-card__title">{title}</h2>
                      <div className="news-card__post-date">{publishedAt}</div>
                      {/* <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit…</p>
                    <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right" /></a>
                  </div> */}
                    </div>
                  </div>



                ))
              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsApp;
