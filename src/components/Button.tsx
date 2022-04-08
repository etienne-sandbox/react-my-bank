type Props = {
  children: React.ReactNode;
};

export function Button({ children }: Props): JSX.Element {
  return <button className="Button">{children}</button>;
}
