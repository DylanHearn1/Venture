import './button.module.scss';

interface Props {
  text: string;
  click?: () => void;
  active?: string;
  size?: string;
}

const Button = (props: Props) => {
  return (
    <button onClick={() => onclick} style={{ fontSize: `${props.size}` }}>
      {props.text}
    </button>
  );
};

export default Button;
