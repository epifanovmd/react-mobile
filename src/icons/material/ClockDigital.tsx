import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClockDigitalIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 6C1.46957 6 0.960859 6.21071 0.585786 6.58579C0.210714 6.96086 0 7.46957 0 8L0 16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H22C22.5304 18 23.0391 17.7893 23.4142 17.4142C23.7893 17.0391 24 16.5304 24 16V8C24 7.46957 23.7893 6.96086 23.4142 6.58579C23.0391 6.21071 22.5304 6 22 6H2ZM2 8H22V16H2V8ZM3 9V10.5H6.25L3 15H4.75L8 10.5V9H3ZM9.25 9V10.5H10.75V9H9.25ZM12 9V10.5H13.5V15H15V9H12ZM17 9C16.7348 9 16.4804 9.10536 16.2929 9.29289C16.1054 9.48043 16 9.73478 16 10V14C16 14.2652 16.1054 14.5196 16.2929 14.7071C16.4804 14.8946 16.7348 15 17 15H20C20.2652 15 20.5196 14.8946 20.7071 14.7071C20.8946 14.5196 21 14.2652 21 14V10C21 9.73478 20.8946 9.48043 20.7071 9.29289C20.5196 9.10536 20.2652 9 20 9H17ZM17.5 10.5H19.5V13.5H17.5V10.5ZM9.25 13.5V15H10.75V13.5" />
    </Svg>
  );
};
