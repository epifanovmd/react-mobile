import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TrackpadLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 1C1.89 1 1 1.89 1 3V17C1 18.11 1.89 19 3 19H14V17H12V13H16.68C17.5 12.35 18.47 12 19.5 12C20 12 20.5 12.09 21 12.26V3C21 1.89 20.11 1 19 1H3ZM3 3H19V11H3V3ZM3 13H10V17H3V13ZM19.5 14C18.837 14 18.2011 14.2634 17.7322 14.7322C17.2634 15.2011 17 15.837 17 16.5V17C16.7348 17 16.4804 17.1054 16.2929 17.2929C16.1054 17.4804 16 17.7348 16 18V22C16 22.2652 16.1054 22.5196 16.2929 22.7071C16.4804 22.8946 16.7348 23 17 23H22C22.2652 23 22.5196 22.8946 22.7071 22.7071C22.8946 22.5196 23 22.2652 23 22V18C23 17.7348 22.8946 17.4804 22.7071 17.2929C22.5196 17.1054 22.2652 17 22 17V16.5C22 15.837 21.7366 15.2011 21.2678 14.7322C20.7989 14.2634 20.163 14 19.5 14ZM19.5 15C19.8978 15 20.2794 15.158 20.5607 15.4393C20.842 15.7206 21 16.1022 21 16.5V17H18V16.5C18 16.1022 18.158 15.7206 18.4393 15.4393C18.7206 15.158 19.1022 15 19.5 15Z" />
    </Svg>
  );
};
