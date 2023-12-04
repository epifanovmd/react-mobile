import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SendLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M23 18V17.5C23 16.837 22.7366 16.2011 22.2678 15.7322C21.7989 15.2634 21.163 15 20.5 15C19.837 15 19.2011 15.2634 18.7322 15.7322C18.2634 16.2011 18 16.837 18 17.5V18C17.7348 18 17.4804 18.1054 17.2929 18.2929C17.1054 18.4804 17 18.7348 17 19V23C17 23.2652 17.1054 23.5196 17.2929 23.7071C17.4804 23.8946 17.7348 24 18 24H23C23.2652 24 23.5196 23.8946 23.7071 23.7071C23.8946 23.5196 24 23.2652 24 23V19C24 18.7348 23.8946 18.4804 23.7071 18.2929C23.5196 18.1054 23.2652 18 23 18ZM22 18H19V17.5C19 17.1022 19.158 16.7206 19.4393 16.4393C19.7206 16.158 20.1022 16 20.5 16C20.8978 16 21.2794 16.158 21.5607 16.4393C21.842 16.7206 22 17.1022 22 17.5V18ZM23 12L2 21V14L17 12L2 10V3L23 12Z" />
    </Svg>
  );
};
