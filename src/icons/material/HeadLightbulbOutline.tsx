import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadLightbulbOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 3C16.9 3 20 6.1 20 10C20 12.8 18.4 15.2 16 16.3V21H9.00002V18H8.00002C6.90002 18 6.00002 17.1 6.00002 16V13H4.50002C4.10002 13 3.80002 12.5 4.10002 12.2L6.00002 9.7C6.20002 5.9 9.20002 3 13 3ZM13 1C8.40002 1 4.60002 4.4 4.10002 8.9L2.50002 11C1.90002 11.8 1.90002 12.8 2.30002 13.6C2.70002 14.3 3.30002 14.8 4.00002 14.9V16C4.00002 17.9 5.30002 19.4 7.00002 19.9V23H18V17.5C20.5 15.8 22 13.1 22 10C22 5 18 1 13 1ZM14 14H12V13H14V14ZM15.6 9.5C15.3 9.9 15 10.3 14.5 10.6V12H11.5V10.6C10.1 9.8 9.60001 7.9 10.4 6.5C11.2 5.1 13.1 4.6 14.5 5.4C15.9 6.2 16.4 8.1 15.6 9.5Z" />
    </Svg>
  );
};
