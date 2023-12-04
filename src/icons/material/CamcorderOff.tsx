import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CamcorderOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1001 21.4998L9.4001 8.7998L2.4001 1.7998L1.1001 2.9998L2.7001 4.5998C2.2001 5.2998 2.0001 6.0998 2.0001 6.9998V19.9998C2.0001 21.0998 2.9001 21.9998 4.0001 21.9998H10.0001C11.1001 21.9998 12.0001 21.0998 12.0001 19.9998V13.8998L13.0001 14.8998V15.9998H14.1001L20.8001 22.6998L22.1001 21.4998ZM5.0001 19.9998C4.5001 19.9998 4.0001 19.4998 4.0001 18.9998C4.0001 18.4998 4.5001 17.9998 5.0001 17.9998C5.5001 17.9998 6.0001 18.4998 6.0001 18.9998C6.0001 19.4998 5.5001 19.9998 5.0001 19.9998ZM7.0001 9.9998C5.3001 9.9998 4.0001 8.6998 4.0001 6.9998C4.0001 6.6998 4.1001 6.39981 4.2001 6.0998L8.0001 9.8998C7.6001 9.8998 7.3001 9.9998 7.0001 9.9998ZM7.2001 3.9998L5.5001 2.2998C6.0001 2.0998 6.5001 1.9998 7.0001 1.9998C9.8001 1.9998 12.0001 4.1998 12.0001 6.9998V8.7998L10.0001 6.7998C9.9001 5.2998 8.7001 4.0998 7.2001 3.9998ZM20.0001 8.9998H13.0001V6.9998H20.0001C21.1001 6.9998 22.0001 7.8998 22.0001 8.9998V13.9998C22.0001 15.0998 21.1001 15.9998 20.0001 15.9998H19.2001L17.2001 13.9998H20.0001V8.9998Z" />
    </Svg>
  );
};
