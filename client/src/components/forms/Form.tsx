/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Render Prop
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@mui/material';

export interface FieldProps {
  name: string;
  type?: string;
  label: string;
  dropdownList?: String[];
  required?: boolean;
}

export interface FormProps {
  initialValues?: any;
  formFields: FieldProps[];
  formTitle?: string;
  onSubmit?: any;
  onCancel?: any;
}

const FormComponent = ({
  initialValues = {},
  formFields,
  formTitle = 'Form',
  onSubmit,
  onCancel,
}: FormProps) => (
  <div className="form-wrapper">
    <div className="form-title">
      <h1>{formTitle}</h1>
      <i className="fa fa-close" onClick={onCancel} />
    </div>
    <Formik
      initialValues={initialValues}
      // eslint-disable-next-line no-unused-vars
      validate={(values) => {
        const errors: any = {};
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <div className="form-content">
            {formFields.map((field: any) => (
              <div className="form-field">
                {field.type === 'dropdown' ? (
                  <>
                    <label htmlFor={field.name}>
                      {field.label}
                      <span style={{ fontSize: '0.75rem', marginLeft: '5px' }}>
                        {field.required && '(Required)'}
                      </span>
                    </label>
                    <Field as="select" name={field.name} className="field">
                      {field.dropdownList.map((list: string) => (
                        <option value={list}>{list}</option>
                      ))}
                    </Field>
                    <ErrorMessage className="form-error" name={field.type} component="span" />
                  </>
                ) : (
                  <div className="form-field">
                    <label htmlFor={field.name}>
                      {field.label}
                      <span style={{ fontSize: '0.75rem', marginLeft: '5px' }}>
                        {field.required && '(Required)'}
                      </span>
                    </label>
                    <Field
                      type={field.type ?? 'text'}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="field"
                    />
                    <ErrorMessage className="form-error" name={field.type} component="span" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="form-action-wrapper">
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <Button color="error" variant="contained" onClick={onCancel} disabled={isSubmitting}>
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormComponent;
