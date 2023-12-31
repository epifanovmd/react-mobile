import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FaceManShimmerOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.5 1L18.41 3.41L16 4.5L18.41 5.59L19.5 8L20.6 5.59L23 4.5L20.6 3.41L19.5 1ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 10.53 21.67 9.13 21.1 7.87L19.86 10.57C19.95 11.04 20 11.5 20 12C20 16.43 16.43 20 12 20C7.57 20 4 16.43 4 12C4 11.95 4 11.91 4 11.86C5.28666 11.3788 6.46037 10.6376 7.44794 9.68273C8.43551 8.72785 9.21575 7.57974 9.74 6.31C11.61 8.61 14.44 10 17.5 10C17.94 10 18.39 9.97 18.83 9.91L17.96 8C17.81 8 17.65 8 17.5 8C14.68 8 12.1 6.5 10.66 4.12C11.1 4.05 11.54 4 12 4C12.5 4 12.96 4.05 13.42 4.13L16.13 2.91C14.87 2.33 13.47 2 12 2ZM8.09 5C7.47099 6.90837 6.15753 8.5145 4.41 9.5C5.04 7.57 6.37 6 8.09 5ZM9 11.75C8.66848 11.75 8.35054 11.8817 8.11612 12.1161C7.8817 12.3505 7.75 12.6685 7.75 13C7.75 13.3315 7.8817 13.6495 8.11612 13.8839C8.35054 14.1183 8.66848 14.25 9 14.25C9.16415 14.25 9.3267 14.2177 9.47835 14.1548C9.63001 14.092 9.76781 14 9.88388 13.8839C9.99996 13.7678 10.092 13.63 10.1548 13.4784C10.2177 13.3267 10.25 13.1642 10.25 13C10.25 12.8358 10.2177 12.6733 10.1548 12.5216C10.092 12.37 9.99996 12.2322 9.88388 12.1161C9.76781 12 9.63001 11.908 9.47835 11.8452C9.3267 11.7823 9.16415 11.75 9 11.75ZM15 11.75C14.6685 11.75 14.3505 11.8817 14.1161 12.1161C13.8817 12.3505 13.75 12.6685 13.75 13C13.75 13.3315 13.8817 13.6495 14.1161 13.8839C14.3505 14.1183 14.6685 14.25 15 14.25C15.3315 14.25 15.6495 14.1183 15.8839 13.8839C16.1183 13.6495 16.25 13.3315 16.25 13C16.25 12.6685 16.1183 12.3505 15.8839 12.1161C15.6495 11.8817 15.3315 11.75 15 11.75Z" />
    </Svg>
  );
};
