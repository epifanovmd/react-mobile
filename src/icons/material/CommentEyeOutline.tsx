import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CommentEyeOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 6C16.56 6 17 6.44 17 7C17 7.56 16.56 8 16 8C15.44 8 15 7.56 15 7C15 6.44 15.44 6 16 6ZM16 3C18.73 3 21.06 4.66 22 7C21.06 9.34 18.73 11 16 11C13.27 11 10.94 9.34 10 7C10.94 4.66 13.27 3 16 3ZM16 4.5C15.337 4.5 14.7011 4.76339 14.2322 5.23223C13.7634 5.70107 13.5 6.33696 13.5 7C13.5 7.66304 13.7634 8.29893 14.2322 8.76777C14.7011 9.23661 15.337 9.5 16 9.5C16.663 9.5 17.2989 9.23661 17.7678 8.76777C18.2366 8.29893 18.5 7.66304 18.5 7C18.5 6.33696 18.2366 5.70107 17.7678 5.23223C17.2989 4.76339 16.663 4.5 16 4.5ZM18 12.75V16H13.08L10 19.08V16H4V6H8.27C8.59 5.27 9 4.6 9.5 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V16C2 17.11 2.9 18 4 18H8V21C8 21.2652 8.10536 21.5196 8.29289 21.7071C8.48043 21.8946 8.73478 22 9 22H9.5C9.75 22 10 21.9 10.2 21.71L13.9 18H18C19.11 18 20 17.11 20 16V12C19.37 12.33 18.7 12.58 18 12.75Z" />
    </Svg>
  );
};
