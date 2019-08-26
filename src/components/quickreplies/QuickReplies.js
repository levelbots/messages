import React from 'react';

import './styles.scss';

export default class QuickReplies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReplies: true
    };
  }

  render() {
    const { elements, color } = this.props;

    const list = [];
    const array = elements;
    for (let i = 0; i < array.length; i++) {
      list.push(
        <div
          className={`gQuickRepliesBtn gChip`} style={color ? {borderColor: color} : null} key={i}
          onClick={() => console.log({text: array[i].title, payload: array[i].payload})}
        >
          {array[i].title}
        </div>);
    }
    return (
      this.state.showReplies && <div className='gWrapper'>{list}</div>
    );
  }
}