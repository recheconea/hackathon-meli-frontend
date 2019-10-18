import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import PictureModal from './PictureModal';

const cleanBeneficiary = {
  name: '',
  surname: '',
  dni: '',
  pin: '',
  photo: '',
  dniPicture: '',
};

class NewBeneficiaryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show,
      beneficiary: cleanBeneficiary
    };

    this.close = this.close.bind(this);
    this.save = this.save.bind(this);
    this.handleDniChange = this.handleDniChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handlePinChange = this.handlePinChange.bind(this);
    this.validate = this.validate.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.onTakePhoto = this.onTakePhoto.bind(this);
  }

  close() {
    this.setState({ show: false });
  }

  save() {
    if (this.validate()) {
      this.close();
      this.clearAll();
      this.props.addBeneficiary(this.state.beneficiary);
    } else {
      console.log('no pasa')
    }
  }

  validate() {
    return this.state.beneficiary.name.trim().length && 
           this.state.beneficiary.surname.trim().length &&
           this.state.beneficiary.dni.length > 4 && this.state.beneficiary.dni.length < 10 &&
           (this.state.beneficiary.id || this.state.beneficiary.pin.length === 4) &&
           this.state.photo.length && this.state.dniPicture.length;
  }

  handleDniChange(event) {
    this.setState({ beneficiary: { ...this.state.beneficiary, dni: event.target.value } });
  }
  
  handleNameChange(event) {
    this.setState({ beneficiary: { ...this.state.beneficiary, name: event.target.value } });
  }
  
  handleSurnameChange(event) {
    this.setState({ beneficiary: { ...this.state.beneficiary, surname: event.target.value } });
  }
  
  handlePinChange(event) {
    this.setState({ beneficiary: { ...this.state.beneficiary, pin: event.target.value } });
  }

  clearAll() {
    this.setState({ beneficiary: cleanBeneficiary });
  }

  onTakePhoto(dataUri) {
    this.setState({ photo: dataUri, showCamera: false });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      show: newProps.show,
    });
  }

  render() {
    const beneficiary = this.state.beneficiary;
    return (
      <Modal show={this.state.show} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo beneficiario</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formDNI">
              <Form.Label>DNI</Form.Label>
              <Form.Control type="text" pattern="\d*" minLength="5" maxLength="8" placeholder="Ingresa el DNI" value={beneficiary.dni} onChange={this.handleDniChange} isInvalid={beneficiary.dni.length < 5} />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa el nombre" value={beneficiary.name} onChange={this.handleNameChange} isInvalid={beneficiary.name.trim().length === 0} />
            </Form.Group>
            <Form.Group controlId="formSurname">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingresa el apellido" value={beneficiary.surname} onChange={this.handleSurnameChange} isInvalid={beneficiary.surname.trim().length === 0} />
            </Form.Group>
            <Form.Group controlId="formPin">
              <Form.Label>Pin</Form.Label>
              <Form.Control type="password" minLength="4" maxLength="4" placeholder="" value={beneficiary.pin} onChange={this.handlePinChange} isInvalid={!beneficiary.id && beneficiary.pin.length !== 4} />
            </Form.Group>
            <Form.Group controlId="formFile">
              <Form.Label>DNI</Form.Label>
              <Form.Control type="file" placeholder="Ingresa el apellido" value={beneficiary.dniPicture} onChange={this.handleDniPictureChange} isInvalid={beneficiary.dniPicture.trim().length === 0} />
            </Form.Group>
            <Form.Group controlID="photoFile" style={{width: '100%'}}>
              <Form.Label>Foto</Form.Label>
              <Button onClick={() => this.setState({showCamera: true})}> Tomar foto </Button>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.close}>Cancelar</Button>
          <Button variant="primary" onClick={this.save}>Guardar</Button>
        </Modal.Footer>

        <PictureModal onTakePhoto={this.onTakePhoto} show={this.state.showCamera}/>
      </Modal>
    )
  }
}

export default NewBeneficiaryModal;