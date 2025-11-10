import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const { onChange, resetForm, ...formData } = useForm({
        name: 'alan lopez',
        email: 'alanlb196@gmail.com',
        password1: '123456',
        password2: '123456',
    });

    const { email, name, password1, password2 } = formData;

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form onSubmit={onSubmit}>
                <input type="text" name='name' placeholder='Name' value={name} onChange={onChange} />
                <input type="text" name='email' placeholder='Email' value={email} onChange={onChange} />
                <input type="password" name='password1' placeholder='Password' value={password1} onChange={onChange} />
                <input type="password" name='password2' placeholder='Repeat password' value={password2} onChange={onChange} />

                <button type="submit">Create</button>
                <button onClick={resetForm}>Reset</button>
            </form>
        </div>
    )
}
