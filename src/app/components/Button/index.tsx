import { ButtonContainer } from './style';

interface ButtonProps {
  content: string;
}

export default function Button({ content }: ButtonProps) {
  return <ButtonContainer>{content}</ButtonContainer>;
}
