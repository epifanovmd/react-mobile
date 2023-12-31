import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CommentSearchOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 4H9.5C9.25 4.64 9.09 5.31 9.04 6H4V16H10V19.08L13.08 16H18V13.23L20 15.23V16C20 16.5304 19.7893 17.0391 19.4142 17.4142C19.0391 17.7893 18.5304 18 18 18H13.9L10.2 21.71C10 21.9 9.75 22 9.5 22H9C8.73478 22 8.48043 21.8946 8.29289 21.7071C8.10536 21.5196 8 21.2652 8 21V18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V6C2 4.89 2.9 4 4 4ZM15.5 2C18 2 20 4 20 6.5C20 7.38 19.75 8.2 19.31 8.89L22.41 12L21 13.39L17.89 10.31C17.2 10.75 16.38 11 15.5 11C13 11 11 9 11 6.5C11 4 13 2 15.5 2ZM15.5 4C14.837 4 14.2011 4.26339 13.7322 4.73223C13.2634 5.20107 13 5.83696 13 6.5C13 7.16304 13.2634 7.79893 13.7322 8.26777C14.2011 8.73661 14.837 9 15.5 9C16.163 9 16.7989 8.73661 17.2678 8.26777C17.7366 7.79893 18 7.16304 18 6.5C18 5.83696 17.7366 5.20107 17.2678 4.73223C16.7989 4.26339 16.163 4 15.5 4Z" />
    </Svg>
  );
};
