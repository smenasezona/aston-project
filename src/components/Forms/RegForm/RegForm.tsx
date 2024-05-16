import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { registerUser } from '../../../store/actions/authActions'
import { AppDispatch } from '../../../store/store'
import ButtonMUI from '../../ui/Button/ButtonMUI'
import InputMUI from '../../ui/Input/InputMUI'

type FormData = {
	username: string
	email: string
	password: string
}

const schema = yup.object().shape({
	username: yup.string().required('Username is required'),
	email: yup.string().email('Invalid email').required('Email is required'),
	password: yup
		.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters'),
})

function RegForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	})

	const dispatch = useDispatch<AppDispatch>()

	const submit: SubmitHandler<FormData> = data => {
		dispatch(registerUser(data.username, data.email, data.password))
		console.log('Отправленные данные:', data)
	}

	const error: SubmitErrorHandler<FormData> = data => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(submit, error)}>
			<h2>Регистрация</h2>
			<div>
				<label htmlFor='username'>Имя пользователя:</label>
				<InputMUI
					type='text'
					id='username'
					placeholder='Имя пользователя'
					{...register('username')}
				/>
				{errors.username && (
					<div style={{ color: 'red', fontSize: '1rem' }}>
						{errors.username.message}
					</div>
				)}
			</div>
			<div>
				<label htmlFor='email'>Email:</label>
				<InputMUI
					type='text'
					id='email'
					placeholder='Почта'
					{...register('email')}
				/>
				{errors.email && (
					<div style={{ color: 'red', fontSize: '1rem' }}>
						{errors.email.message}
					</div>
				)}
			</div>
			<div>
				<label htmlFor='password'>Пароль:</label>
				<InputMUI
					type='password'
					id='password'
					placeholder='Пароль'
					{...register('password')}
				/>
				{errors.password && (
					<div style={{ color: 'red', fontSize: '1rem' }}>
						{errors.password.message}
					</div>
				)}
			</div>
			<ButtonMUI type='submit'>Зарегистрироваться</ButtonMUI>
		</form>
	)
}

export default RegForm
