import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Contact extends Component {
    render() {
        const { name, email, phone } = this.props.contact
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardSubtitle>{email}</CardSubtitle>
                        <CardText>{phone}</CardText>
                        <Button className='float-right ml-1'>Edit</Button>
                        <Button className='float-right'>Del</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Contact;