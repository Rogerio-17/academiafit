'use client';
import { TBodyContainer, THeaderConatiner, TableConatiner } from './style';
import { CalcMaturity, FormateDate, priceFormater } from '../../utils/fomatter';

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
          const date: string = String(aluno.created);
          return (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.name}</td>
              <td>{aluno.status}</td>
              <td>{priceFormater.format(String(aluno.valor / 100))}</td>
              <td>{FormateDate(CalcMaturity(date))}</td>
              <td>{FormateDate(aluno.created)}</td>
            </tr>
          );
        })}
      </TBodyContainer>
    </TableConatiner>
  );
}
