import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SnowmanIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 17C17 18.3261 16.4732 19.5979 15.5356 20.5355C14.5979 21.4732 13.3261 22 12 22C10.6739 22 9.40218 21.4732 8.4645 20.5355C7.52681 19.5979 7.00003 18.3261 7.00003 17C7.00003 15.5 7.65003 14.17 8.69003 13.25C8.26003 12.61 8.00003 11.83 8.00003 11C8.00003 10.86 8.00003 10.73 8.00003 10.59L5.04003 8.87L4.83003 8.71L2.29003 9.39L2.03003 8.43L4.24003 7.84L2.26003 6.69L2.76003 5.82L4.74003 6.97L4.15003 4.75L5.11003 4.5L5.80003 7.04L6.04003 7.14L8.73003 8.69C9.11003 8.15 9.62003 7.71 10.22 7.42C9.50003 6.87 9.00003 6 9.00003 5C9.00003 4.20435 9.3161 3.44129 9.87871 2.87868C10.4413 2.31607 11.2044 2 12 2C12.7957 2 13.5587 2.31607 14.1214 2.87868C14.684 3.44129 15 4.20435 15 5C15 6 14.5 6.87 13.78 7.42C14.38 7.71 14.89 8.15 15.27 8.69L17.96 7.14L18.2 7.04L18.89 4.5L19.85 4.75L19.26 6.97L21.24 5.82L21.74 6.69L19.76 7.84L21.97 8.43L21.71 9.39L19.17 8.71L18.96 8.87L16 10.59V11C16 11.83 15.74 12.61 15.31 13.25C16.35 14.17 17 15.5 17 17Z" />
    </Svg>
  );
};
