import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ToothIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 2C4 2 2 5 2 8C2 10.11 3 13 4 14C5 15 6 22 8 22C12.54 22 10 15 12 15C14 15 11.46 22 16 22C18 22 19 15 20 14C21 13 22 10.11 22 8C22 5 20 2 17 2C14 2 14 3 12 3C10 3 10 2 7 2Z" />
    </Svg>
  );
};
