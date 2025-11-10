import { Form, Formik } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';
import { TextInput } from '../components';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'Min 2 characters')
                        .max(15, 'Max 15 characters')
                        .required('Required'),
                    email: Yup.string()
                        .email('Email format invalid')
                        .required('Required'),
                    password1: Yup.string()
                        .min(6, 'Min 6 characters')
                        .required('Required'),
                    password2: Yup.string()
                        .oneOf([Yup.ref('password1')], 'Passwords does not match')
                        .required('Required'),
                })}
            >
                { ({ handleReset }) => (

                    <Form>
                        <TextInput label='Name' placeholder='Name' name='name'/>
                        <TextInput label='Email' placeholder='Email' name='email'/>
                        <TextInput label='Password' type='password' name='password1'/>
                        <TextInput label='Repeat Password' type='password' name='password2'/>
                        <button type="submit">Create</button>
                        <button onClick={handleReset}>Reset</button>
                    </Form>

                )}
            </Formik>
        </div>
    )
}
