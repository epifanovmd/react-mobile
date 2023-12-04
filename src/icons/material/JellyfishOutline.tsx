import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const JellyfishOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 4C15.8001 4 18.5001 6.8 18.5001 10.8C14.3101 12.39 9.69009 12.39 5.50009 10.8C5.50009 6.8 8.20009 4 12.0001 4ZM12.0001 2C7.30009 2 3.50009 5.5 3.50009 10.9C3.56009 11.7 4.06009 12.4 4.80009 12.7L6.50009 13.2V15.5C6.50009 15.6326 6.44741 15.7598 6.35364 15.8536C6.25988 15.9473 6.1327 16 6.00009 16C5.86748 16 5.7403 15.9473 5.64654 15.8536C5.55277 15.7598 5.50009 15.6326 5.50009 15.5C5.57009 14.92 5.08009 14.43 4.50009 14.5C3.92009 14.43 3.43009 14.92 3.50009 15.5C3.44009 16.86 4.54009 18 5.90009 18H6.00009C7.41009 18.06 8.56009 16.91 8.50009 15.5V13.7H9.50009V19.4C9.50009 20.07 8.50009 20.07 8.50009 19.4C8.57009 18.82 8.08009 18.33 7.50009 18.4C6.92009 18.33 6.43009 18.82 6.50009 19.4C6.39009 20.8 7.50009 22 8.90009 22H9.00009C10.4101 22.06 11.5601 20.91 11.5001 19.5V14H12.5001V19.5C12.4401 20.91 13.5901 22.06 15.0001 22H15.1001C16.4701 22 17.5601 20.86 17.5001 19.5C17.5001 18.17 15.5001 18.17 15.5001 19.5C15.5001 20.17 14.5001 20.17 14.5001 19.5V13.8H15.5001V15.6C15.5001 16.96 16.6301 18.06 18.0001 18H18.1001C19.4701 18 20.5601 16.86 20.5001 15.5C20.5001 14.17 18.5001 14.17 18.5001 15.5C18.5001 16.17 17.5001 16.17 17.5001 15.5V13.2L19.2001 12.7C19.9201 12.36 20.4101 11.68 20.5001 10.9C20.5001 5.5 16.7001 2 12.0001 2ZM12.0001 6.2C10.5301 6.6 9.24009 7.53 8.40009 8.8C8.00009 9.33 7.20009 8.73 7.60009 8.2C8.60009 6.73 10.0901 5.67 11.8001 5.2C12.0801 5.14 12.3501 5.32 12.4001 5.6C12.5001 5.9 12.3001 6.1 12.0001 6.2Z" />
    </Svg>
  );
};
