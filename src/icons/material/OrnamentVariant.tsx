import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OrnamentVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 1C12.7956 1 13.5587 1.31607 14.1213 1.87868C14.6839 2.44129 15 3.20435 15 4V5C15.2652 5 15.5196 5.10536 15.7071 5.29289C15.8946 5.48043 16 5.73478 16 6V7.07C18.39 8.45 20 11.04 20 14C20 16.1217 19.1571 18.1566 17.6569 19.6569C16.1566 21.1571 14.1217 22 12 22C9.87827 22 7.84344 21.1571 6.34315 19.6569C4.84285 18.1566 4 16.1217 4 14C4 11.04 5.61 8.45 8 7.07V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5V4C9 3.20435 9.31607 2.44129 9.87868 1.87868C10.4413 1.31607 11.2044 1 12 1ZM12 3C11.7348 3 11.4804 3.10536 11.2929 3.29289C11.1054 3.48043 11 3.73478 11 4V5H13V4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3ZM12 8C10.22 8 8.63 8.77 7.53 10H16.47C15.37 8.77 13.78 8 12 8ZM12 20C13.78 20 15.37 19.23 16.47 18H7.53C8.63 19.23 10.22 20 12 20ZM12 12C11.4696 12 10.9609 12.2107 10.5858 12.5858C10.2107 12.9609 10 13.4696 10 14C10 14.5304 10.2107 15.0391 10.5858 15.4142C10.9609 15.7893 11.4696 16 12 16C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14C14 13.4696 13.7893 12.9609 13.4142 12.5858C13.0391 12.2107 12.5304 12 12 12ZM18 14C18 13.31 17.88 12.65 17.67 12C16.72 12.19 16 13 16 14C16 15 16.72 15.81 17.67 15.97C17.88 15.35 18 14.69 18 14ZM6 14C6 14.69 6.12 15.35 6.33 15.97C7.28 15.81 8 15 8 14C8 13 7.28 12.19 6.33 12C6.12 12.65 6 13.31 6 14Z" />
    </Svg>
  );
};
