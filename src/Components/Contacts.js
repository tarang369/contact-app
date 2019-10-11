import { Card, CardBody, CardTitle } from "reactstrap";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getContacts } from "../Actions/contactAction";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <Fragment>
        {contacts.map(contact => (
          <Card>
            <CardTitle>{contact.name}</CardTitle>
            <CardBody>
              {contact.email}
              <br />
              {contact.phone}
            </CardBody>
          </Card>
        ))}
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  contacts: state.contact.contacts
});
export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
