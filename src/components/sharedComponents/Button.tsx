import './button.module.scss';

interface Props {
  text: string;
  click?: () => void;
}

const Button = (props: Props) => {
  return <button onClick={() => onclick}>{props.text}</button>;
};

export default Button;
