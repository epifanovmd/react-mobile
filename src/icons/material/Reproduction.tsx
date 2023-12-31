import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ReproductionIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.72 13.15L13.62 12.26C13.6 11 14.31 9.44 15.62 8.14C17.57 6.18 20.11 5.55 21.28 6.72C22.45 7.89 21.82 10.43 19.86 12.38C18.56 13.69 17 14.4 15.74 14.38L14.85 15.28C14.5 15.61 14 15.66 13.6 15.41C12.76 15.71 12 16.08 11.56 16.8C11.03 17.68 11.03 19.1 10.47 19.95C9.91 20.81 8.79 21.1 7.61 21.1C6.43 21.1 5 21 3.95 19.5L6.43 19.92C7 20 8.5 19.39 9.05 18.54C9.61 17.68 9.61 16.27 10.14 15.38C10.61 14.6 11.5 14.23 12.43 13.91C12.42 13.64 12.5 13.36 12.72 13.15ZM7 2C7.65661 2 8.30679 2.12933 8.91342 2.3806C9.52004 2.63188 10.0712 3.00017 10.5355 3.46447C10.9998 3.92876 11.3681 4.47995 11.6194 5.08658C11.8707 5.69321 12 6.34339 12 7C12 7.65661 11.8707 8.30679 11.6194 8.91342C11.3681 9.52004 10.9998 10.0712 10.5355 10.5355C10.0712 10.9998 9.52004 11.3681 8.91342 11.6194C8.30679 11.8707 7.65661 12 7 12C5.67392 12 4.40215 11.4732 3.46447 10.5355C2.52678 9.59785 2 8.32608 2 7C2 5.67392 2.52678 4.40215 3.46447 3.46447C4.40215 2.52678 5.67392 2 7 2ZM7 4C6.20435 4 5.44129 4.31607 4.87868 4.87868C4.31607 5.44129 4 6.20435 4 7C4 7.79565 4.31607 8.55871 4.87868 9.12132C5.44129 9.68393 6.20435 10 7 10C7.79565 10 8.55871 9.68393 9.12132 9.12132C9.68393 8.55871 10 7.79565 10 7C10 6.20435 9.68393 5.44129 9.12132 4.87868C8.55871 4.31607 7.79565 4 7 4Z" />
    </Svg>
  );
};
