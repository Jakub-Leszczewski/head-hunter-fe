interface Props {
  type: string;
  placeholder: string;
  className: string;
}

export const Input = ({type, placeholder, className}: Props) => {
  return <input className={className} type={type} placeholder={placeholder} />;
};
