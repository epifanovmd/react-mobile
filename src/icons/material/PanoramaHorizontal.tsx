import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PanoramaHorizontalIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 5.50054C8.1 5.50054 5.1 4.70054 3.3 4.10054C2.7 3.80054 2 4.30054 2 5.00054V19.0005C2 19.7005 2.7 20.2005 3.3 20.0005C5.4 19.3005 8.1 18.5005 12 18.5005C15.9 18.5005 18.7 19.3005 20.7 20.0005C21.4 20.2005 22 19.7005 22 19.0005V5.00054C22 4.30054 21.3 3.80054 20.7 4.10054C18.7 4.70054 15.9 5.50054 12 5.50054Z" />
    </Svg>
  );
};
