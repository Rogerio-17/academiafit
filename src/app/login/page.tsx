import Image from 'next/image';
import Logo from '../../../public/logo.png';
import { ImageContainer, InputConateiner, LoginContainer } from './style';

export default function Login() {
  return (
    <LoginContainer>
      <ImageContainer>
        <Image src={Logo} alt="Logo"></Image>
      </ImageContainer>
      <InputConateiner>
        <label htmlFor="">Email:</label>
        <input type="text" />
      </InputConateiner>
      <InputConateiner>
        <label htmlFor="">Senha:</label>
        <input type="text" />
      </InputConateiner>

      {/*!!!!!!!!!!!!cria o componente de botão!!!!!!!!!!!!!!!!!!!!!!*/}
    </LoginContainer>
  );
}
