import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardsClubOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.6 9.5C16.8 8.9 17 8.2 17 7.5C17 4.5 14.8 2 12 2C9.2 2 7 4.5 7 7.5C7 8.2 7.1 8.9 7.4 9.5C4.9 9.6 3 11.4 3 13.8C3 16.3 5 18 7.5 18C7.5 18 10 18 11 17C11 17 11.3 19 9 22H15C12.7 19 13 17 13 17C14 18 16.5 18 16.5 18C19 18 21 16.3 21 13.8C21 11.4 19.1 9.6 16.6 9.5ZM16.5 16C16.5 16 14 16 13 15H11C10 16 7.5 16 7.5 16C6.3 16 5 15.3 5 13.8C5 12.5 6.1 11.5 7.5 11.5C7.8 11.5 8.3 11.6 8.8 11.7C8.9 11.7 9 11.8 9.1 11.8L10 10.1C9.8 9.9 9.7 9.7 9.6 9.5C9.2 8.9 9 8.3 9 7.5C9 5.6 10.3 4 12 4C13.7 4 15 5.6 15 7.5C15 8.3 14.8 9 14.4 9.6C14.3 9.8 14.2 9.9 14.1 10.1L15 11.8C15.1 11.8 15.2 11.7 15.3 11.7C15.7 11.6 16.2 11.5 16.6 11.5C18 11.5 19.1 12.5 19.1 13.8C19 15.3 17.7 16 16.5 16Z" />
    </Svg>
  );
};
