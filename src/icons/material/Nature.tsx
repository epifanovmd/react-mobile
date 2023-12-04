import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NatureIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 16.1199C16.47 15.7099 19.17 12.7599 19.17 9.16992C19.17 5.29992 16.04 2.16992 12.17 2.16992C10.3135 2.16992 8.53301 2.90742 7.22025 4.22017C5.9075 5.53293 5.17 7.31341 5.17 9.16992C5.17 12.6399 7.69 15.4999 11 16.0599V19.9999H5V21.9999H19V19.9999H13V16.1199Z" />
    </Svg>
  );
};
