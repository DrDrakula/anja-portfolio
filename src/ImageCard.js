import React, { Component } from 'react'
import { Image as BootstrapImage, Col, Modal, Carousel } from 'react-bootstrap'

class ImageCard extends Component {

    state = {
        visable: false,
        activeIndex: this.props.activeIndex
    }

    handleShow = () => this.setState({visable: true})
    handleHide = () => this.setState({visable: false})

    handleSelect = (selectedIndex, e) => {
        if(e === "prev"){
            if(this.state.activeIndex === 0){
                this.setState({activeIndex: this.props.images.length - 1})
            }else{
                this.setState({activeIndex: this.state.activeIndex - 1})
            }
        } else if(e === "next") {
            if(this.state.activeIndex === this.props.images.length - 1){
                this.setState({activeIndex: 0})
            }else{
                this.setState({activeIndex: this.state.activeIndex + 1})
            }
        }
    }

    render(){
        return (
            <Col sm="8" md="4" className="image">
                <div onClick={this.handleShow}>
                    <BootstrapImage width="300" src={require(`${this.props.imagePath}`)} alt="Image" rounded/>
                </div>
                <Modal id="image-modal" centered={true} show={this.state.visable} onHide={this.handleHide}>
                    <Modal.Body style={{padding:"0"}}>
                        <Carousel activeIndex={this.state.activeIndex} onSelect={this.handleSelect}>
                            {this.props.images.map((image, index) => {
                                return (
                                    <Carousel.Item>
                                        <img src={require(`${image.imagePath}`)} id="carousel-img" alt={index} />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </Modal.Body>
                </Modal>
            </Col>
        )
    }
}

export default ImageCard