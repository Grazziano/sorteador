import './Card.css';

interface IProps {
  children: React.ReactNode;
}

function Card({ children }: IProps) {
  return <div className="card">{children}</div>;
}

export default Card;
