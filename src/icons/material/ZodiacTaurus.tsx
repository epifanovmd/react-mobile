import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ZodiacTaurusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.59 9C17.7 7.74 19 5.46 19 3H17C17 4.32608 16.4732 5.59785 15.5355 6.53553C14.5978 7.47322 13.3261 8 12 8C10.6739 8 9.40214 7.47322 8.46446 6.53553C7.52678 5.59785 6.99999 4.32608 6.99999 3H4.99999C4.99999 5.46 6.29999 7.74 8.40999 9C5.08999 11 3.99999 15.28 5.99999 18.6C7.96999 21.92 12.27 23 15.59 21C18.91 19.04 20 14.74 18 11.42C17.42 10.43 16.58 9.59 15.59 9ZM12 20C10.6739 20 9.40214 19.4732 8.46446 18.5355C7.52678 17.5979 6.99999 16.3261 6.99999 15C6.99999 13.6739 7.52678 12.4021 8.46446 11.4645C9.40214 10.5268 10.6739 10 12 10C13.3261 10 14.5978 10.5268 15.5355 11.4645C16.4732 12.4021 17 13.6739 17 15C17 16.3261 16.4732 17.5979 15.5355 18.5355C14.5978 19.4732 13.3261 20 12 20Z" />
    </Svg>
  );
};
