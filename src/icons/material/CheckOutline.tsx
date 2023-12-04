import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CheckOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.78 2.2002L24 6.4202L8.44 22.0002L0 13.5502L4.22 9.3302L8.44 13.5502L19.78 2.2002ZM19.78 5.0002L8.44 16.3602L4.22 12.1902L2.81 13.5502L8.44 19.1702L21.19 6.4202L19.78 5.0002Z" />
    </Svg>
  );
};
