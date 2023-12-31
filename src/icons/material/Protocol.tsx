import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ProtocolIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 20H14L18 4H22L18 20ZM16 4H12L8 20H12L16 4ZM2 16.5C2 17.163 2.26339 17.7989 2.73223 18.2678C3.20107 18.7366 3.83696 19 4.5 19C4.8283 19 5.15339 18.9353 5.45671 18.8097C5.76002 18.6841 6.03562 18.4999 6.26777 18.2678C6.49991 18.0356 6.68406 17.76 6.8097 17.4567C6.93534 17.1534 7 16.8283 7 16.5C7 16.1717 6.93534 15.8466 6.8097 15.5433C6.68406 15.24 6.49991 14.9644 6.26777 14.7322C6.03562 14.5001 5.76002 14.3159 5.45671 14.1903C5.15339 14.0647 4.8283 14 4.5 14C3.83696 14 3.20107 14.2634 2.73223 14.7322C2.26339 15.2011 2 15.837 2 16.5ZM2 9.5C2 9.8283 2.06466 10.1534 2.1903 10.4567C2.31594 10.76 2.50009 11.0356 2.73223 11.2678C3.20107 11.7366 3.83696 12 4.5 12C4.8283 12 5.15339 11.9353 5.45671 11.8097C5.76002 11.6841 6.03562 11.4999 6.26777 11.2678C6.49991 11.0356 6.68406 10.76 6.8097 10.4567C6.93534 10.1534 7 9.8283 7 9.5C7 9.1717 6.93534 8.84661 6.8097 8.54329C6.68406 8.23998 6.49991 7.96438 6.26777 7.73223C6.03562 7.50009 5.76002 7.31594 5.45671 7.1903C5.15339 7.06466 4.8283 7 4.5 7C3.83696 7 3.20107 7.26339 2.73223 7.73223C2.26339 8.20107 2 8.83696 2 9.5Z" />
    </Svg>
  );
};
