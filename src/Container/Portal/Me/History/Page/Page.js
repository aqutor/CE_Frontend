import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Button, Table, Modal, Spinner, Alert, Breadcrumb, Figure } from 'react-bootstrap';
import pic_1 from '../../../../../assets/library/result.jpg'


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
                    评分：80
                    </p>
                    <hr />
                    <p className="mb-0">
                    此作品整体章法良好，但个别单字倾斜，个别部首不规范。
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



        return(
            <React.Fragment>
                <br />
                <Breadcrumb >
                    <Breadcrumb.Item href="#">历史记录</Breadcrumb.Item>
                    <Breadcrumb.Item active>楷书作品4</Breadcrumb.Item>
                </Breadcrumb>
                
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>页面</th>
                        <th>次数</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>5</td>
                        </tr>
                        <tr onClick = {this.handleShow}>
                        <td>2</td>
                        <td>14</td>
                        <td>4</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>22</td>
                        <td>3</td>
                        </tr>
                    </tbody>
                    </Table>

                <Modal size = 'lg' show = {this.state.show} onHide = {this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>历史记录</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>日期</th>
                            <th>得分</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>2020/05/02</td>
                            <td>54</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>2020/05/06</td>
                            <td>74</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>2020/05/10</td>
                            <td>60</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>2020/05/14</td>
                            <td>65</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>2020/05/15</td>
                            <td>80</td>
                            </tr>
                        </tbody>
                        </Table>

                        <Figure>
                            <Figure.Image


                                src={pic_1}
                            />
                            {/* <Figure.Caption>
                                历史成绩折线图
                            </Figure.Caption> */}
                        </Figure>
                    
                        
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                            关闭
                        </Button>
                    </Modal.Footer>
                </Modal>



            
            </React.Fragment>
            
        )
    }
}

export default withRouter(Group);

