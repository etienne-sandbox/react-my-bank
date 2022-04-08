import { Amount } from "./Amount";

type Props = {
  date: string;
  description: string;
  amount: number;
  selected: boolean;
};

export function Operation({
  date,
  description,
  amount,
  selected,
}: Props): JSX.Element {
  return (
    <div className={"Operation" + (selected ? " Operation--selected" : "")}>
      <span className="Operation--date">{date}</span>
      <span className="Operation--description">{description}</span>
      <span className="Operation--amount">
        <Amount amount={amount} /> €
      </span>
    </div>
  );
}
