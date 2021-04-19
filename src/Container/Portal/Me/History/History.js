import { withRouter, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Table, Button, Modal, Alert } from 'react-bootstrap';
import Head from '../../../../Component/Header/Header'

class Group extends Component {

    state = {
        show: false
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
    

    render(){

        const topMarginStyle = {
           marginTop: "2em"     
        }

        const topMarginStyle2 = {
            marginTop: "40%"     
         }


        return(
            <React.Fragment>
                <Head title='历史记录' ></Head>
                <Table striped bordered hover style = {topMarginStyle}>
                        <thead>
                            <tr>
                            <th>作品页面</th>
                            <th>日期</th>
                            <th>得分</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>楷书-第 3 页</td>
                            <td>2020/05/05</td>
                            <td>76</td>
                            </tr>
                            <tr onClick = {this.handleShow}>
                            <td>楷书-第 3 页</td>
                            <td>2020/05/04</td>
                            <td>64</td>
                            </tr>
                            <tr>
                            <td>楷书-第 3 页</td>
                            <td>2020/05/02</td>
                            <td>54</td>
                            </tr>
                            <tr>
                            <td>楷书-第 2 页</td>
                            <td>2020/05/06</td>
                            <td>74</td>
                            </tr>
                            <tr>
                            <td>楷书-第 1 页</td>
                            <td>2020/05/10</td>
                            <td>60</td>
                            </tr>
                            <tr>
                            <td>隶书-第 5 页</td>
                            <td>2020/05/14</td>
                            <td>65</td>
                            </tr>
                            <tr>
                            <td>楷书-第 1 页</td>
                            <td>2020/05/15</td>
                            <td>80</td>
                            </tr>
                        </tbody>
                        </Table>

                        <Modal size = 'lg' show = {this.state.show} onHide = {this.handleClose} style = {topMarginStyle2}>
                    <Modal.Header closeButton>
                        <Modal.Title>历史记录</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Alert variant="success">
                    <Alert.Heading>楷书-第 3 页</Alert.Heading>
                    <p>
                    评分：64
                    </p>
                    <hr />
                    <p className="mb-0">
                    此作品整体章法良好，但个别单字倾斜，个别部首不规范。
                    </p>
                  </Alert>
                    
                        
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

