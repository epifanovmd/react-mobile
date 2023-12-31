import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BadgeAccountAlertOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 3H12V5H15V21H5V5H8V3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V21C3 21.5304 3.21071 22.0391 3.58579 22.4142C3.96086 22.7893 4.46957 23 5 23H15C15.5304 23 16.0391 22.7893 16.4142 22.4142C16.7893 22.0391 17 21.5304 17 21V5C17 4.46957 16.7893 3.96086 16.4142 3.58579C16.0391 3.21071 15.5304 3 15 3ZM10 7C10.5304 7 11.0391 7.21071 11.4142 7.58579C11.7893 7.96086 12 8.46957 12 9C12 9.53043 11.7893 10.0391 11.4142 10.4142C11.0391 10.7893 10.5304 11 10 11C9.46957 11 8.96086 10.7893 8.58579 10.4142C8.21071 10.0391 8 9.53043 8 9C8 8.46957 8.21071 7.96086 8.58579 7.58579C8.96086 7.21071 9.46957 7 10 7ZM14 15H6V14C6 12.67 8.67 12 10 12C11.33 12 14 12.67 14 14V15ZM14 18H6V17H14V18ZM10 20H6V19H10V20ZM11 5H9V1H11V5ZM19 13V7H21V13H19ZM19 17V15H21V17H19Z" />
    </Svg>
  );
};
