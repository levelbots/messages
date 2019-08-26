import React from 'react';
import Slider from 'nuka-carousel';
import Card from '../card';

import './styles.scss';

class Carousel extends React.Component {
  render() {
    const { elements } = this.props;
    const carousel = elements.map((e, i) => {
      const element = {
        image_url: e.image_url,
        title: e.title,
        subtitle: e.subtitle,
        buttons: e.buttons
      }
      return <div key={i} ><Card element={element} /></div>
    });

    const slider = (carousel.length !== 1)
      ? <Slider 
        slideWidth={0.654761}
        cellSpacing={6}
        cellAlign="center"
        disableKeyboardControls
        renderCenterLeftControls={({ previousSlide }) => (
          <button className='gCarouselSideBtn' onClick={previousSlide}>&lt;</button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button className='gCarouselSideBtn' onClick={nextSlide}>&gt;</button>
        )}
        renderBottomCenterControls={() => {}}
      >{carousel}</Slider> 
      : <div style={{width: 220}} >{carousel}</div>;

    return (
      slider
    );
  }
}

export default Carousel;
