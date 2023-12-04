import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BagCarryOnCheckIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.28 16.69L18.14 13.88L18.84 14.58L15.28 18.14L13.17 16L13.88 15.28L15.28 16.69ZM8 21C7.46957 21 6.96086 20.7893 6.58579 20.4142C6.21071 20.0391 6 19.5304 6 19V9C6 8.46957 6.21071 7.96086 6.58579 7.58579C6.96086 7.21071 7.46957 7 8 7V21ZM9 7H14V4C13.4696 4 12.9609 3.78929 12.5858 3.41421C12.2107 3.03914 12 2.53043 12 2H16V10C17.5913 10 19.1174 10.6321 20.2426 11.7574C21.3679 12.8826 22 14.4087 22 16C22 17.5913 21.3679 19.1174 20.2426 20.2426C19.1174 21.3679 17.5913 22 16 22C14.77 22 13.63 21.63 12.68 21H9V7ZM16 12C14.9391 12 13.9217 12.4214 13.1716 13.1716C12.4214 13.9217 12 14.9391 12 16C12 17.0609 12.4214 18.0783 13.1716 18.8284C13.9217 19.5786 14.9391 20 16 20C17.0609 20 18.0783 19.5786 18.8284 18.8284C19.5786 18.0783 20 17.0609 20 16C20 14.9391 19.5786 13.9217 18.8284 13.1716C18.0783 12.4214 17.0609 12 16 12Z" />
    </Svg>
  );
};
