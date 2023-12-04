import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const JqueryIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.88 10.4094C20.77 12.1794 17.61 11.8994 15.84 9.78938C14.06 7.66938 14.34 4.49938 16.45 2.74938L16.96 2.36937C15.27 4.18938 15.16 7.02938 16.8 8.99938C18.43 10.9394 21.25 11.3194 23.34 9.96938L22.88 10.4094ZM21.1 14.4994C17.93 17.1694 13.2 16.7594 10.54 13.5794C7.87001 10.4094 8.29001 5.67938 11.46 2.99938L12.38 2.35938C9.96001 5.08938 9.84001 9.25938 12.26 12.1394C14.68 14.9994 18.8 15.6294 21.91 13.7194L21.1 14.4994ZM19.97 19.3794C15.53 23.1094 8.90001 22.5294 5.17001 18.0794C1.45001 13.6394 2.03001 6.99938 6.47001 3.28938L7.58001 2.49938C4.07001 6.29938 3.85001 12.2294 7.28001 16.3194C10.71 20.3994 16.59 21.2194 20.96 18.4294L19.97 19.3794Z" />
    </Svg>
  );
};
