import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormTextboxPasswordIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 7H22V17H17V19C17 19.2652 17.1054 19.5196 17.2929 19.7071C17.4804 19.8946 17.7348 20 18 20H20V22H17.5C16.95 22 16 21.55 16 21C16 21.55 15.05 22 14.5 22H12V20H14C14.2652 20 14.5196 19.8946 14.7071 19.7071C14.8946 19.5196 15 19.2652 15 19V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4H12V2H14.5C15.05 2 16 2.45 16 3C16 2.45 16.95 2 17.5 2H20V4H18C17.7348 4 17.4804 4.10536 17.2929 4.29289C17.1054 4.48043 17 4.73478 17 5V7ZM2 7H13V9H4V15H13V17H2V7ZM20 15V9H17V15H20ZM8.5 12C8.5 11.6022 8.34196 11.2206 8.06066 10.9393C7.77936 10.658 7.39782 10.5 7 10.5C6.60218 10.5 6.22064 10.658 5.93934 10.9393C5.65804 11.2206 5.5 11.6022 5.5 12C5.5 12.3978 5.65804 12.7794 5.93934 13.0607C6.22064 13.342 6.60218 13.5 7 13.5C7.39782 13.5 7.77936 13.342 8.06066 13.0607C8.34196 12.7794 8.5 12.3978 8.5 12ZM13 10.89C12.39 10.33 11.44 10.38 10.88 11C10.32 11.6 10.37 12.55 11 13.11C11.55 13.63 12.43 13.63 13 13.11V10.89Z" />
    </Svg>
  );
};
