export const Arrow = ({ color }: { color: string }) => {
  return (
    <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M28 0H0v28h28z" />
        <g stroke={color} strokeWidth="1.8">
          <path d="M22 14H6M14 6l8 8-8 8" />
        </g>
      </g>
    </svg>
  );
};

export const DesktopArrow = ({ color }: { color: string }) => {
  return (
    <svg viewBox="0 0 44 28" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M44 0H0v28h44z" />
        <g stroke={color} strokeWidth="1.8">
          <path d="m38 13.876-30.5.252M30 5.947l8 7.93-8 7.928" />
        </g>
      </g>
    </svg>
  );
};
