'use client';
import Button from './components/Button';
import Header from './components/Header';
import Table from './components/Table';
import { FormContainer, MainContainer } from './style';

export default function Home() {
  const tableHeader = {
    campo3: 'Status',
    campo4: 'Valor do plano',
    campo5: 'Data vencimento',
    campo6: 'Data de matricula'
  };

  const alunos = [
    {
      id: 1,
      name: 'Rogerio Jose',
      status: 'Ativo',
      valor: '4500',
      created: 'Wed Jan 10 2024 21:08:58 GMT-0300'
    },

    {
      id: 2,
      name: 'Jennyfer',
      status: 'Cancelado',
      valor: '8500',
      created: 'Wed Jan 10 2024 21:08:58 GMT-0300'
    }
  ];
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

        <Table Theader={tableHeader} alunos={alunos}></Table>
      </MainContainer>
    </div>
  );
}
