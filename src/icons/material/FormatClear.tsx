import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatClearIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M6 5V5.18L8.82 8H11.22L10.5 9.68L12.6 11.78L14.21 8H20V5H6ZM3.27 5L2 6.27L8.97 13.24L6.5 19H9.5L11.07 15.34L16.73 21L18 19.73L3.55 5.27L3.27 5Z" />
    </Svg>
  );
};
