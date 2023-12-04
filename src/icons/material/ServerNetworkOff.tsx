import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ServerNetworkOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 19H14C14.2652 19 14.5196 19.1054 14.7071 19.2929C14.8946 19.4804 15 19.7348 15 20H15.73L13 17.27V19ZM22 20V21.18L20.82 20H22ZM21 22.72L19.73 24L17.73 22H15C15 22.2652 14.8946 22.5196 14.7071 22.7071C14.5196 22.8946 14.2652 23 14 23H10C9.73478 23 9.48043 22.8946 9.29289 22.7071C9.10536 22.5196 9 22.2652 9 22H2V20H9C9 19.7348 9.10536 19.4804 9.29289 19.2929C9.48043 19.1054 9.73478 19 10 19H11V17H4C3.73478 17 3.48043 16.8946 3.29289 16.7071C3.10536 16.5196 3 16.2652 3 16V12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11H6.73L4.73 9H4C3.73478 9 3.48043 8.89464 3.29289 8.70711C3.10536 8.51957 3 8.26522 3 8V7.27L1 5.27L2.28 4L21 22.72ZM4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V8C21 8.26522 20.8946 8.51957 20.7071 8.70711C20.5196 8.89464 20.2652 9 20 9H9.82L7 6.18V5H5.82L3.84 3C3.89 3 3.94 3 4 3ZM20 11C20.2652 11 20.5196 11.1054 20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12V16C21 16.2652 20.8946 16.5196 20.7071 16.7071C20.5196 16.8946 20.2652 17 20 17H17.82L11.82 11H20ZM9 7H10V5H9V7ZM9 15H10V14.27L9 13.27V15ZM5 13V15H7V13H5Z" />
    </Svg>
  );
};
