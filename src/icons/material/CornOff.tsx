import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CornOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1 21.5002L2.39998 1.7002L1.09998 3.0002L7.19998 9.1002C7.09998 9.7002 6.99998 10.3002 6.99998 11.0002C5.49998 10.4002 3.79998 10.0002 1.99998 10.0002C7.89998 12.6002 5.99998 22.0002 12 22.0002C14.5 22.0002 15.7 20.5002 16.6 18.5002L20.9 22.8002L22.1 21.5002ZM8.09998 10.0002L9.09998 11.0002H7.99998L8.09998 10.0002ZM8.79998 12.0002H10.1L11 12.9002V13.7002C10.3 13.1002 9.59998 12.5002 8.79998 12.0002ZM14.3 19.2002C14.1 18.0002 13.4 16.4002 12.2 15.0002H13.1L15.2 17.1002C15 17.9002 14.7 18.6002 14.3 19.2002ZM11 6.0002V7.8002L12.2 9.0002H14V8.0002H12V6.0002H13V5.0002H12V3.0002C14.1 3.0002 15.9 7.0002 16 11.8002V12.8002L18 14.8002C18.8 12.8002 19.9 10.9002 22 10.0002C20.2 10.0002 18.5 10.4002 17 11.1002C16.8 5.9002 14.7 2.0002 12 2.0002C10.5 2.0002 9.19998 3.2002 8.29998 5.1002L9.19998 6.0002H11ZM11 3.3002V5.0002H9.49998C9.99998 4.2002 10.5 3.6002 11 3.3002ZM15 11.8002L14.2 11.0002H15V11.8002Z" />
    </Svg>
  );
};
