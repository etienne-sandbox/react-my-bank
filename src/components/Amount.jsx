import { Fragment } from "react";

const formatter = new Intl.NumberFormat("fr-FR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function Amount({ amount }) {
  return <Fragment>{formatter.format(amount)}</Fragment>;
}
