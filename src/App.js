import React from 'react';
import Card from './components/card'
import Carousel from './components/carousel'
import './App.css';

const cardInfo = {
  image_url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  title: 'Coso',
  subtitle: 'Subcoso',
  buttons: [{
    type: 'web_url',
    title: 'Url 1',
    url: 'https://www.google.com/'
  }, {
    type: 'web_url',
    title: 'Url 2',
    url: 'https://www.google.com/'
  }]
}

const carouselInfo = [ cardInfo, cardInfo, cardInfo ]

function App() {
  return (
    <div className="App">
      <Card element={cardInfo}/>
      <Carousel elements={carouselInfo}/>
    </div>
  );
}

export default App;
