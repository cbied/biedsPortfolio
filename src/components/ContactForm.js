import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/835f6600-a071-11ee-9a19-ad506cf33f4e"; 

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <Fragment className="col-xl-6 w-100">
        <h3 className="row center mx-auto my-5 w-25">Thank you!</h3>
        <h4 className="row center mx-auto my-5 w-25">I'll get back to you as soon as I can!</h4>
      </Fragment>
    );
  }

 

  return (
    <section id="contact" className="pb-5">
    <Form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      className="col-md-8 mx-auto"
    >
      <div className="row center mx-auto my-5 w-50">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Your name"
          name="name"
          className="inputs focus:outline-none focus:ring px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
        </InputGroup>
      </div>
      <div className="row center mx-auto my-5 w-50">
      <InputGroup>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          className="inputs focus:outline-none focus:ring px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
        </InputGroup>
      </div>
      <div className="row center mx-auto my-5 w-75">
      <InputGroup>
        <Form.Control
          as="textarea"
          placeholder="Your message"
          name="message"
          className="textarea focus:outline-none focus:ring px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
    </InputGroup>
      </div>
      <div className="row center mx-auto my-5 ">
        <Button
          size="lg"
          variant="outline-dark"
          type="submit"
        >
          Send a message
        </Button>
      </div>
    </Form>
    </section>
  );
};

export default ContactForm;