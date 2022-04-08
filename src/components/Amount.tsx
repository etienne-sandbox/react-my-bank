import { Fragment } from "react";

const formatter = new Intl.NumberFormat("fr-FR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

type Props = {
  amount: number;
};

export function Amount({ amount }: Props): JSX.Element {
  return <Fragment>{formatter.format(amount)}</Fragment>;
}
