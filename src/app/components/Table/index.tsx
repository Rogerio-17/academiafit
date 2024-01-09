import { THeaderConatiner, TableConatiner } from './style';

export default function Table() {
  return (
    <TableConatiner>
      <THeaderConatiner>
        <th>Cod. aluno</th>
        <th>Nome do aluno</th>
        <th>Status do plano</th>
        <th>Valor</th>
        <th>Data de vencimento</th>
        <th>Data da matricula</th>
      </THeaderConatiner>
    </TableConatiner>
  );
}
