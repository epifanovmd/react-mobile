import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FoodHotDogIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.0001 5.76988C20.8501 5.64988 20.7201 5.54988 20.5901 5.44988L20.6201 5.40988C21.4001 4.62988 21.4001 3.36988 20.6201 2.58988C19.8401 1.80988 18.5801 1.80988 17.7901 2.58988L17.0501 3.32988C15.6801 2.29988 13.7401 2.39988 12.5001 3.64988L3.65006 12.4999C2.40006 13.7399 2.30006 15.6799 3.33006 17.0499L2.59006 17.7899C1.80006 18.5799 1.80006 19.8399 2.59006 20.6199C3.37006 21.3999 4.63006 21.3999 5.41006 20.6199L5.45006 20.5899C5.55006 20.7199 5.65006 20.8499 5.77006 20.9999C7.13006 22.3399 9.35006 22.3399 10.7201 20.9999L20.9701 10.7199C22.3401 9.34988 22.3401 7.13988 21.0001 5.76988ZM4.77006 15.6099C4.50006 15.0499 4.60006 14.3599 5.06006 13.8999L13.9001 5.05988C14.3601 4.59988 15.0501 4.49988 15.6101 4.76988L4.77006 15.6099ZM19.5601 9.29988L9.30006 19.5599C8.72006 20.1499 7.77006 20.1499 7.18006 19.5599C6.60006 18.9999 6.60006 17.9999 7.18006 17.4399L17.4401 7.17988C18.0001 6.59988 19.0001 6.59988 19.5601 7.17988C20.1501 7.76988 20.1501 8.71988 19.5601 9.29988Z" />
    </Svg>
  );
};
