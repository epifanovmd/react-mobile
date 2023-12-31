import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CameraWirelessIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 10.8C12.8487 10.8 13.6626 11.1371 14.2627 11.7373C14.8629 12.3374 15.2 13.1513 15.2 14C15.2 14.8487 14.8629 15.6626 14.2627 16.2627C13.6626 16.8629 12.8487 17.2 12 17.2C11.1513 17.2 10.3374 16.8629 9.73726 16.2627C9.13714 15.6626 8.8 14.8487 8.8 14C8.8 13.1513 9.13714 12.3374 9.73726 11.7373C10.3374 11.1371 11.1513 10.8 12 10.8ZM16 3.33V2C17.5913 2 19.1174 2.63214 20.2426 3.75736C21.3679 4.88258 22 6.4087 22 8H20.67C20.67 5.42 18.58 3.33 16 3.33ZM16 6V4.67C17.84 4.67 19.33 6.16 19.33 8H18C18 6.89 17.11 6 16 6ZM17 9H22V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H7.17L9 4H15V7C16.11 7 17 7.89 17 9ZM12 19C13.3261 19 14.5979 18.4732 15.5355 17.5355C16.4732 16.5979 17 15.3261 17 14C17 12.6739 16.4732 11.4021 15.5355 10.4645C14.5979 9.52678 13.3261 9 12 9C10.6739 9 9.40215 9.52678 8.46447 10.4645C7.52678 11.4021 7 12.6739 7 14C7 15.3261 7.52678 16.5979 8.46447 17.5355C9.40215 18.4732 10.6739 19 12 19Z" />
    </Svg>
  );
};
