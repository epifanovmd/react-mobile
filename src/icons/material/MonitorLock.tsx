import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MonitorLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.5 13C21.163 13 21.7989 13.2634 22.2678 13.7322C22.7366 14.2011 23 14.837 23 15.5V16C23.2652 16 23.5196 16.1054 23.7071 16.2929C23.8946 16.4804 24 16.7348 24 17V21C24 21.2652 23.8946 21.5196 23.7071 21.7071C23.5196 21.8946 23.2652 22 23 22H18C17.7348 22 17.4804 21.8946 17.2929 21.7071C17.1054 21.5196 17 21.2652 17 21V17C17 16.7348 17.1054 16.4804 17.2929 16.2929C17.4804 16.1054 17.7348 16 18 16V15.5C18 14.837 18.2634 14.2011 18.7322 13.7322C19.2011 13.2634 19.837 13 20.5 13ZM20.5 14C20.1022 14 19.7206 14.158 19.4393 14.4393C19.158 14.7206 19 15.1022 19 15.5V16H22V15.5C22 15.1022 21.842 14.7206 21.5607 14.4393C21.2794 14.158 20.8978 14 20.5 14ZM20 4H2V16H15V18H13V20H15V22H7V20H9V18H2C0.89 18 0 17.1 0 16V4C0 2.89 0.89 2 2 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V11.53C21.41 11.19 20.73 11 20 11V4Z" />
    </Svg>
  );
};
