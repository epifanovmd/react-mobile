import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RailroadLightIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.6699 10.5C16.3999 10.5 15.2699 11.3 14.8499 12.5H13.1699V7.77L16.6599 9.86L17.6599 8.14L14.1099 6L17.6799 3.86L16.6799 2.14L13.1699 4.23V2H11.1699V4.23L7.67991 2.14L6.67991 3.86L10.2299 6L6.65991 8.14L7.65991 9.86L11.1699 7.77V12.5H9.49991C8.35991 9.32 3.65991 10.13 3.65991 13.5C3.65991 16.87 8.35991 17.68 9.49991 14.5H11.1699V20C10.6395 20 10.1308 20.2107 9.7557 20.5858C9.38063 20.9609 9.16991 21.4696 9.16991 22H15.1699C15.1699 21.4696 14.9592 20.9609 14.5841 20.5858C14.2091 20.2107 13.7003 20 13.1699 20V14.5H14.8499C15.6599 16.8 18.7299 17.22 20.1299 15.23C21.5299 13.24 20.0999 10.5 17.6699 10.5ZM6.66991 14.5C5.77991 14.5 5.32991 13.42 5.95991 12.79C6.58991 12.16 7.66991 12.61 7.66991 13.5C7.66991 13.7652 7.56456 14.0196 7.37702 14.2071C7.18948 14.3946 6.93513 14.5 6.66991 14.5ZM17.6699 14.5C16.7799 14.5 16.3299 13.42 16.9599 12.79C17.5899 12.16 18.6699 12.61 18.6699 13.5C18.6699 13.7652 18.5646 14.0196 18.377 14.2071C18.1895 14.3946 17.9351 14.5 17.6699 14.5Z" />
    </Svg>
  );
};
