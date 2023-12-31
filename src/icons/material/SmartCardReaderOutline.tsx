import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SmartCardReaderOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.5 8.5C14.0055 8.5 13.5222 8.64662 13.1111 8.92133C12.7 9.19603 12.3795 9.58648 12.1903 10.0433C12.0011 10.5001 11.9516 11.0028 12.048 11.4877C12.1445 11.9727 12.3826 12.4181 12.7322 12.7678C13.0819 13.1174 13.5273 13.3555 14.0123 13.452C14.4972 13.5484 14.9999 13.4989 15.4567 13.3097C15.9135 13.1205 16.304 12.8 16.5787 12.3889C16.8534 11.9778 17 11.4945 17 11C17 10.337 16.7366 9.70107 16.2678 9.23223C15.7989 8.76339 15.163 8.5 14.5 8.5ZM8.25 6H7V16H8.25C9.91 16 10.75 12.66 10.75 11C10.75 9.34 9.91 6 8.25 6ZM19 2H5C4.47512 2.01747 3.9765 2.23379 3.60514 2.60514C3.23379 2.9765 3.01747 3.47512 3 4V18H5V4H19V18H21V4C20.9825 3.47512 20.7662 2.9765 20.3949 2.60514C20.0235 2.23379 19.5249 2.01747 19 2ZM23 22H1V21C1 20.4696 1.21071 19.9609 1.58579 19.5858C1.96086 19.2107 2.46957 19 3 19H21C21.5304 19 22.0391 19.2107 22.4142 19.5858C22.7893 19.9609 23 20.4696 23 21V22Z" />
    </Svg>
  );
};
