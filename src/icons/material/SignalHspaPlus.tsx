import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SignalHspaPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19 8V11H22V14H19V17H16V14H13V11H16V8H19ZM5 10.5H8V4.5H11V19.5H8V13.5H5V19.5H2V4.5H5V10.5Z" />
    </Svg>
  );
};
