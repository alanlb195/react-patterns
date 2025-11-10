import { Formik, Form } from 'formik';

import formJson from '../data/custom-form.json';
import { ItemSelector, TextInput } from '../components';
import * as Yup from 'yup';


const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Required');
    }
    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2,`Min length ${(rule as any).value || 2}`);
    }
    if (rule.type === 'email') {
      schema = schema.email('Invalid email');
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DinamicForm = () => {
  return (
    <div>
      <h1>Dinamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form noValidate>

            {formJson.map(({ label, name, placeholder, type, options }) => {

              if (type === 'input' || type === 'password' || type === 'email') {
                return <TextInput
                  key={name}
                  type={(type as any)}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                />
              } else if (type === 'select') {
                return <ItemSelector key={name} label={label} name={name}>
                  <option value="">Select an option</option>
                  {
                    options?.map(({ id, label }) => (
                      <option key={id} value={label}>{label}</option>
                    ))
                  }
                </ItemSelector>
              }

            })}

            <button type='submit'>Submit</button>

          </Form>
        )}
      </Formik>

    </div>
  )
}
