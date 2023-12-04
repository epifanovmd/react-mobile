import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ControllerClassicIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 7H18C18.6566 7 19.3068 7.12933 19.9134 7.3806C20.52 7.63188 21.0712 8.00017 21.5355 8.46447C21.9998 8.92876 22.3681 9.47996 22.6194 10.0866C22.8707 10.6932 23 11.3434 23 12C23 12.6566 22.8707 13.3068 22.6194 13.9134C22.3681 14.52 21.9998 15.0712 21.5355 15.5355C21.0712 15.9998 20.52 16.3681 19.9134 16.6194C19.3068 16.8707 18.6566 17 18 17C16.36 17 14.91 16.21 14 15H10C9.09 16.21 7.64 17 6 17C5.34339 17 4.69321 16.8707 4.08658 16.6194C3.47995 16.3681 2.92876 15.9998 2.46447 15.5355C1.52678 14.5979 1 13.3261 1 12C1 10.6739 1.52678 9.40215 2.46447 8.46447C3.40215 7.52678 4.67392 7 6 7ZM19.75 9.5C19.4185 9.5 19.1005 9.6317 18.8661 9.86612C18.6317 10.1005 18.5 10.4185 18.5 10.75C18.5 10.9142 18.5323 11.0767 18.5951 11.2284C18.658 11.38 18.75 11.5178 18.8661 11.6339C18.9822 11.75 19.12 11.842 19.2716 11.9048C19.4233 11.9677 19.5858 12 19.75 12C19.9142 12 20.0767 11.9677 20.2284 11.9048C20.38 11.842 20.5178 11.75 20.6339 11.6339C20.75 11.5178 20.842 11.38 20.9049 11.2284C20.9677 11.0767 21 10.9142 21 10.75C21 10.4185 20.8683 10.1005 20.6339 9.86612C20.3995 9.6317 20.0815 9.5 19.75 9.5ZM17.25 12C16.9185 12 16.6005 12.1317 16.3661 12.3661C16.1317 12.6005 16 12.9185 16 13.25C16 13.5815 16.1317 13.8995 16.3661 14.1339C16.6005 14.3683 16.9185 14.5 17.25 14.5C17.5815 14.5 17.8995 14.3683 18.1339 14.1339C18.3683 13.8995 18.5 13.5815 18.5 13.25C18.5 12.9185 18.3683 12.6005 18.1339 12.3661C17.8995 12.1317 17.5815 12 17.25 12ZM5 9V11H3V13H5V15H7V13H9V11H7V9H5Z" />
    </Svg>
  );
};
