import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScissorsCuttingIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 20.9994H7V18.9994H11V20.9994ZM15.5 18.9994H17V20.9994H13V18.9994H13.2L11.8 12.8994L9.3 13.4994C9.2 13.9994 9 14.3994 8.8 14.7994C7.9 16.2994 6 16.6994 4.5 15.7994C3 14.8994 2.6 12.9994 3.5 11.4994C4.4 9.99939 6.3 9.59939 7.8 10.4994C8.2 10.6994 8.5 11.0994 8.7 11.3994L11.2 10.7994L10.6 8.29939C10.2 8.19939 9.8 7.99939 9.4 7.79939C8 6.89939 7.5 4.99939 8.4 3.49939C9.3 1.99939 11.2 1.59939 12.7 2.49939C14.2 3.39939 14.6 5.29939 13.7 6.79939C13.5 7.19939 13.1 7.49939 12.8 7.69939L15.5 18.9994ZM7 11.7994C6.3 11.2994 5.3 11.5994 4.8 12.2994C4.3 12.9994 4.6 13.9994 5.3 14.3994C6 14.8994 7 14.6994 7.5 13.8994C7.9 13.1994 7.7 12.1994 7 11.7994ZM12.4 5.99939C12.9 5.29939 12.6 4.29939 11.9 3.79939C11.2 3.29939 10.2 3.59939 9.7 4.29939C9.3 4.99939 9.5 5.99939 10.3 6.49939C11 6.89939 12 6.69939 12.4 5.99939ZM12.8 11.2994C12.6 11.1994 12.4 11.1994 12.3 11.3994C12.2 11.5994 12.2 11.7994 12.4 11.8994C12.6 11.9994 12.8 11.9994 12.9 11.7994C13.1 11.5994 13 11.3994 12.8 11.2994ZM21 8.49939L14.5 9.99939L15 12.1994L22.5 10.3994L23 9.69939L21 8.49939ZM23 18.9994H19V20.9994H23V18.9994ZM5 18.9994H1V20.9994H5V18.9994Z" />
    </Svg>
  );
};
