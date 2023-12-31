import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PhoneCheckOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 15.5C18.7872 15.5018 17.5819 15.3094 16.43 14.93C16.2563 14.8769 16.0715 14.8722 15.8953 14.9162C15.7191 14.9603 15.5583 15.0515 15.43 15.18L13.23 17.38C10.3934 15.9331 8.08687 13.6266 6.64 10.79L8.84 8.59C8.96854 8.46173 9.05973 8.30087 9.10377 8.12469C9.14782 7.94852 9.14305 7.76367 9.09 7.59C8.70174 6.4328 8.50252 5.22059 8.5 4C8.5 3.73478 8.39464 3.48043 8.20711 3.29289C8.01957 3.10536 7.76522 3 7.5 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4C3 8.50868 4.79107 12.8327 7.97918 16.0208C11.1673 19.2089 15.4913 21 20 21C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V16.5C21 16.2348 20.8946 15.9804 20.7071 15.7929C20.5196 15.6054 20.2652 15.5 20 15.5ZM5 5H6.54C6.60211 5.87707 6.75629 6.74518 7 7.59L5.79 8.8C5.36321 7.57289 5.09766 6.29553 5 5ZM19 19C17.7058 18.912 16.4285 18.6566 15.2 18.24L16.41 17C17.2548 17.242 18.1231 17.3929 19 17.45V19ZM15 11.44L11.29 7.74L12.71 6.32L15 8.59L20.29 3.29L21.71 4.71L15 11.44Z" />
    </Svg>
  );
};
