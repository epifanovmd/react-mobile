import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileClockOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H12.41C13.4943 22.6516 14.735 22.9972 16 23C17.8565 23 19.637 22.2625 20.9497 20.9497C22.2625 19.637 23 17.8565 23 16C22.9982 14.4939 22.5108 13.0286 21.61 11.8216C20.7093 10.6146 19.4433 9.7303 18 9.3V8L12 2H4ZM4 4H11V9H16C14.1435 9 12.363 9.7375 11.0503 11.0503C9.7375 12.363 9 14.1435 9 16C9.00134 17.4308 9.44108 18.8268 10.26 20H4V4ZM16 11C17.3261 11 18.5979 11.5268 19.5355 12.4645C20.4732 13.4021 21 14.6739 21 16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21C14.6739 21 13.4021 20.4732 12.4645 19.5355C11.5268 18.5979 11 17.3261 11 16C11 14.6739 11.5268 13.4021 12.4645 12.4645C13.4021 11.5268 14.6739 11 16 11ZM15 12V17L18.61 19.16L19.36 17.94L16.5 16.25V12H15Z" />
    </Svg>
  );
};
