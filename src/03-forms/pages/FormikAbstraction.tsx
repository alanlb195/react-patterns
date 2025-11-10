import '../styles/styles.css'

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput, Checkbox, ItemSelector } from '../components';

export const FormikAbstraction = () => {
    return (
        <div>
            <h1>Formik FormikAbstraction</h1>

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
                    () => (
                        <Form>
                            <TextInput label="First Name" name="firstName" placeholder='First Name' />
                            <TextInput label="Last Name" name="lastName" placeholder='Last Name' />
                            <TextInput label="Email" name="email" placeholder='Email' />
                            <ItemSelector label="Job Type" name="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-sr">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </ItemSelector>
                            <Checkbox label="Terms and conditions" name="terms" />
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
