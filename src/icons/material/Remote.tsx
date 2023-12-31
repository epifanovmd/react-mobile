import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RemoteIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 0C8.95997 0 6.20997 1.23 4.21997 3.22L5.62997 4.63C7.25997 3 9.49997 2 12 2C14.5 2 16.74 3 18.36 4.64L19.77 3.23C17.79 1.23 15.04 0 12 0ZM7.04997 6.05L8.45997 7.46C9.36997 6.56 10.62 6 12 6C13.38 6 14.63 6.56 15.54 7.46L16.95 6.05C15.68 4.78 13.93 4 12 4C10.07 4 8.31997 4.78 7.04997 6.05ZM12 15C11.4695 15 10.9608 14.7893 10.5858 14.4142C10.2107 14.0391 9.99997 13.5304 9.99997 13C9.99997 12.4696 10.2107 11.9609 10.5858 11.5858C10.9608 11.2107 11.4695 11 12 11C12.5304 11 13.0391 11.2107 13.4142 11.5858C13.7893 11.9609 14 12.4696 14 13C14 13.5304 13.7893 14.0391 13.4142 14.4142C13.0391 14.7893 12.5304 15 12 15ZM15 9H8.99997C8.73475 9 8.4804 9.10536 8.29286 9.29289C8.10533 9.48043 7.99997 9.73478 7.99997 10V22C7.99997 22.2652 8.10533 22.5196 8.29286 22.7071C8.4804 22.8946 8.73475 23 8.99997 23H15C15.2652 23 15.5195 22.8946 15.7071 22.7071C15.8946 22.5196 16 22.2652 16 22V10C16 9.73478 15.8946 9.48043 15.7071 9.29289C15.5195 9.10536 15.2652 9 15 9Z" />
    </Svg>
  );
};
