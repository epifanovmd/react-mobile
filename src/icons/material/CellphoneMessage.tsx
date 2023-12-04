import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CellphoneMessageIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 17V7H4V17H11ZM11 3C11.5304 3 12.0391 3.21071 12.4142 3.58579C12.7893 3.96086 13 4.46957 13 5V19C13 19.5304 12.7893 20.0391 12.4142 20.4142C12.0391 20.7893 11.5304 21 11 21H4C2.89 21 2 20.1 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H11ZM16.5 3H21.5C21.8978 3 22.2794 3.15804 22.5607 3.43934C22.842 3.72064 23 4.10218 23 4.5V7.5C23 7.89782 22.842 8.27936 22.5607 8.56066C22.2794 8.84196 21.8978 9 21.5 9H18L15 12V9V4.5C15 4.10218 15.158 3.72064 15.4393 3.43934C15.7206 3.15804 16.1022 3 16.5 3Z" />
    </Svg>
  );
};
