import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UngroupIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 2H6V3H13V2H17V6H16V9H18V8H22V12H21V18H22V22H18V21H12V22H8V18H9V16H6V17H2V13H3V6H2V2ZM18 12V11H16V13H17V17H13V16H11V18H12V19H18V18H19V12H18ZM13 6V5H6V6H5V13H6V14H9V12H8V8H12V9H14V6H13ZM12 12H11V14H13V13H14V11H12V12Z" />
    </Svg>
  );
};
