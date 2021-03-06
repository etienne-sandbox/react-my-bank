import { Operation } from "./Operation";
import { Button } from "./Button";
import { Amount } from "./Amount";

export function Account({ color, name, balance, operations, selected }) {
  return (
    <div className="Account">
      <div className="Account--header" style={{ background: color }}>
        <span className="Account--name">{name}</span>
        <span className="Account--balance">
          <Amount amount={balance} />
          <span className="Account-eur">€</span>
        </span>
      </div>
      <div className="Account--operations">
        {operations.map((operation) => (
          <Operation
            key={operation.id}
            date={operation.date}
            description={operation.description}
            amount={operation.amount}
            selected={operation.id === selected}
          />
        ))}
      </div>
      <div className="Account--footer">
        <Button>See more</Button>
      </div>
    </div>
  );
}
