import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BallotRecountOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 18V13H11V18H6ZM7 14V17H10V14H7ZM13 7.5H18V9.5H13V7.5ZM5 21C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V11.17C20.5 11.06 20 11 19.5 11H19V5H5V19H13.17C13.34 19.72 13.63 20.39 14 21H5ZM11 6V11H6V6H11ZM10 10V7H7V10H10ZM19 12V13.5C20.0609 13.5 21.0783 13.9214 21.8284 14.6716C22.5786 15.4217 23 16.4391 23 17.5C23 18.32 22.75 19.08 22.33 19.71L21.24 18.62C21.41 18.28 21.5 17.9 21.5 17.5C21.5 16.837 21.2366 16.2011 20.7678 15.7322C20.2989 15.2634 19.663 15 19 15V16.5L16.75 14.25L19 12ZM19 23V21.5C17.9391 21.5 16.9217 21.0786 16.1716 20.3284C15.4214 19.5783 15 18.5609 15 17.5C15 16.68 15.25 15.92 15.67 15.29L16.76 16.38C16.59 16.72 16.5 17.1 16.5 17.5C16.5 18.163 16.7634 18.7989 17.2322 19.2678C17.7011 19.7366 18.337 20 19 20V18.5L21.25 20.75L19 23Z" />
    </Svg>
  );
};
