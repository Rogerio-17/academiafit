import Image from 'next/image';
import logo from '../../../../public/logo.png';
import { HeaderContainer } from './login';
import Link from 'next/link';

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} alt=""></Image>

      <div>
        <Link href="">Monitorar planos</Link>
        <Link href="">Frequencia</Link>
        <Link href="">Alunos</Link>
      </div>
    </HeaderContainer>
  );
}
