import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OarIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.23 15.21C18.77 13.75 14.97 10.2 12.77 11.27L4.5 3L3 4.5L11.28 12.79C10.3 15 13.88 18.62 15.35 20.08C17.11 21.84 18.26 20.92 19.61 19.57C21.1 18.08 21.61 16.61 20.23 15.21Z" />
    </Svg>
  );
};
