import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChartAreasplineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17.45 15.1802L22 7.31019V19.0002V21.0002H2V3.0002H4V15.5402L9.5 6.0002L16 9.7802L20.24 2.4502L21.97 3.4502L16.74 12.5002L10.23 8.7502L4.31 19.0002H6.57L10.96 11.4402L17.45 15.1802Z" />
    </Svg>
  );
};
