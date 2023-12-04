import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DolphinIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 6.99983C20 6.99983 20 2.99983 15 2.99983C13.47 2.99983 12.15 3.18983 11 3.49983C10.5 3.05983 7.26 0.308833 4 3.56983L6.56 6.12983C2.5 10.5298 4 17.9998 4 17.9998C4 17.9998 1 17.9998 1 21.9998L5 20.9998L9 21.9998C9 17.9998 6 17.9998 6 17.9998C6 17.9998 6.85 12.2398 13 11.1798V13.9998C15 13.9998 15.68 12.1898 15.89 10.9998H18C22 10.9998 23 9.99983 23 8.99983C23 7.99983 21 6.99983 20 6.99983ZM18 7.99983C17.45 7.99983 17 7.54983 17 6.99983C17 6.44983 17.45 5.99983 18 5.99983C18.55 5.99983 19 6.44983 19 6.99983C19 7.54983 18.55 7.99983 18 7.99983Z" />
    </Svg>
  );
};
