import React, { Component } from 'react'
import InputField from './Form/InputField'
import InputTextArea from './Form/InputTextArea'

/**
 * @name CertificateForm
 * @param {function} onSubmit - submit the form with the values.
 */

class CertificateForm extends Component {
  state = {
    message: '',
    recepient: '',
    sender: '',
  }

  handleRecepientChange = event => {
    this.setState({ recepient: event.target.value })
  }

  handleSenderChange = event => {
    this.setState({ sender: event.target.value })
  }

  handleMessageChange = event => {
    this.setState({ message: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(event)
  }

  render() {
    const { recepient, sender, message } = this.state
    const {
      handleRecepientChange,
      handleSenderChange,
      handleMessageChange,
      handleFormSubmit,
    } = this
    return (
      <form onSubmit={handleFormSubmit}>
        <InputField
          name="certficate-recepient"
          labelText="To"
          value={recepient}
          onChange={handleRecepientChange}
        />
        <InputField
          name="certificate-sender"
          labelText="From"
          value={sender}
          onChange={handleSenderChange}
        />
        <InputTextArea
          name="certificate-message"
          labelText="Message"
          value={message}
          onChange={handleMessageChange}
        />
        <button className="button" type="submit">
          See Preview
        </button>
      </form>
    )
  }
}

export default CertificateForm
