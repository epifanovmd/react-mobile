import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowUpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13.0001 19.9999H11.0001V7.99991L5.50008 13.4999L4.08008 12.0799L12.0001 4.15991L19.9201 12.0799L18.5001 13.4999L13.0001 7.99991V19.9999Z" />
    </Svg>
  );
};
