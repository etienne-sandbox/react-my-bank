import { Amount } from "./Amount";

type Props = {
  date: string;
  description: string;
  amount: number;
};

export function Operation({ date, description, amount }: Props): JSX.Element {
  return (
    <div className={"Operation"}>
      <span className="Operation--date">{date}</span>
      <span className="Operation--description">{description}</span>
      <span className="Operation--amount">
        <Amount amount={amount} /> €
      </span>
    </div>
  );
}
