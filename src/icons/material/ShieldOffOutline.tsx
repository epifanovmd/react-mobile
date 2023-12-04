import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShieldOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M1 4.27L3 6.27V11C3 16.55 6.84 21.74 12 23C13.87 22.54 15.57 21.56 16.97 20.24L19.23 22.5L20.5 21.22L2.28 3L1 4.27ZM12 21C8.25 20 5 15.54 5 11.22V8.27L15.59 18.86C14.53 19.89 13.3 20.65 12 21ZM21 5V11C21 13.28 20.35 15.5 19.23 17.4L17.77 15.95C18.54 14.5 19 12.84 19 11.22V6.3L12 3.18L7.16 5.34L5.65 3.82L12 1L21 5Z" />
    </Svg>
  );
};
