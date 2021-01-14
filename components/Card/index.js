const Card = ({ className = '', children }) => {
  return <div className={`p-6 bg-blue-light inline-block rounded ${className}`}>{children}</div>;
};

export default Card;
