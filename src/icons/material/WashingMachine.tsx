import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WashingMachineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.83 11.17C16.39 12.73 16.39 15.27 14.83 16.83C13.27 18.39 10.73 18.39 9.17 16.83L14.83 11.17ZM6 2H18C18.5304 2 19.0391 2.21071 19.4142 2.58579C19.7893 2.96086 20 3.46957 20 4V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2ZM7 4C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5C6 5.26522 6.10536 5.51957 6.29289 5.70711C6.48043 5.89464 6.73478 6 7 6C7.26522 6 7.51957 5.89464 7.70711 5.70711C7.89464 5.51957 8 5.26522 8 5C8 4.73478 7.89464 4.48043 7.70711 4.29289C7.51957 4.10536 7.26522 4 7 4ZM10 4C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5C9 5.26522 9.10536 5.51957 9.29289 5.70711C9.48043 5.89464 9.73478 6 10 6C10.2652 6 10.5196 5.89464 10.7071 5.70711C10.8946 5.51957 11 5.26522 11 5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4ZM12 8C10.4087 8 8.88258 8.63214 7.75736 9.75736C6.63214 10.8826 6 12.4087 6 14C6 15.5913 6.63214 17.1174 7.75736 18.2426C8.88258 19.3679 10.4087 20 12 20C13.5913 20 15.1174 19.3679 16.2426 18.2426C17.3679 17.1174 18 15.5913 18 14C18 12.4087 17.3679 10.8826 16.2426 9.75736C15.1174 8.63214 13.5913 8 12 8Z" />
    </Svg>
  );
};
