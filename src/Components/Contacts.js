import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getContacts } from "../Actions/contactAction";
import Contact from "./Contact";


class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <Fragment>
        <button onClick={()=>{
          this.props.history.push('/Add')
        }}>ADD</button>
        {contacts.map(contact => (
          <Contact contact={contact}/>
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
