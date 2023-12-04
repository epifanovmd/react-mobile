import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DotsHorizontalCircleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2ZM12 10.5C11.6022 10.5 11.2206 10.658 10.9393 10.9393C10.658 11.2206 10.5 11.6022 10.5 12C10.5 12.3978 10.658 12.7794 10.9393 13.0607C11.2206 13.342 11.6022 13.5 12 13.5C12.3978 13.5 12.7794 13.342 13.0607 13.0607C13.342 12.7794 13.5 12.3978 13.5 12C13.5 11.6022 13.342 11.2206 13.0607 10.9393C12.7794 10.658 12.3978 10.5 12 10.5ZM6.5 10.5C6.10218 10.5 5.72064 10.658 5.43934 10.9393C5.15804 11.2206 5 11.6022 5 12C5 12.3978 5.15804 12.7794 5.43934 13.0607C5.72064 13.342 6.10218 13.5 6.5 13.5C6.89782 13.5 7.27936 13.342 7.56066 13.0607C7.84196 12.7794 8 12.3978 8 12C8 11.6022 7.84196 11.2206 7.56066 10.9393C7.27936 10.658 6.89782 10.5 6.5 10.5ZM17.5 10.5C17.1022 10.5 16.7206 10.658 16.4393 10.9393C16.158 11.2206 16 11.6022 16 12C16 12.3978 16.158 12.7794 16.4393 13.0607C16.7206 13.342 17.1022 13.5 17.5 13.5C17.8978 13.5 18.2794 13.342 18.5607 13.0607C18.842 12.7794 19 12.3978 19 12C19 11.6022 18.842 11.2206 18.5607 10.9393C18.2794 10.658 17.8978 10.5 17.5 10.5Z" />
    </Svg>
  );
};
