import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GateXorIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 4C5 10 5 14 2 20H4C7 14 7 10 4.1 4H2ZM6 4C9 10 9 14 6 20H9C14 20 18 17 22 12C18 7 14 4 9 4H6ZM9 6C12.8 6 16 8.1 19.3 12C15.9 15.9 12.8 18 9 18C10.5 14 10.5 10 9 6Z" />
    </Svg>
  );
};
