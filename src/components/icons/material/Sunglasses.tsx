import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SunglassesIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7.00009 17H4.00009C2.38009 17 0.960093 15.74 0.760094 14.14L0.260094 11.15C0.150094 10.3 0.390094 9.5 0.910094 8.92C1.43009 8.34 2.19009 8 3.00009 8H9.00009C9.83009 8 10.5801 8.35 11.0601 8.96C11.1701 9.11 11.2701 9.27 11.3501 9.45C11.7801 9.36 12.2201 9.36 12.6401 9.45C12.7201 9.27 12.8201 9.11 12.9401 8.96C13.4101 8.35 14.1601 8 15.0001 8H21.0001C21.8101 8 22.5701 8.34 23.0901 8.92C23.6001 9.5 23.8401 10.3 23.7401 11.11L23.2301 14.18C23.0401 15.74 21.6101 17 20.0001 17H17.0001C15.4401 17 13.9201 15.81 13.5401 14.3L12.6401 11.59C12.2601 11.31 11.7301 11.31 11.3501 11.59L10.4301 14.37C10.0701 15.82 8.56009 17 7.00009 17Z" />
    </Svg>
  );
};
