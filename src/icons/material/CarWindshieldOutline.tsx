import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarWindshieldOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.6301 15.4998L20.2101 5.84979C20.1513 5.61723 20.0109 5.41353 19.8145 5.27586C19.6181 5.13818 19.3787 5.07569 19.1401 5.09979C17.8001 5.23979 14.1401 5.49979 12.0001 5.49979C9.86006 5.49979 6.20006 5.23979 4.86006 5.09979C4.62141 5.07569 4.38204 5.13818 4.18562 5.27586C3.9892 5.41353 3.84881 5.61723 3.79006 5.84979L1.37006 15.4998C1.31703 15.6997 1.30594 15.9085 1.33748 16.113C1.36902 16.3174 1.44251 16.5131 1.55333 16.6878C1.66415 16.8625 1.80991 17.0124 1.98144 17.128C2.15297 17.2437 2.34656 17.3226 2.55006 17.3598C5.67892 17.8157 8.83829 18.0297 12.0001 17.9998C15.1618 18.0297 18.3212 17.8157 21.4501 17.3598C21.6536 17.3226 21.8471 17.2437 22.0187 17.128C22.1902 17.0124 22.336 16.8625 22.4468 16.6878C22.5576 16.5131 22.6311 16.3174 22.6626 16.113C22.6942 15.9085 22.6831 15.6997 22.6301 15.4998ZM12.0001 15.9998C9.13871 16.0267 6.27882 15.8596 3.44006 15.4998L5.50006 7.17979C7.00006 7.31979 10.1601 7.49979 12.0001 7.49979C13.8401 7.49979 17.0001 7.31979 18.5001 7.17979L20.5601 15.4998C17.7213 15.8596 14.8614 16.0267 12.0001 15.9998Z" />
    </Svg>
  );
};
