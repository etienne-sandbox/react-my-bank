import { UserIcon } from "./UserIcon";

export function User({ userName }) {
  return (
    <div className="User">
      <p className="User--name">{userName}</p>
      <div className="User--picture">
        <UserIcon />
      </div>
    </div>
  );
}
