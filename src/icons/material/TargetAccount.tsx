import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TargetAccountIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.95 11H22.5V13H20.95C20.5 17.17 17.17 20.5 13 20.95V22.5H11V20.95C6.83 20.5 3.5 17.17 3.05 13H1.5V11H3.05C3.5 6.83 6.83 3.5 11 3.05V1.5H13V3.05C17.17 3.5 20.5 6.83 20.95 11ZM5.07 11H6.5V13H5.07C5.5 16.07 7.93 18.5 11 18.93V17.5H13V18.93C16.07 18.5 18.5 16.07 18.93 13H17.5V11H18.93C18.5 7.93 16.07 5.5 13 5.07V6.5H11V5.07C7.93 5.5 5.5 7.93 5.07 11ZM16 16H8V15C8 13.67 10.67 13 12 13C13.33 13 16 13.67 16 15V16ZM12 8C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12C11.4696 12 10.9609 11.7893 10.5858 11.4142C10.2107 11.0391 10 10.5304 10 10C10 9.46957 10.2107 8.96086 10.5858 8.58579C10.9609 8.21071 11.4696 8 12 8Z" />
    </Svg>
  );
};
