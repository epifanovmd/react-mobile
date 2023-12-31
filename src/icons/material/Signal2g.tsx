import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Signal2gIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 19.5H2V13.5C2 12.7044 2.31607 11.9413 2.87868 11.3787C3.44129 10.8161 4.20435 10.5 5 10.5H8V7.5H2V4.5H8C8.79565 4.5 9.55871 4.81607 10.1213 5.37868C10.6839 5.94129 11 6.70435 11 7.5V10.5C11 11.2956 10.6839 12.0587 10.1213 12.6213C9.55871 13.1839 8.79565 13.5 8 13.5H5V16.5H11V19.5ZM22 10.5H17.5V13.5H19V16.5H16V7.5H22V4.5H16C15.2044 4.5 14.4413 4.81607 13.8787 5.37868C13.3161 5.94129 13 6.70435 13 7.5V16.5C13 17.2956 13.3161 18.0587 13.8787 18.6213C14.4413 19.1839 15.2044 19.5 16 19.5H19C19.7956 19.5 20.5587 19.1839 21.1213 18.6213C21.6839 18.0587 22 17.2956 22 16.5" />
    </Svg>
  );
};
