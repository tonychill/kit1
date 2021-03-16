import { FC } from "react";
interface GoBackProps {
  height?: number;
  width?: number;
  strokeWidth?: number;
}

const GoBackIcon: FC<GoBackProps> = ({ height = 18.017, width = 10.699 }) => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 10.699 18.017">
        <g transform="translate(7.003 5.657) rotate(90)">
          <g transform="translate(-4.041 -3.502) rotate(45)" fill="#000345" stroke="#000345" strokeWidth={1}>
            <rect width="12.571" height="2.286" rx="1.143" stroke="none" />
            <rect x="0.5" y="0.5" width="11.571" height="1.286" rx="0.643" fill="none" />
          </g>
          <g transform="translate(12.36 -2.08) rotate(135)" fill="#000345" stroke="#000345" strokeWidth={1}>
            <rect width="12.845" height="2.286" rx="1.143" stroke="none" />
            <rect x="0.5" y="0.5" width="11.845" height="1.286" rx="0.643" fill="none" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default GoBackIcon;
