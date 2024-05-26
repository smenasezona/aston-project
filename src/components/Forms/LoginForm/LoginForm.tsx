import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { useLanguage } from '../../../i18n/LanguageContext'
import { loginUser } from '../../../store/actions/authActions'
import { AppDispatch } from '../../../store/store'
import { LoginFormData } from '../../../types/formTypes'
import ButtonMUI from '../../ui/Button/ButtonMUI'
import InputMUI from '../../ui/Input/InputMUI'

const schema = yup.object().shape({
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
})

function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: yupResolver(schema),
	})

	const { t } = useLanguage()

	const dispatch = useDispatch<AppDispatch>()

	const submit: SubmitHandler<LoginFormData> = data => {
		dispatch(loginUser(data.username, data.password))
		console.log('Отправленные данные:', data)
	}

	const error: SubmitErrorHandler<FormData> = data => {
		console.log(data)
	}

	return (
		<>
			<form onSubmit={handleSubmit(submit, error)}>
				<h2>{t('login')}</h2>
				<div>
					<label htmlFor='username'>{t('username')}</label>
					<InputMUI type='text' id='username' placeholder={t('username')} {...register('username')} />
					{errors.username && <div style={{ color: 'red', fontSize: '1rem' }}>{errors.username.message}</div>}
				</div>
				<div>
					<label htmlFor='password'>{t('password')}</label>
					<InputMUI type='password' id='password' placeholder={t('password')} {...register('password')} />
					{errors.password && <div style={{ color: 'red', fontSize: '1rem' }}>{errors.password.message}</div>}
				</div>
				<ButtonMUI type='submit'>{t('login')}</ButtonMUI>
			</form>
		</>
	)
}

export default LoginForm
