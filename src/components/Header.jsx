import { User } from "./User";

export function Header({ userName }) {
  return (
    <header className="Header">
      <div className="Header--center">
        <h1>My Bank</h1>
        <div style={{ flex: 1 }} />
        <User userName={userName} />
      </div>
    </header>
  );
}
