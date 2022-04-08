import { UserIcon } from "./UserIcon";

type Props = {
  userName: string;
};

export function User({ userName }: Props): JSX.Element {
  return (
    <div className="User">
      <p className="User--name">{userName}</p>
      <div className="User--picture">
        <UserIcon />
      </div>
    </div>
  );
}
