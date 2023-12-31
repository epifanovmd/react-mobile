import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RocketLaunchOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.1301 22.19L11.5001 18.36C13.0701 17.78 14.5401 17 15.9001 16.09L13.1301 22.19ZM5.64006 12.5L1.81006 10.87L7.91006 8.1C7.00006 9.46 6.22006 10.93 5.64006 12.5ZM19.2201 4C19.5001 4 19.7501 4 19.9601 4.05C20.1301 5.44 19.9401 8.3 16.6601 11.58C14.9601 13.29 12.9301 14.6 10.6501 15.47L8.50006 13.37C9.42006 11.06 10.7301 9.03 12.4201 7.34C15.1801 4.58 17.6401 4 19.2201 4ZM19.2201 2C17.2401 2 14.2401 2.69 11.0001 5.93C8.81006 8.12 7.50006 10.53 6.65006 12.64C6.37006 13.39 6.56006 14.21 7.11006 14.77L9.24006 16.89C9.62006 17.27 10.1301 17.5 10.6601 17.5C10.8901 17.5 11.1301 17.44 11.3601 17.35C13.5001 16.53 15.8801 15.19 18.0701 13C23.7301 7.34 21.6101 2.39 21.6101 2.39C21.6101 2.39 20.7001 2 19.2201 2ZM14.5401 9.46C13.7601 8.68 13.7601 7.41 14.5401 6.63C15.3201 5.85 16.5901 5.85 17.3701 6.63C18.1401 7.41 18.1501 8.68 17.3701 9.46C16.5901 10.24 15.3201 10.24 14.5401 9.46ZM8.88006 16.53L7.47006 15.12L8.88006 16.53ZM6.24006 22L9.88006 18.36C9.54006 18.27 9.21006 18.12 8.91006 17.91L4.83006 22H6.24006ZM2.00006 22H3.41006L8.18006 17.24L6.76006 15.83L2.00006 20.59V22ZM2.00006 19.17L6.09006 15.09C5.88006 14.79 5.73006 14.47 5.64006 14.12L2.00006 17.76V19.17Z" />
    </Svg>
  );
};
