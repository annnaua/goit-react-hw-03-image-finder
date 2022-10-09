import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalImage } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapePress);
  }

  handleEscapePress = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalImage>
          <img src={this.props.largeImage} alt={this.props.tags} />
        </ModalImage>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
