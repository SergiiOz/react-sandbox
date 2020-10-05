import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //if load call function setSpans
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    //get height image
    const height = this.imageRef.current.clientHeight;
    //count rows
    const spans = Math.ceil(height / 10);
    this.setState({
      spans: spans,
    });
  };

  render() {
    return (
      <li style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          src={this.props.image.urls.regular}
          alt={this.props.image.alt_description}
          ref={this.imageRef}
        />
      </li>
    );
  }
}

export default ImageCard;
