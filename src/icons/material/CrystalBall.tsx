import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CrystalBallIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.38 8.38L11.5 9.34L13.62 8.38L12.66 10.5L13.62 12.62L11.5 11.66L9.38 12.62L10.34 10.5L9.38 8.38ZM16.5 2.5L17.59 5.41L20.5 6.5L17.59 7.59L16.5 10.5L15.41 7.59L12.5 6.5L15.41 5.41L16.5 2.5ZM6 19H7V18C7 17.7348 7.10536 17.4804 7.29289 17.2929C7.48043 17.1054 7.73478 17 8 17H8.26C6 15.7 4.5 13.28 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.05 3 14.05 3.22 14.96 3.61L14.59 4.59L13.17 5.12C12.79 5.04 12.4 5 12 5C10.5413 5 9.14236 5.57946 8.11091 6.61091C7.07946 7.64236 6.5 9.04131 6.5 10.5C6.5 11.9587 7.07946 13.3576 8.11091 14.3891C9.14236 15.4205 10.5413 16 12 16C14.91 16 17.3 13.73 17.5 10.87L18.41 8.41L19.12 8.14C19.37 8.88 19.5 9.68 19.5 10.5C19.5 13.28 18 15.7 15.74 17H16C16.2652 17 16.5196 17.1054 16.7071 17.2929C16.8946 17.4804 17 17.7348 17 18V19H18C18.5304 19 19.0391 19.2107 19.4142 19.5858C19.7893 19.9609 20 20.4696 20 21V22H4V21C4 20.4696 4.21071 19.9609 4.58579 19.5858C4.96086 19.2107 5.46957 19 6 19Z" />
    </Svg>
  );
};
