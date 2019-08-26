import React from 'react';
import Card from './components/card'
import Carousel from './components/carousel'
import QuickReplies from './components/quickreplies'
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

const carouselInfo = [ cardInfo, cardInfo, cardInfo ];

const qrInfo = [{title: 'coso', payload: 'coso_postback'}, {title: 'soco', payload: 'soco_postback'}]

function App() {
  return (
    <div className="App">
      <Card element={cardInfo}/>
      <Carousel elements={carouselInfo}/>
      <QuickReplies elements={qrInfo} color={'#4233FF'}/>
    </div>
  );
}

export default App;
