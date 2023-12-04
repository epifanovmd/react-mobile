import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileKeyOutlineIcon: FC<FlexSvgProps> = ({
  height = 24,
  width = 24,
  scale,
  opacity,
  translateY,
  translateX,
  color = '#ffffff',
  fontSize,
  fontFamily,
  fontStyle,
  fontWeight,
  letterSpacing,
  ...rest
}) => {
  const { style, ownProps } = useFlexProps(rest);

  return (
    <Svg
      viewBox="0 0 24 24"
      height={height}
      width={width}
      scale={scale}
      opacity={opacity}
      translateY={translateY}
      translateX={translateX}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      style={style}
      {...ownProps}
      fill={ownProps?.fill || color || '#ffffff'}
    >
      <Path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM12.83 15C12.5941 14.3328 12.1299 13.7704 11.5195 13.4124C10.9091 13.0543 10.1918 12.9235 9.49427 13.0432C8.79677 13.1629 8.16404 13.5253 7.70789 14.0663C7.25175 14.6074 7.00157 15.2923 7.00157 16C7.00157 16.7077 7.25175 17.3926 7.70789 17.9337C8.16404 18.4747 8.79677 18.8371 9.49427 18.9568C10.1918 19.0765 10.9091 18.9457 11.5195 18.5876C12.1299 18.2296 12.5941 17.6672 12.83 17H14V19H16V17H17V15H12.83ZM10 17C9.80222 17 9.60888 16.9414 9.44443 16.8315C9.27998 16.7216 9.15181 16.5654 9.07612 16.3827C9.00043 16.2 8.98063 15.9989 9.01921 15.8049C9.0578 15.6109 9.15304 15.4327 9.29289 15.2929C9.43275 15.153 9.61093 15.0578 9.80491 15.0192C9.99889 14.9806 10.2 15.0004 10.3827 15.0761C10.5654 15.1518 10.7216 15.28 10.8315 15.4444C10.9414 15.6089 11 15.8022 11 16C11 16.2652 10.8946 16.5196 10.7071 16.7071C10.5196 16.8946 10.2652 17 10 17Z" />
    </Svg>
  );
};
