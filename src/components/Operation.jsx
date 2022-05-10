import { Amount } from "./Amount";

export function Operation({ date, description, amount, selected }) {
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
