const Button = ({ color = 'blue', onClick, className = '', children }) => {
  const classes = CLASSES[color];
  return (
    <button onCLick={onClick} className={`w-max font-bold rounded-sm flex items-center px-4 py-2 ${classes} ${className}`}>
      {children}

      <svg width="13" height="15" viewBox="0 0 13 23" className="ml-2 stroke-current" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1" fill="white">
          <path d="M12.0347 10.6462L1.50989 0.278573C1.16452 -0.0928577 0.604399 -0.0928577 0.259028 0.278573C-0.0863427 0.649975 -0.0863427 1.25262 0.259028 1.62405L10.1493 11.3673L0.259904 21.1105C-0.0854667 21.482 -0.0854667 22.0846 0.259904 22.456C0.605275 22.8274 1.16539 22.8274 1.51074 22.456L12.0356 12.0884C12.2197 11.8904 12.2986 11.6279 12.2863 11.3683C12.2977 11.1077 12.2188 10.8452 12.0347 10.6462Z" />
        </mask>
        <path d="M12.0347 10.6462L1.50989 0.278573C1.16452 -0.0928577 0.604399 -0.0928577 0.259028 0.278573C-0.0863427 0.649975 -0.0863427 1.25262 0.259028 1.62405L10.1493 11.3673L0.259904 21.1105C-0.0854667 21.482 -0.0854667 22.0846 0.259904 22.456C0.605275 22.8274 1.16539 22.8274 1.51074 22.456L12.0356 12.0884C12.2197 11.8904 12.2986 11.6279 12.2863 11.3683C12.2977 11.1077 12.2188 10.8452 12.0347 10.6462Z" />
        <path
          d="M12.0347 10.6462L85.4305 -57.2733L83.8594 -58.9711L82.2115 -60.5944L12.0347 10.6462ZM1.50989 0.278573L-71.7232 68.3735L-70.2295 69.9799L-68.6668 71.5192L1.50989 0.278573ZM0.259028 0.278573L73.4895 68.3763L73.4921 68.3735L0.259028 0.278573ZM0.259028 1.62405L-72.974 69.719L-71.4816 71.324L-69.9204 72.862L0.259028 1.62405ZM10.1493 11.3673L80.3317 82.6023L152.638 11.3643L80.3287 -59.8707L10.1493 11.3673ZM0.259904 21.1105L-69.9225 -50.1245L-71.4822 -48.5878L-72.9732 -46.9844L0.259904 21.1105ZM1.51074 22.456L-68.6659 -48.7847L-70.2286 -47.2453L-71.7223 -45.6389L1.51074 22.456ZM12.0356 12.0884L82.2122 83.3291L83.778 81.7867L85.2744 80.177L12.0356 12.0884ZM12.2863 11.3683L-87.6174 6.98025L-87.8177 11.54L-87.6017 16.099L12.2863 11.3683ZM82.2115 -60.5944L71.6866 -70.962L-68.6668 71.5192L-58.142 81.8868L82.2115 -60.5944ZM74.743 -67.8164C34.8422 -110.728 -33.0732 -110.728 -72.974 -67.8164L73.4921 68.3735C34.282 110.542 -32.5131 110.542 -71.7232 68.3735L74.743 -67.8164ZM-72.9714 -67.8192C-109.011 -29.0633 -109.007 30.9668 -72.974 69.719L73.4921 -66.4709C108.835 -28.4616 108.838 30.3632 73.4895 68.3763L-72.9714 -67.8192ZM-69.9204 72.862L-60.0301 82.6053L80.3287 -59.8707L70.4384 -69.614L-69.9204 72.862ZM-60.0332 -59.8677L-69.9225 -50.1245L70.4423 92.3455L80.3317 82.6023L-60.0332 -59.8677ZM-72.9732 -46.9844C-109.006 -8.23224 -109.01 51.7979 -72.9705 90.5538L73.4903 -45.6417C108.839 -7.62866 108.835 51.1962 73.493 89.2055L-72.9732 -46.9844ZM-72.9705 90.5538C-33.0717 133.46 34.8415 133.464 74.7438 90.5509L-71.7223 -45.6389C-32.5107 -87.8092 34.2822 -87.805 73.4903 -45.6417L-72.9705 90.5538ZM71.6874 93.6967L82.2122 83.3291L-58.141 -59.1524L-68.6659 -48.7847L71.6874 93.6967ZM85.2744 80.177C106.362 57.494 113.267 29.716 112.174 6.63748L-87.6017 16.099C-88.6702 -6.46034 -81.923 -33.7133 -61.2033 -56.0003L85.2744 80.177ZM112.19 15.7563C113.193 -7.07576 106.361 -34.6551 85.4305 -57.2733L-61.3611 78.5657C-81.9233 56.3455 -88.5973 29.2911 -87.6174 6.98025L112.19 15.7563Z"
          mask="url(#path-1-inside-1)"
        />
      </svg>
    </button>
  );
};

export default Button;

const CLASSES = {
  blue: 'text-white bg-blue-dark',
  white: 'text-blue-dark bg-white',
};