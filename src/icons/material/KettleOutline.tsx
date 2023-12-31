import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KettleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.5001 3.00044C7.80008 3.00044 4.00008 5.70044 4.00008 9.00044C4.00008 10.2004 4.50008 11.3004 5.40008 12.3004C4.47798 13.5051 3.98519 14.9835 4.00008 16.5004V20.0004C4.00008 21.1004 4.90008 22.0004 6.00008 22.0004H19.0001C19.5305 22.0004 20.0392 21.7897 20.4143 21.4147C20.7894 21.0396 21.0001 20.5309 21.0001 20.0004V16.5004C21.0001 15.3004 20.7001 14.1004 20.0001 13.0004L22.0001 11.0004L19.0001 8.00044L16.9001 10.1004C15.4632 9.31929 13.844 8.93531 12.2094 8.98804C10.5747 9.04077 8.98365 9.52831 7.60008 10.4004C7.22326 10.0312 7.0076 9.52798 7.00008 9.00044C7.00008 7.20044 9.50008 5.70044 12.5001 5.70044C13.9001 5.70044 15.3001 6.10044 16.3001 6.70044L18.3001 4.70044C16.5884 3.5491 14.5625 2.9553 12.5001 3.00044ZM12.5001 11.0004C16.0001 11.0004 19.0001 14.0004 19.0001 16.5004V20.0004H6.00008V16.5004C6.00008 14.0004 9.00008 11.0004 12.5001 11.0004ZM13.0001 12.5004C10.0001 12.5004 8.00008 14.0004 8.00008 17.0004V18.0004H10.0001V17.0004C10.0001 16.0004 10.0001 13.5004 13.0001 12.5004Z" />
    </Svg>
  );
};
