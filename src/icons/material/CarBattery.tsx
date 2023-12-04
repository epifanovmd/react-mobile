import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarBatteryIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 3V6H1V20H23V6H20V3H14V6H10V3H4ZM3 8H21V18H3V8ZM15 10V12H13V14H15V16H17V14H19V12H17V10H15ZM5 12V14H11V12H5Z" />
    </Svg>
  );
};
