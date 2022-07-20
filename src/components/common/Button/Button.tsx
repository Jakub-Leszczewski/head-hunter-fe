interface Props {
  type: any;
  children: string;
  className: string;
}

export const Button = ({type, children, className}: Props) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
