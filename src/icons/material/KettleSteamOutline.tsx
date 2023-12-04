import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KettleSteamOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.50007 3C4.80007 3 1.00007 5.7 1.00007 9C1.00007 10.2 1.50007 11.3 2.40007 12.3C1.50007 13.5 0.985075 15 1.00007 16.5V20C1.00007 21.1 1.90007 22 3.00007 22H16.0001C17.1101 22 18.0001 21.11 18.0001 20V16.5C18.0001 15.3 17.7001 14.1 17.0001 13L19.0001 11L16.0001 8L13.9001 10.1C10.9701 8.5 7.42007 8.63 4.60007 10.4C4.22007 10.03 4.00007 9.53 4.00007 9C4.00007 7.2 6.50007 5.7 9.50007 5.7C10.9001 5.7 12.3001 6.1 13.3001 6.7L15.3001 4.7C13.5901 3.55 11.5601 2.96 9.50007 3ZM9.50007 11C13.0001 11 16.0001 14 16.0001 16.5V20H3.00007V16.5C3.00007 14 6.00007 11 9.50007 11ZM10.0001 12.5C7.00007 12.5 5.00007 14 5.00007 17V18H7.00007V17C7.00007 16 7.00007 13.5 10.0001 12.5ZM23.0001 7.3C23.0001 8.93 21.9101 10.6 20.3801 10.97L19.7101 10.29L19.0001 9.6H19.7501C20.7501 9.6 21.5001 8.22 21.5001 7.2C21.5001 6.18 20.6501 5.14 19.6501 5.14V3.64C21.5001 3.64 23.0001 5.45 23.0001 7.3ZM17.6501 6.73C17.0301 6.12 16.6501 5.28 16.6501 4.35C16.6501 2.5 18.1501 1 20.0001 1V2.5C19.0001 2.5 18.1501 3.33 18.1501 4.35C18.1501 5.37 19.0001 6.2 20.0001 6.2V7.7C19.1801 7.7 18.4201 7.95 17.7901 8.38L16.7201 7.31C17.0001 7.09 17.3201 6.89 17.6501 6.73Z" />
    </Svg>
  );
};
