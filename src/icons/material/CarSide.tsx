import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarSideIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 6L19 10H21C22.11 10 23 10.89 23 12V15H21C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18C17.2044 18 16.4413 17.6839 15.8787 17.1213C15.3161 16.5587 15 15.7956 15 15H9C9 15.7956 8.68393 16.5587 8.12132 17.1213C7.55871 17.6839 6.79565 18 6 18C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15H1V12C1 10.89 1.89 10 3 10L6 6H16ZM10.5 7.5H6.75L4.86 10H10.5V7.5ZM12 7.5V10H17.14L15.25 7.5H12ZM6 13.5C5.60218 13.5 5.22064 13.658 4.93934 13.9393C4.65804 14.2206 4.5 14.6022 4.5 15C4.5 15.3978 4.65804 15.7794 4.93934 16.0607C5.22064 16.342 5.60218 16.5 6 16.5C6.39782 16.5 6.77936 16.342 7.06066 16.0607C7.34196 15.7794 7.5 15.3978 7.5 15C7.5 14.6022 7.34196 14.2206 7.06066 13.9393C6.77936 13.658 6.39782 13.5 6 13.5ZM18 13.5C17.6022 13.5 17.2206 13.658 16.9393 13.9393C16.658 14.2206 16.5 14.6022 16.5 15C16.5 15.3978 16.658 15.7794 16.9393 16.0607C17.2206 16.342 17.6022 16.5 18 16.5C18.3978 16.5 18.7794 16.342 19.0607 16.0607C19.342 15.7794 19.5 15.3978 19.5 15C19.5 14.6022 19.342 14.2206 19.0607 13.9393C18.7794 13.658 18.3978 13.5 18 13.5Z" />
    </Svg>
  );
};
