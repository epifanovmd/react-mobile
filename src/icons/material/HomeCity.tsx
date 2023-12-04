import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HomeCityIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M0 21V10L7.5 5L15 10V21H10V14H5V21H0ZM24 2V21H17V8.93L16 8.27V6H14V6.93L10 4.27V2H24ZM21 14H19V16H21V14ZM21 10H19V12H21V10ZM21 6H19V8H21V6Z" />
    </Svg>
  );
};
