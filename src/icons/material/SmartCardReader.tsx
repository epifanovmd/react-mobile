import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SmartCardReaderIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 4C20.9825 3.47512 20.7662 2.9765 20.3949 2.60514C20.0235 2.23379 19.5249 2.01747 19 2H5C4.47512 2.01747 3.9765 2.23379 3.60514 2.60514C3.23379 2.9765 3.01747 3.47512 3 4V18H21V4ZM8.25 16H7V6H8.25C9.91 6 10.75 9.34 10.75 11C10.75 12.66 9.91 16 8.25 16ZM14.5 13.5C14.0055 13.5 13.5222 13.3534 13.1111 13.0787C12.7 12.804 12.3795 12.4135 12.1903 11.9567C12.0011 11.4999 11.9516 10.9972 12.048 10.5123C12.1445 10.0273 12.3826 9.58186 12.7322 9.23223C13.0819 8.8826 13.5273 8.6445 14.0123 8.54804C14.4972 8.45157 14.9999 8.50108 15.4567 8.6903C15.9135 8.87952 16.304 9.19995 16.5787 9.61107C16.8534 10.0222 17 10.5055 17 11C17 11.663 16.7366 12.2989 16.2678 12.7678C15.7989 13.2366 15.163 13.5 14.5 13.5ZM23 21V22H1V21C1 20.4696 1.21071 19.9609 1.58579 19.5858C1.96086 19.2107 2.46957 19 3 19H21C21.5304 19 22.0391 19.2107 22.4142 19.5858C22.7893 19.9609 23 20.4696 23 21Z" />
    </Svg>
  );
};
