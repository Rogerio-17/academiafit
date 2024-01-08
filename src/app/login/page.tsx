'use client';

import Image from 'next/image';
import Logo from '../../../public/logo.png';
import { ImageContainer, InputConateiner, LoginContainer } from './style';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginForm = zod.object({
  login: zod.object({
    email: zod
      .string()
      .min(1, { message: 'Campo obrigatório.' })
      .email('Email informado não é válido.'),
    password: zod.string().min(6, { message: 'Senha menor que o permitido.' })
  })
});

type FormProps = zod.infer<typeof loginForm>;

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    resolver: zodResolver(loginForm),
    defaultValues: {
      login: {
        email: '',
        password: ''
      }
    }
  });

  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  };

  console.log(errors.login?.email?.message);

  return (
    <LoginContainer onSubmit={handleSubmit(handleFormSubmit)}>
      <ImageContainer>
        <Image src={Logo} alt="Logo"></Image>
      </ImageContainer>
      <InputConateiner>
        <label htmlFor="">Email:</label>
        <input
          {...register('login.email')}
          type="text"
          placeholder="rogeryfit@gmail.com"
        />
        {errors.login?.email?.message && <p>{errors.login?.email?.message}</p>}
      </InputConateiner>
      <InputConateiner>
        <label htmlFor="">Senha:</label>
        <input
          {...register('login.password')}
          type="text"
          placeholder="**********"
        />
        {errors.login?.password?.message && (
          <p>{errors.login?.password?.message}</p>
        )}
      </InputConateiner>

      <Button content="Logar"></Button>
    </LoginContainer>
  );
}
