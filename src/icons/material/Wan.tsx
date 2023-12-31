import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WanIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 14.03 7 17.42 11 17.93V19H10C9.73478 19 9.48043 19.1054 9.29289 19.2929C9.10536 19.4804 9 19.7348 9 20H2V22H9C9 22.2652 9.10536 22.5196 9.29289 22.7071C9.48043 22.8946 9.73478 23 10 23H14C14.2652 23 14.5196 22.8946 14.7071 22.7071C14.8946 22.5196 15 22.2652 15 22H22V20H15C15 19.7348 14.8946 19.4804 14.7071 19.2929C14.5196 19.1054 14.2652 19 14 19H13V17.93C17 17.43 20 14.03 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2ZM12 4C12 4 12.74 5.28 13.26 7H10.74C11.26 5.28 12 4 12 4ZM9.77 4.43C9.5 4.93 9.09 5.84 8.74 7H6.81C7.5 5.84 8.5 4.93 9.77 4.43ZM14.23 4.44C15.5 4.94 16.5 5.84 17.19 7H15.26C14.91 5.84 14.5 4.93 14.23 4.44ZM6.09 9H8.32C8.28 9.33 8.25 9.66 8.25 10C8.25 10.34 8.28 10.67 8.32 11H6.09C6.03 10.67 6 10.34 6 10C6 9.66 6.03 9.33 6.09 9ZM10.32 9H13.68C13.72 9.33 13.75 9.66 13.75 10C13.75 10.34 13.72 10.67 13.68 11H10.32C10.28 10.67 10.25 10.34 10.25 10C10.25 9.66 10.28 9.33 10.32 9ZM15.68 9H17.91C17.97 9.33 18 9.66 18 10C18 10.34 17.97 10.67 17.91 11H15.68C15.72 10.67 15.75 10.34 15.75 10C15.75 9.66 15.72 9.33 15.68 9ZM6.81 13H8.74C9.09 14.16 9.5 15.07 9.77 15.56C8.5 15.06 7.5 14.16 6.81 13ZM10.74 13H13.26C12.74 14.72 12 16 12 16C12 16 11.26 14.72 10.74 13ZM15.26 13H17.19C16.5 14.16 15.5 15.07 14.23 15.57C14.5 15.07 14.91 14.16 15.26 13Z" />
    </Svg>
  );
};
