import { intlFormat, addMonths } from 'date-fns';

export function CalcMaturity(date: Date) {
  return addMonths(date, 1);
}

export function FormateDate(date: string) {
  return intlFormat(date, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
}

export const priceFormater = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});
