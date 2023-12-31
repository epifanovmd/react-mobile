import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OilLampIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 20H16V22H5V20ZM11 5H10C9.46957 5 8.96086 5.21071 8.58579 5.58579C8.21071 5.96086 8 6.46957 8 7H13C13 6.46957 12.7893 5.96086 12.4142 5.58579C12.0391 5.21071 11.5304 5 11 5ZM16 8H22C22 8.53043 21.7893 9.03914 21.4142 9.41421C21.0391 9.78929 20.5304 10 20 10H19C17.9391 10 16.9217 10.4214 16.1716 11.1716C15.4214 11.9217 15 12.9391 15 14V15C15 16.0609 14.5786 17.0783 13.8284 17.8284C13.0783 18.5786 12.0609 19 11 19H10C8.93913 19 7.92172 18.5786 7.17157 17.8284C6.42143 17.0783 6 16.0609 6 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V10C2 9.46957 2.21071 8.96086 2.58579 8.58579C2.96086 8.21071 3.46957 8 4 8H16ZM6 10H4V13H6V10ZM19 5C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7H22C22.014 6.60227 21.9459 6.20592 21.8001 5.83563C21.6543 5.46533 21.4338 5.12901 21.1524 4.8476C20.871 4.56619 20.5347 4.34572 20.1644 4.1999C19.7941 4.05408 19.3977 3.98603 19 4C18.4696 4 17.9609 3.78929 17.5858 3.41421C17.2107 3.03914 17 2.53043 17 2H16C15.986 2.39773 16.0541 2.79408 16.1999 3.16437C16.3457 3.53467 16.5662 3.87099 16.8476 4.1524C17.129 4.43381 17.4653 4.65428 17.8356 4.8001C18.2059 4.94592 18.6023 5.01397 19 5Z" />
    </Svg>
  );
};
