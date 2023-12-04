import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const InformationVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.5 4C13.1022 4 12.7206 4.15804 12.4393 4.43934C12.158 4.72064 12 5.10218 12 5.5C12 5.89782 12.158 6.27936 12.4393 6.56066C12.7206 6.84196 13.1022 7 13.5 7C13.8978 7 14.2794 6.84196 14.5607 6.56066C14.842 6.27936 15 5.89782 15 5.5C15 5.10218 14.842 4.72064 14.5607 4.43934C14.2794 4.15804 13.8978 4 13.5 4ZM13.14 8.77C11.95 8.87 8.7 11.46 8.7 11.46C8.5 11.61 8.56 11.6 8.72 11.88C8.88 12.15 8.86 12.17 9.05 12.04C9.25 11.91 9.58 11.7 10.13 11.36C12.25 10 10.47 13.14 9.56 18.43C9.2 21.05 11.56 19.7 12.17 19.3C12.77 18.91 14.38 17.8 14.54 17.69C14.76 17.54 14.6 17.42 14.43 17.17C14.31 17 14.19 17.12 14.19 17.12C13.54 17.55 12.35 18.45 12.19 17.88C12 17.31 13.22 13.4 13.89 10.71C14 10.07 14.3 8.67 13.14 8.77Z" />
    </Svg>
  );
};
