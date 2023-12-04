import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowCollapseDownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.92 12.08L12 20L4.08 12.08L5.5 10.67L11 16.17V2H13V16.17L18.5 10.66L19.92 12.08ZM12 20H2V22H22V20H12Z" />
    </Svg>
  );
};
