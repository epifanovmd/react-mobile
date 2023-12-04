import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmoticonSickOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.31993 10.56L8.37993 9.5L7.31993 8.44L8.37993 7.38L10.4999 9.5L8.37993 11.62L7.31993 10.56ZM4.49993 9C4.52993 9 4.54993 9 4.57993 9C5.76993 6.07 8.63993 4 11.9999 4C14.1899 4 16.1599 4.88 17.6099 6.3C17.7599 5.7 18.0599 5 18.4199 4.34C16.6799 2.88 14.4399 2 11.9999 2C7.10993 2 3.04993 5.5 2.17993 10.14C2.73993 9.44 3.58993 9 4.49993 9ZM20.9999 10.5C20.5799 10.5 20.1799 10.41 19.8099 10.28C19.9299 10.83 19.9999 11.41 19.9999 12C19.9999 16.42 16.4199 20 11.9999 20C8.63993 20 5.76993 17.93 4.57993 15C4.54993 15 4.52993 15 4.49993 15C3.99993 15 3.45993 14.86 2.99993 14.6C2.67993 14.42 2.40993 14.18 2.17993 13.9C3.06993 18.5 7.10993 22 11.9999 22C17.4999 22 21.9999 17.5 21.9999 12C21.9999 11.45 21.9399 10.91 21.8599 10.38C21.5799 10.45 21.2999 10.5 20.9999 10.5ZM20.9999 3C20.9999 3 18.9999 5.9 18.9999 7C18.9999 8.1 19.8999 9 20.9999 9C22.0999 9 22.9999 8.1 22.9999 7C22.9999 5.9 20.9999 3 20.9999 3ZM15.6199 7.38L13.4999 9.5L15.6199 11.62L16.6799 10.56L15.6199 9.5L16.6799 8.44L15.6199 7.38ZM8.55993 17C9.24993 15.81 10.5299 15 11.9999 15C13.4699 15 14.7499 15.81 15.4399 17H17.1199C16.3199 14.95 14.3299 13.5 11.9999 13.5C11.1299 13.5 10.2999 13.7 9.56993 14.07L5.99993 12C5.99993 11.5 5.72993 11 5.24993 10.71C4.52993 10.3 3.61993 10.54 3.19993 11.26C2.78993 12 3.02993 12.89 3.74993 13.31C4.22993 13.59 4.79993 13.56 5.23993 13.31L8.20993 15.03C7.63993 15.56 7.17993 16.24 6.87993 17H8.55993Z" />
    </Svg>
  );
};
