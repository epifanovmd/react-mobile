import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 1C8.40004 1 4.60004 4.4 4.10004 8.9L2.50004 11C2.00004 11.8 1.90004 12.8 2.30004 13.6C2.70004 14.3 3.30004 14.8 4.00004 14.9V16C4.00004 17.8 5.30004 19.4 7.00004 19.9V23H18V17.5C20.5 15.8 22 13.1 22 10C22 5 18 1 13 1ZM16 16.3V21H9.00004V18H8.00004C6.90004 18 6.00004 17.1 6.00004 16V13H4.50004C4.10004 13 3.80004 12.5 4.10004 12.2L6.00004 9.7C6.20004 6 9.20004 3 13 3C16.9 3 20 6.1 20 10C20 12.8 18.4 15.2 16 16.3Z" />
    </Svg>
  );
};
