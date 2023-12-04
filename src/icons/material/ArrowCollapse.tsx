import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowCollapseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19.5001 3.09009L15.0001 7.59009V4.00009H13.0001V11.0001H20.0001V9.00009H16.4101L20.9101 4.50009L19.5001 3.09009ZM4.00009 13.0001V15.0001H7.59009L3.09009 19.5001L4.50009 20.9101L9.00009 16.4101V20.0001H11.0001V13.0001H4.00009Z" />
    </Svg>
  );
};
