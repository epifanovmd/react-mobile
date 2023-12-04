import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SelectMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 12H20V14H18V12ZM14 16H16V18H14V16ZM20 17C20 17.55 19.55 18 19 18H18V16H20V17ZM7 4H8V6H6V5C6 4.45 6.45 4 7 4ZM19 4C19.55 4 20 4.45 20 5V6H18V4H19ZM14 6V4H16V6H14ZM10 6V4H12V6H10ZM10 18V16H12V18H10ZM7 18C6.45 18 6 17.55 6 17V16H8V18H7ZM6 12H8V14H6V12ZM6 8H8V10H6V8ZM20 8V10H18V8H20ZM3 8H4V20H16V21C16 21.54 15.57 22 15.03 22H15H3C2.45 22 2 21.55 2 21V9C2 8.45 2.45 8 3 8Z" />
    </Svg>
  );
};
