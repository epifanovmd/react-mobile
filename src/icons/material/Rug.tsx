import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RugIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 14C10.9 14 10 13.11 10 12C10 10.89 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.11 14 12 14ZM23 19H1V17H4V15H1V13H4V11H1V9H4V7H1V5H23V7H20V9H23V11H20V13H23V15H20V17H23V19ZM12 15.92C12.62 16.62 13.66 16.81 14.5 16.33C15.34 15.85 15.69 14.84 15.4 13.96C16.31 13.78 17 12.97 17 12C17 11.03 16.31 10.22 15.4 10.04C15.69 9.16 15.34 8.15 14.5 7.67C13.66 7.19 12.62 7.38 12 8.08C11.38 7.38 10.34 7.19 9.5 7.67C8.66 8.15 8.31 9.16 8.61 10.04C7.69 10.22 7 11.03 7 12C7 12.97 7.69 13.78 8.61 13.96C8.31 14.84 8.66 15.85 9.5 16.33C10.34 16.82 11.38 16.62 12 15.92Z" />
    </Svg>
  );
};
