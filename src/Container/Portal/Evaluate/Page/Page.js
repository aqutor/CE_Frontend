import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Head from '../../../../Component/Header/Header'
import { Image, Button, Col, Modal, Form, Spinner, Alert, Breadcrumb } from 'react-bootstrap';
import pic_1 from '../../../../assets/library/sta.JPG'


class Group extends Component {

    state = {
                show: false,
                upload: false,
                result: null,
    }

    handleClose = () => {
        this.setState({
            show: false,
        })
    }

    handleShow = () => {
        this.setState({
            show: true,
        })
    }

    handleUpload = () => {
        if(this.state.upload){
            this.setState({
                result: (
                    <Alert variant="success">
                    <Alert.Heading>评估已完成</Alert.Heading>
                    <p>
                    评分：76
                    </p>
                    <hr />
                    <p className="mb-0">
                    此作品整体章法良好，但个别单字倾斜。
                    </p>
                  </Alert>
                   ),
                upload: false,

            }
            )
        }
        this.setState({
            upload: true,
        })
        
    }

    render(){

        let uploadstat = '上传'


        if(this.state.upload){
            uploadstat = (
            <div><Spinner
             as="span"
             animation="border"
             size="sm"
             role="status"
             aria-hidden="true"
           />
           </div>
           )

        }

        const picCenterStyle = {
            marginLeft: "auto",
            marginRight: "auto",
            display: "block"

        }



        return(
            <React.Fragment>
                <Head title="练习中心"></Head>
                <br />
                <Breadcrumb >
                    <Breadcrumb.Item href="#">楷书作品3</Breadcrumb.Item>
                    <Breadcrumb.Item active>第 3 页</Breadcrumb.Item>
                </Breadcrumb>
                
                <br />
                
                    
                        <Image src={pic_1} style={picCenterStyle} thumbnail width = '80%' onClick = {this.handleShow}  />
                    

                    <Col>
                        <Button variant="outline-primary" style = {{marginLeft:'25%', marginRight: '0.5em', marginTop: '2em'}}>上一页</Button>
                        <Button variant="outline-primary" style = {{marginTop: '2em'}}>下一页</Button>
                        <p style ={{color: 'grey', textAlign: 'center', marginTop: '2em'}}> 点击作品上传图片评估 </p>
                    </Col>
                

                <Modal size = 'lg' show = {this.state.show} onHide = {this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>上传您的作品</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.result}
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Control type="file" />
                    </Form.Group>
                        
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                            关闭
                        </Button>
                        <Button variant="primary" onClick={this.handleUpload}>
                            {uploadstat}
                        </Button>
                    </Modal.Footer>
                </Modal>



            
            </React.Fragment>
            
        )
    }
}

export default withRouter(Group);

