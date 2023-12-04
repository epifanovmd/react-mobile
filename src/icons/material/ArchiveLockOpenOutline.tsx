import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArchiveLockOpenOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.5 11C14.67 11 14.82 11.09 14.91 11.22C14.56 11.76 14.34 12.36 14.26 13H9V11.5C9 11.22 9.22 11 9.5 11H14.5ZM13 19H6V10H4V21H13.03C13 20.9 13 20.8 13 20.7V19ZM21 9H3V3H21V9ZM19 5H5V7H19V5ZM21.8 16H17.5V13.5C17.5 12.7 18.2 12.2 19 12.2C19.8 12.2 20.5 12.7 20.5 13.5V14H21.8V13.5C21.8 12.1 20.4 11 19 11C17.6 11 16.2 12.1 16.2 13.5V16C15.6 16 15 16.6 15 17.2V20.7C15 21.4 15.6 22 16.2 22H21.7C22.4 22 23 21.4 23 20.8V17.3C23 16.6 22.4 16 21.8 16Z" />
    </Svg>
  );
};
