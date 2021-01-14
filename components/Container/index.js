const Container = ({ color, children }) => {
  return (
    <div className={color}>
      <div className="container mx-auto max-w-screen-xl relative py-24">{children}</div>
    </div>
  );
};

export default Container;
