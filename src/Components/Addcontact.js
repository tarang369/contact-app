import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
class Addcontact extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    }
onChange= e => this.setState({[e.target.name]: e.target.value});

    render() {
        const {name,email,phone} = this.state;
    
        return (
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="name" value={name} name="name" id="examplename" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email"  value={email} name="email" id="email" placeholder="email placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone:</Label>
                    <Input type="num" value={phone} name="phone" id="examplenumber" />
                </FormGroup>
                <Button>Submit</Button>
            </Form >
        );
    }
}

    export default Addcontact;
