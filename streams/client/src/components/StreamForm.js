import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './StreamForm.module.scss';

class StreamForm extends React.Component {
  // RENDER ERROR
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div>
          <div className={styles.ErrorMessageStyle}>{error}</div>
        </div>
      );
    }
  }

  //RENDER INPUT
  renderInput = ({ input, label, type, meta }) => {
    // console.log(meta);
    return (
      <div>
        <label>{label}</label>
        <br />
        <input
          {...input}
          autoComplete="off"
          type={type}
          className={`
          ${styles.inputStyle} ${
            meta.touched && meta.error && styles.errorStyle
          }`}
        />
        {/* validate pass component and show from meta */}
        {/* <div>{meta.touched && meta.error}</div> */}
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onCustomSubmit = (formValue) => {
    //this function is get from parents component
    this.props.onSubmit(formValue);
  };

  render() {
    //function handlSubmit from form-redux
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onCustomSubmit)}>
        <div>
          <Field
            name="title"
            component={this.renderInput}
            type="text"
            label="Title"
          />
        </div>
        <div>
          <Field
            name="description"
            component={this.renderInput}
            type="text"
            label="Description"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const validate = (value) => {
  const errors = {};

  if (!value.title) {
    errors.title = 'You must enter a title';
  }

  if (!value.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate: validate,
})(StreamForm);
