import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const YoutubeStudioIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.0001 15L15.0001 12L10.0001 9V15ZM19.4501 13L21.5601 14.63C21.7801 14.78 21.8101 15 21.6601 15.28L19.6401 18.75C19.5001 18.97 19.3101 19.03 19.0301 18.94L16.5501 17.95C15.8901 18.42 15.3301 18.75 14.8601 18.94L14.5001 21.56C14.4201 21.84 14.2701 22 14.0001 22H10.0001C9.73011 22 9.58011 21.84 9.50011 21.56L9.14011 18.94C8.55011 18.69 8.00011 18.36 7.45011 17.95L4.97011 18.94C4.69011 19.03 4.50011 18.97 4.36011 18.75L2.34011 15.28C2.19011 15 2.22011 14.78 2.44011 14.63L4.55011 13C4.50011 12.77 4.50011 12.44 4.50011 12C4.50011 11.56 4.50011 11.23 4.55011 11L2.44011 9.38C2.22011 9.22 2.19011 9 2.34011 8.72L4.36011 5.25C4.50011 5.03 4.69011 4.97 4.97011 5.06L7.45011 6.05C8.11011 5.58 8.67011 5.25 9.14011 5.06L9.50011 2.44C9.58011 2.16 9.73011 2 10.0001 2H14.0001C14.2701 2 14.4201 2.16 14.5001 2.44L14.8601 5.06C15.4501 5.31 16.0001 5.64 16.5501 6.05L19.0301 5.06C19.3101 4.97 19.5001 5.03 19.6401 5.25L21.6601 8.72C21.8101 9 21.7801 9.22 21.5601 9.38L19.4501 11C19.5001 11.23 19.5001 11.56 19.5001 12C19.5001 12.44 19.5001 12.77 19.4501 13Z" />
    </Svg>
  );
};
