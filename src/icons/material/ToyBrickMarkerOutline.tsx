import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ToyBrickMarkerOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.5 12C17.575 12.0104 16.6908 12.3825 16.0366 13.0366C15.3825 13.6908 15.0104 14.575 15 15.5C15 18.1 18.5 22 18.5 22C18.5 22 22 18.1 22 15.5C21.9896 14.575 21.6175 13.6908 20.9634 13.0366C20.3092 12.3825 19.425 12.0104 18.5 12ZM18.5 16.8C18.1817 16.8 17.8765 16.6736 17.6515 16.4485C17.4264 16.2235 17.3 15.9183 17.3 15.6C17.3 15.2817 17.4264 14.9765 17.6515 14.7515C17.8765 14.5264 18.1817 14.4 18.5 14.4C18.8113 14.4211 19.1045 14.5542 19.3251 14.7749C19.5458 14.9955 19.6789 15.2887 19.7 15.6C19.7071 15.7595 19.6809 15.9187 19.6231 16.0675C19.5653 16.2163 19.4772 16.3514 19.3643 16.4643C19.2514 16.5772 19.1163 16.6653 18.9675 16.7231C18.8187 16.7809 18.6595 16.8071 18.5 16.8ZM19 6V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V6H11V5C11 4.46957 10.7893 3.96086 10.4142 3.58579C10.0391 3.21071 9.53043 3 9 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V6H3V20H14.54C14.1591 19.3582 13.8249 18.6898 13.54 18H5V8H19V10C19.7009 10.0602 20.3817 10.2645 21 10.6V6H19Z" />
    </Svg>
  );
};
