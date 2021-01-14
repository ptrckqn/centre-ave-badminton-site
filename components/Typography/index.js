const Typography = ({ component = 'div', gutterBottom, className, children }) => {
  const Component = component;

  let classes = CLASSES[component];

  return <Component className={`${classes} ${gutterBottom ? 'mb-6' : ''} ${className ? className : ''} `}>{children}</Component>;
};

export default Typography;

const CLASSES = {
  h1: 'font-bold text-5xl xl:text-5xl tracking-wide leading-tight',
  h2: 'font-bold text-3xl xl:text-4xl',
  h3: 'font-bold text-lg xl:text-3xl tracking-wide',
  h4: 'font-bold text-lg xl:text-2xl tracking-wide',
  h5: 'font-bold text-base xl:text-lg tracking-wide',
  h6: 'font-bold text-base tracking-wide',
  p: 'font-medium text-base',
  div: 'font-medium',
  span: 'font-medium',
};
