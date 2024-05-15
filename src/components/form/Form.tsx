import React, { useState, ChangeEvent, FormEvent } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import InputMUI from '../ui/input/InputMUI';
import ButtonMUI from '../ui/button/ButtonMUI';


interface FormData {
  username: string;
  email: string;
  password: string;
}

function Form(){
  const {register,handleSubmit,formState: {errors}} = useForm<FormData>();

  const submit: SubmitHandler<FormData> = data => {
    console.log('Отправленные данные:', data);
  }

  const error: SubmitErrorHandler<FormData> = data => {
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(submit,error)}>
      <h2>Регистрация</h2>
      <div>
        <label htmlFor="username">Имя пользователя:</label>
        <InputMUI
          type="text"
          id="username"
          placeholder = 'Имя пользователя'
          {...register('username',{required:true})}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <InputMUI
          type="email"
          id="email"
          placeholder = 'Почта'
          {...register('email',{required:true})}
        />
      </div>
      <div>
        <label htmlFor="password">Пароль:</label>
        <InputMUI
          type="password"
          id="password"
          placeholder = 'Пароль'
          {...register('password',{required:true})}
        />
      </div>
      <ButtonMUI type='submit'>Зарегистрироваться</ButtonMUI>
    </form>
  );
}

export default Form;