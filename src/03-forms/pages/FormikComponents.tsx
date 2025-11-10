import '../styles/styles.css'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Should have 15 characters')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(15, 'Should have 15 characters')
                        .required('Required'),
                    email: Yup.string()
                        .email('Email format invalid')
                        .required('Required'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Should accept conditions')
                        .required('Required'),
                    jobType: Yup.string()
                        .notOneOf(['it-jr'], 'Invalid option')
                        .required('Required'),
                })}
            >
                {
                    (formik) => (
                        <Form>

                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" placeholder="First name" />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="span" />

                            <label htmlFor="email">Email Address</label>
                            <Field name="email" type="text" />
                            <ErrorMessage name="email" component="span" />


                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-sr">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />

                            <label>
                                <Field name="terms" type="checkbox" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span" />

                            <button type='submit'>Submit</button>

                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
