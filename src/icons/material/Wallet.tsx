import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WalletIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 18V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89 21 3 20.1 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V6H12C10.89 6 10 6.9 10 8V16C10 16.5304 10.2107 17.0391 10.5858 17.4142C10.9609 17.7893 11.4696 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.6022 13.5 15.2206 13.342 14.9393 13.0607C14.658 12.7794 14.5 12.3978 14.5 12C14.5 11.6022 14.658 11.2206 14.9393 10.9393C15.2206 10.658 15.6022 10.5 16 10.5C16.3978 10.5 16.7794 10.658 17.0607 10.9393C17.342 11.2206 17.5 11.6022 17.5 12C17.5 12.3978 17.342 12.7794 17.0607 13.0607C16.7794 13.342 16.3978 13.5 16 13.5Z" />
    </Svg>
  );
};
