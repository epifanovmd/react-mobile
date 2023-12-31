import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const InformationOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1 21.4992L2.39998 1.69922L1.09998 2.99922L4.09998 5.99922C2.79998 7.59922 1.99998 9.69922 1.99998 11.9992C1.99998 17.4992 6.49998 21.9992 12 21.9992C14.3 21.9992 16.4 21.1992 18 19.8992L20.8 22.6992L22.1 21.4992ZM12 19.9992C7.59998 19.9992 3.99998 16.3992 3.99998 11.9992C3.99998 10.2992 4.59998 8.69922 5.49998 7.39922L11 12.8992V16.9992H13V14.8992L16.6 18.4992C15.3 19.3992 13.7 19.9992 12 19.9992ZM8.19998 4.99922L6.69998 3.49922C8.29998 2.59922 10.1 1.99922 12 1.99922C17.5 1.99922 22 6.49922 22 11.9992C22 13.8992 21.4 15.6992 20.5 17.2992L19 15.7992C19.6 14.6992 20 13.3992 20 11.9992C20 7.59922 16.4 3.99922 12 3.99922C10.6 3.99922 9.29998 4.39922 8.19998 4.99922ZM11 6.99922H13V8.99922H11V6.99922Z" />
    </Svg>
  );
};
