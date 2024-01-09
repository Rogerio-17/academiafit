'use client';
import { TBodyContainer, THeaderConatiner, TableConatiner } from './style';

interface TableProps {
  Theader: {
    campo3: string;
    campo4: string;
    campo5: string;
    campo6: string;
  };
  alunos: {
    id: number;
    name: string;
    status: string;
    valor: string;
    created: string;
  }[];
}

export default function Table({ Theader, alunos }: TableProps) {
  return (
    <TableConatiner>
      <THeaderConatiner>
        <th>Cod. Aluno</th>
        <th>Nome</th>
        <th>{Theader.campo3}</th>
        <th>{Theader.campo4}</th>
        <th>{Theader.campo5}</th>
        <th>{Theader.campo6}</th>
      </THeaderConatiner>

      <TBodyContainer>
        {alunos.map((aluno) => {
          return (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.name}</td>
              <td>{aluno.status}</td>
              <td>{aluno.valor}</td>
              <td>{aluno.created}</td>
              <td>{aluno.created}</td>
            </tr>
          );
        })}
      </TBodyContainer>
    </TableConatiner>
  );
}
