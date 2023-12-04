import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BriefcaseClockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 11.11V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H15V3C15 2.46957 14.7893 1.96086 14.4142 1.58579C14.0391 1.21071 13.5304 1 13 1H9C8.46957 1 7.96086 1.21071 7.58579 1.58579C7.21071 1.96086 7 2.46957 7 3V5H3C2.46957 5 1.96086 5.21071 1.58579 5.58579C1.21071 5.96086 1 6.46957 1 7V18C1 18.5304 1.21071 19.0391 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H10.26C10.8097 20.8028 11.5206 21.4821 12.3475 21.9948C13.1744 22.5074 14.0991 22.842 15.0626 22.9773C16.026 23.1126 17.0071 23.0455 17.9432 22.7804C18.8793 22.5153 19.7499 22.058 20.4993 21.4376C21.2488 20.8173 21.8607 20.0475 22.296 19.1774C22.7313 18.3073 22.9805 17.356 23.0276 16.3842C23.0747 15.4125 22.9188 14.4416 22.5696 13.5334C22.2205 12.6253 21.6859 11.8 21 11.11ZM9 3H13V5H9V3ZM19 20C18.1345 20.6491 17.0819 21 16 21C14.9181 21 13.8655 20.6491 13 20C12.1605 19.3704 11.5403 18.4925 11.2274 17.4908C10.9145 16.4892 10.9247 15.4144 11.2566 14.4189C11.5884 13.4233 12.2251 12.5574 13.0764 11.9438C13.9278 11.3302 14.9506 11 16 11C17.0494 11 18.0722 11.3302 18.9236 11.9438C19.7749 12.5574 20.4116 13.4233 20.7434 14.4189C21.0753 15.4144 21.0855 16.4892 20.7726 17.4908C20.4597 18.4925 19.8395 19.3704 19 20ZM15 13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69V13Z" />
    </Svg>
  );
};
