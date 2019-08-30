//Start imports
import React from "react";
import { Form, Field, reduxForm } from "redux-form";
import { Label, Input, Button } from "semantic-ui-react";

/**
 * BlogForm is a class-based component that displays the form to create/edit blogs
 **/
class BlogForm extends React.Component {
  /**
   * renderError renders the changes to the component if there is an error in the form
   **/
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  /**
   * renderInput defines a general input section of a form, containing an error
   * field, label, and an input
   **/
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <form className={className}>
        <Label basic inverted>
          {label}
        </Label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </form>
    );
  };

  /*
    onSubmit handles the submission of the form to the onSubmit function from reduxForm
   */
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  /**
   * render returns the layout of the form, filled with default values if they exist
   **/
  render() {
    return (
      <Form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" label="Enter Title:" component={this.renderInput} />
        <Field
          name="description"
          label="Enter Description:"
          component={this.renderInput}
        />
        <Button inverted basic>
          Submit
        </Button>
      </Form>
    );
  }
}

/**
 * validate checks the form for errors and displays the appropriate error message
 **/
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

/**
 * export this component and hook it up to the reduxForm, with the validate function
 **/
export default reduxForm({
  form: "blogForm",
  validate
})(BlogForm);
