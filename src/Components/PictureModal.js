import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class PictureModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show
    };

    this.close = this.close.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({show: nextProps.show});
  }
  
  close() {
    this.setState({ show: false });
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.close}>
        <Modal.Body>
          <Camera
            onTakePhoto = { (dataUri) => { this.props.onTakePhoto(dataUri); } }
          />
        </Modal.Body>
      </Modal>
    );
  }
}

export default PictureModal;