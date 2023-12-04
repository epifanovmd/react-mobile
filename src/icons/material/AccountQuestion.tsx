import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountQuestionIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 8C13 9.06087 12.5786 10.0783 11.8284 10.8284C11.0783 11.5786 10.0609 12 9 12C7.93913 12 6.92172 11.5786 6.17157 10.8284C5.42143 10.0783 5 9.06087 5 8C5 6.93913 5.42143 5.92172 6.17157 5.17157C6.92172 4.42143 7.93913 4 9 4C10.0609 4 11.0783 4.42143 11.8284 5.17157C12.5786 5.92172 13 6.93913 13 8ZM17 18V20H1V18C1 15.79 4.58 14 9 14C13.42 14 17 15.79 17 18ZM20.5 14.5V16H19V14.5H20.5ZM18.5 9.5H17V9C17 8.20435 17.3161 7.44129 17.8787 6.87868C18.4413 6.31607 19.2044 6 20 6C20.7956 6 21.5587 6.31607 22.1213 6.87868C22.6839 7.44129 23 8.20435 23 9C23 9.97 22.5 10.88 21.71 11.41L21.41 11.6C20.84 12 20.5 12.61 20.5 13.3V13.5H19V13.3C19 12.11 19.6 11 20.59 10.35L20.88 10.16C21.27 9.9 21.5 9.47 21.5 9C21.5 8.60218 21.342 8.22064 21.0607 7.93934C20.7794 7.65804 20.3978 7.5 20 7.5C19.6022 7.5 19.2206 7.65804 18.9393 7.93934C18.658 8.22064 18.5 8.60218 18.5 9V9.5Z" />
    </Svg>
  );
};
