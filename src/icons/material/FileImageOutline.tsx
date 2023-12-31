import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileImageOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 2L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H14ZM18 20V9H13V4H6V20H18ZM17 13V19H7L12 14L14 16L17 13ZM10 10.5C10 10.8978 9.84196 11.2794 9.56066 11.5607C9.27936 11.842 8.89782 12 8.5 12C8.10218 12 7.72064 11.842 7.43934 11.5607C7.15804 11.2794 7 10.8978 7 10.5C7 10.1022 7.15804 9.72064 7.43934 9.43934C7.72064 9.15804 8.10218 9 8.5 9C8.89782 9 9.27936 9.15804 9.56066 9.43934C9.84196 9.72064 10 10.1022 10 10.5Z" />
    </Svg>
  );
};
