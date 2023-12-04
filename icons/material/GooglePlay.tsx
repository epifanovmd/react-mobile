import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const GooglePlayIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 20.5004V3.50039C3 2.91039 3.34 2.39039 3.84 2.15039L13.69 12.0004L3.84 21.8504C3.34 21.6004 3 21.0904 3 20.5004ZM16.81 15.1204L6.05 21.3404L14.54 12.8504L16.81 15.1204ZM20.16 10.8104C20.5 11.0804 20.75 11.5004 20.75 12.0004C20.75 12.5004 20.53 12.9004 20.18 13.1804L17.89 14.5004L15.39 12.0004L17.89 9.50039L20.16 10.8104ZM6.05 2.66039L16.81 8.88039L14.54 11.1504L6.05 2.66039Z" />
    </Svg>
  );
};
