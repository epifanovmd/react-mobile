import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BabyCarriageIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 2V10H21C21 7.87827 20.1571 5.84344 18.6569 4.34315C17.1566 2.84285 15.1217 2 13 2ZM19.32 15.89C20.37 14.54 21 12.84 21 11H6.44L5.5 9H2V11H4.22C4.22 11 6.11 15.07 6.34 15.42C5.24 16 4.5 17.17 4.5 18.5C4.5 19.4283 4.86875 20.3185 5.52513 20.9749C6.1815 21.6313 7.07174 22 8 22C9.76 22 11.22 20.7 11.46 19H13.54C13.78 20.7 15.24 22 17 22C17.9283 22 18.8185 21.6313 19.4749 20.9749C20.1313 20.3185 20.5 19.4283 20.5 18.5C20.5 17.46 20.04 16.53 19.32 15.89ZM8 20C7.60218 20 7.22064 19.842 6.93934 19.5607C6.65804 19.2794 6.5 18.8978 6.5 18.5C6.5 18.1022 6.65804 17.7206 6.93934 17.4393C7.22064 17.158 7.60218 17 8 17C8.39782 17 8.77936 17.158 9.06066 17.4393C9.34196 17.7206 9.5 18.1022 9.5 18.5C9.5 18.8978 9.34196 19.2794 9.06066 19.5607C8.77936 19.842 8.39782 20 8 20ZM17 20C16.6022 20 16.2206 19.842 15.9393 19.5607C15.658 19.2794 15.5 18.8978 15.5 18.5C15.5 18.1022 15.658 17.7206 15.9393 17.4393C16.2206 17.158 16.6022 17 17 17C17.3978 17 17.7794 17.158 18.0607 17.4393C18.342 17.7206 18.5 18.1022 18.5 18.5C18.5 18.8978 18.342 19.2794 18.0607 19.5607C17.7794 19.842 17.3978 20 17 20Z" />
    </Svg>
  );
};
