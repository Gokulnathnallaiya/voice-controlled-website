import logo from './psgLogo.png';
import React from 'react'
import axios from 'axios';
import './App.scss';
import alanBtn from '@alan-ai/alan-sdk-web';
import {  sampleNews } from './sampleNews';
import wordsToNumbers from 'words-to-numbers'
import NewsCards from './NewsCards';

class NewsApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      news: [],
      activeArticle:0,
      activeArticleNumber:null,

    }
  }

  componentDidMount() {
    console.log(window.pageYOffset)
    this.setState({ news: sampleNews.articles })
    
      alanBtn({
        key: '7b6566ba40cb0c9b30abeed7189b7f9d2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: ({ command, articles, number, articleNumber }) => {
          if (command === 'scrolldown') {
            window.scrollTo(0, window.pageYOffset+200)
            console.log(window.pageYOffset+200)

            
          } 
          else if (command == 'scrollup'){
            console.log(window.pageYOffset-200)
            window.scrollTo(0, window.pageYOffset-200)


          }
          else if (command === 'highlight') {
           this.setState((prevActiveArticle)=>({activeArticle:prevActiveArticle + 1}));
           this.setState({activeArticleNumber:articleNumber})
           
          }
          else if (command === 'open') {
            
            const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
            const article = articles[parsedNumber - 1];
  
            if (parsedNumber > articles.length) {
              alanBtn().playText('Please try that again...');
            } else if (article) {
              window.open(article.url, '_blank');
              alanBtn().playText('Opening...');
            } else {
              alanBtn().playText('Please try that again...');
            }}
          
        },
      });
    

  }

  componentDidUpdate(){
    console.log(this.state)
  }


  render() {
    return (
      <div className="App">
        <div>
          <header>
            <img className="psgtech-logo" src={logo} />
          </header>
          <div className="body">
             
            <NewsCards news={this.state.news} articleNumber={this.state.activeArticleNumber}/>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsApp;
