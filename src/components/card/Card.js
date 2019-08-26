import React from 'react';

import './styles.scss';

class Card extends React.Component {

  render() {
    const { element } = this.props;

    return (
      <div className='gCardContainer'>
        <div className='gCardImgContainer'>
          {element.image_url && <img
            alt='card'
            className='gCardImg'
            src={element.image_url}
          />}
        </div>
        <div className='gCardInfo'>
            <span className='gCardTitle'>{element.title}</span>
            <span className='gCardSubtitle'>
              {element.subtitle && element.subtitle.length > 25
                ? element.subtitle.substr(0, 100) + '...'
                : element.subtitle}
            </span>
        </div>
        <div className='gCardActions'>
          {element.buttons && (
            element.buttons.map((b, i) => <div
              key={i}
              className="gCardBtn"
              onClick={() => console.log(i)}
            >
              {b.title}
            </div>)
          )}
        </div>
      </div>
    )
  }
}

export default Card;