interface Props {
  type: any;
  children: string;
}

export const Button = ({type, children}: Props) => {
  return <button type={type}>{children}</button>;
};
