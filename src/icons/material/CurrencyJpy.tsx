import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CurrencyJpyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11 21V16H6.00002V14H11V13.71L10.16 12H6.00002V10H9.19002L5.77002 3H8.00002L12 11.2L16 3H18.23L14.81 10H18V12H13.84L13 13.71V14H18V16H13V21H11Z" />
    </Svg>
  );
};
