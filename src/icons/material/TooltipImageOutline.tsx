import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TooltipImageOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H16L12 22L8 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2ZM4 4V16H8.83L12 19.17L15.17 16H20V4H4ZM7.5 6C7.89782 6 8.27936 6.15804 8.56066 6.43934C8.84196 6.72064 9 7.10218 9 7.5C9 7.89782 8.84196 8.27936 8.56066 8.56066C8.27936 8.84196 7.89782 9 7.5 9C7.10218 9 6.72064 8.84196 6.43934 8.56066C6.15804 8.27936 6 7.89782 6 7.5C6 7.10218 6.15804 6.72064 6.43934 6.43934C6.72064 6.15804 7.10218 6 7.5 6ZM6 14L11 9L13 11L18 6V14H6Z" />
    </Svg>
  );
};
