import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SpiderIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.29 16.7098L22.71 15.2898L19.5 12.1098L16.5 11.2598L18.41 10.9998L22.6 7.79977L21.4 6.19977L17.59 9.04977L14.91 9.49977L18.11 6.30977L17 1.75977L15 2.23977L15.86 5.68977L14.76 6.82977C14.5295 6.2886 14.145 5.82714 13.6542 5.5028C13.1635 5.17845 12.5883 5.00552 12 5.00552C11.4118 5.00552 10.8366 5.17845 10.3458 5.5028C9.85512 5.82714 9.47058 6.2886 9.24004 6.82977L8.11004 5.68977L9.00004 2.23977L7.00004 1.75977L5.89004 6.30977L9.09004 9.49977L6.40004 9.04977L2.60004 6.19977L1.40004 7.79977L5.60004 10.9998L7.46004 11.3098L4.46004 12.1598L1.29004 15.2898L2.71004 16.7098L5.50004 13.8898L7.87004 13.2198L4.00004 16.5398V21.9998H6.00004V17.4598L7.56004 16.1198C7.73362 17.1721 8.2753 18.1285 9.08849 18.8185C9.90168 19.5086 10.9335 19.8874 12 19.8874C13.0665 19.8874 14.0984 19.5086 14.9116 18.8185C15.7248 18.1285 16.2665 17.1721 16.44 16.1198L18 17.4598V21.9998H20V16.5398L16.13 13.2198L18.5 13.8898L21.29 16.7098Z" />
    </Svg>
  );
};
