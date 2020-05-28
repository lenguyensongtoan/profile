import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import {photos} from './imgs'

class ImageGallery extends Component {
  render() {
    
    return (
     <div>
        <Gallery photos={photos} />
      </div>
    );
  }
}

export default ImageGallery;
