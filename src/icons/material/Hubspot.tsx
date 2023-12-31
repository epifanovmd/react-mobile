import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HubspotIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.1001 8.59979V6.19979C17.7001 5.89979 18.2001 5.29979 18.2001 4.59979V4.49979C18.2001 3.49979 17.4001 2.69979 16.4001 2.69979H16.3001C15.3001 2.69979 14.5001 3.49979 14.5001 4.49979V4.59979C14.5001 5.29979 14.9001 5.89979 15.6001 6.19979V8.59979C14.7001 8.69979 13.8001 9.09979 13.1001 9.69979L6.5001 4.59979C6.8001 3.49979 6.1001 2.29979 5.0001 2.09979C3.9001 1.89979 2.8001 2.39979 2.5001 3.49979C2.2001 4.59979 2.9001 5.79979 4.0001 6.09979C4.5001 6.19979 5.1001 6.19979 5.6001 5.89979L12.0001 10.8998C10.8001 12.6998 10.8001 14.9998 12.1001 16.7998L10.1001 18.7998C9.9001 18.7998 9.8001 18.6998 9.6001 18.6998C8.7001 18.6998 7.9001 19.4998 7.9001 20.3998C7.9001 21.2998 8.7001 21.9998 9.6001 21.9998C10.5001 21.9998 11.3001 21.1998 11.3001 20.2998C11.3001 20.0998 11.3001 19.9998 11.2001 19.7998L13.1001 17.8998C15.4001 19.5998 18.7001 19.1998 20.4001 16.8998C22.1001 14.5998 21.7001 11.2998 19.4001 9.59979C18.8001 9.09979 18.0001 8.69979 17.1001 8.59979ZM16.3001 16.3998C14.8001 16.3998 13.6001 15.1998 13.6001 13.6998C13.6001 12.1998 14.8001 10.9998 16.3001 10.9998C17.8001 10.9998 19.0001 12.1998 19.0001 13.6998C19.0001 15.1998 17.8001 16.3998 16.3001 16.3998Z" />
    </Svg>
  );
};
