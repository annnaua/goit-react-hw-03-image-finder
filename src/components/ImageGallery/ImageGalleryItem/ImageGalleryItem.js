import PropTypes from 'prop-types';
import { Component } from 'react';

import { Modal } from '../../Modal/Modal';
import { ImageItem, ImageGalleryImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    const { showModal } = this.state;
    const { tags, smallImage, largeImage } = this.props;

    return (
      <ImageItem>
        <ImageGalleryImg
          src={smallImage}
          alt={tags}
          onClick={this.toggleModal}
        />

        {showModal && (
          <Modal
            largeImage={largeImage}
            tags={tags}
            closeModal={this.toggleModal}
          />
        )}
      </ImageItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};
