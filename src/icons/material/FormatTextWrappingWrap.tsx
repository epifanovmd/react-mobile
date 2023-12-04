import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatTextWrappingWrapIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 21H5V3H7V21ZM19 3H17V21H19V3ZM13 8H9V10H12.97C13.14 10 14 10.16 14 12C14 13.84 13.14 14 13 14H11V12L8 15L11 18V16H13C14.04 16 16 15.16 16 12C16 8.84 14.04 8 13 8Z" />
    </Svg>
  );
};
