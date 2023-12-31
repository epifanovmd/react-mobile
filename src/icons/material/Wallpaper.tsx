import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WallpaperIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 4H11V2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V11H4V4ZM10 13L6 18H18L15 14L12.97 16.71L10 13ZM17 8.5C17 8.10218 16.842 7.72064 16.5607 7.43934C16.2794 7.15804 15.8978 7 15.5 7C15.1022 7 14.7206 7.15804 14.4393 7.43934C14.158 7.72064 14 8.10218 14 8.5C14 8.89782 14.158 9.27936 14.4393 9.56066C14.7206 9.84196 15.1022 10 15.5 10C15.8978 10 16.2794 9.84196 16.5607 9.56066C16.842 9.27936 17 8.89782 17 8.5ZM20 2H13V4H20V11H22V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2ZM20 20H13V22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V13H20V20ZM4 13H2V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H11V20H4V13Z" />
    </Svg>
  );
};
