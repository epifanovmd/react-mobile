import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TruckCheckIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 4H17V8H20L23 12V17H21C21 17.7956 20.6839 18.5587 20.1213 19.1213C19.5587 19.6839 18.7956 20 18 20C17.2044 20 16.4413 19.6839 15.8787 19.1213C15.3161 18.5587 15 17.7956 15 17H9C9 17.7956 8.68393 18.5587 8.12132 19.1213C7.55871 19.6839 6.79565 20 6 20C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17H1V6C1 4.89 1.9 4 3 4ZM17 9.5V12H21.47L19.5 9.5H17ZM6 15.5C5.60218 15.5 5.22064 15.658 4.93934 15.9393C4.65804 16.2206 4.5 16.6022 4.5 17C4.5 17.3978 4.65804 17.7794 4.93934 18.0607C5.22064 18.342 5.60218 18.5 6 18.5C6.39782 18.5 6.77936 18.342 7.06066 18.0607C7.34196 17.7794 7.5 17.3978 7.5 17C7.5 16.6022 7.34196 16.2206 7.06066 15.9393C6.77936 15.658 6.39782 15.5 6 15.5ZM18 15.5C17.6022 15.5 17.2206 15.658 16.9393 15.9393C16.658 16.2206 16.5 16.6022 16.5 17C16.5 17.3978 16.658 17.7794 16.9393 18.0607C17.2206 18.342 17.6022 18.5 18 18.5C18.3978 18.5 18.7794 18.342 19.0607 18.0607C19.342 17.7794 19.5 17.3978 19.5 17C19.5 16.6022 19.342 16.2206 19.0607 15.9393C18.7794 15.658 18.3978 15.5 18 15.5ZM8 14L14 8L12.59 6.58L8 11.17L5.91 9.08L4.5 10.5L8 14Z" />
    </Svg>
  );
};
