import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FaceManProfileIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 8.39C13.57 9.4 15.42 10 17.42 10C18.2 10 18.95 9.91 19.67 9.74C19.88 10.45 20 11.21 20 12C20 16.41 16.41 20 12 20C9 20 6.39 18.34 5 15.89L6.75 14V13C6.75 12.6685 6.8817 12.3505 7.11612 12.1161C7.35054 11.8817 7.66848 11.75 8 11.75C8.33152 11.75 8.64946 11.8817 8.88388 12.1161C9.1183 12.3505 9.25 12.6685 9.25 13V14H12V8.39ZM16 11.75C15.6685 11.75 15.3505 11.8817 15.1161 12.1161C14.8817 12.3505 14.75 12.6685 14.75 13C14.75 13.3315 14.8817 13.6495 15.1161 13.8839C15.3505 14.1183 15.6685 14.25 16 14.25C16.3315 14.25 16.6495 14.1183 16.8839 13.8839C17.1183 13.6495 17.25 13.3315 17.25 13C17.25 12.6685 17.1183 12.3505 16.8839 12.1161C16.6495 11.8817 16.3315 11.75 16 11.75Z" />
    </Svg>
  );
};
