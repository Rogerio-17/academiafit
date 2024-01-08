'use client';
import Button from './components/Button';
import Header from './components/Header';
import { FormContainer, MainContainer } from './style';

export default function Home() {
  return (
    <div>
      <Header></Header>

      <MainContainer>
        <FormContainer>
          <div>
            <select name="filtros" id="">
              <option value="name">Filtrar</option>
              <option value="name">Nome</option>
              <option value="codigo">Codigo</option>
            </select>
            <input type="text" />
          </div>
          <Button content="Buscar"></Button>
        </FormContainer>
      </MainContainer>
    </div>
  );
}
