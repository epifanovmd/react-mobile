import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FrequentlyAskedQuestionsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 15H6L2 19V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H18C18.2652 2 18.5196 2.10536 18.7071 2.29289C18.8946 2.48043 19 2.73478 19 3V14C19 14.2652 18.8946 14.5196 18.7071 14.7071C18.5196 14.8946 18.2652 15 18 15ZM23 9V23L19 19H8C7.73478 19 7.48043 18.8946 7.29289 18.7071C7.10536 18.5196 7 18.2652 7 18V17H21V8H22C22.2652 8 22.5196 8.10536 22.7071 8.29289C22.8946 8.48043 23 8.73478 23 9ZM8.19 4C7.32 4 6.62 4.2 6.08 4.59C5.56 5 5.3 5.57 5.31 6.36L5.32 6.39H7.25C7.26 6.09 7.35 5.86 7.53 5.7C7.71 5.55 7.93 5.47 8.19 5.47C8.5 5.47 8.76 5.57 8.94 5.75C9.12 5.94 9.2 6.2 9.2 6.5C9.2 6.82 9.13 7.09 8.97 7.32C8.83 7.55 8.62 7.75 8.36 7.91C7.85 8.25 7.5 8.55 7.31 8.82C7.11 9.08 7 9.5 7 10H9C9 9.69 9.04 9.44 9.13 9.26C9.22 9.08 9.39 8.9 9.64 8.74C10.09 8.5 10.46 8.21 10.75 7.81C11.04 7.41 11.19 7 11.19 6.5C11.19 5.74 10.92 5.13 10.38 4.68C9.85 4.23 9.12 4 8.19 4ZM7 11V13H9V11H7ZM13 13H15V11H13V13ZM13 4V10H15V4H13Z" />
    </Svg>
  );
};
