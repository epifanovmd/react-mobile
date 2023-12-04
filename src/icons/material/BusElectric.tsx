import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BusElectricIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 8H6V4H18V8ZM16.5 14C15.7 14 15 13.3 15 12.5C15 11.7 15.7 11 16.5 11C17.3 11 18 11.7 18 12.5C18 13.3 17.3 14 16.5 14ZM7.5 14C6.7 14 6 13.3 6 12.5C6 11.7 6.7 11 7.5 11C8.3 11 9 11.7 9 12.5C9 13.3 8.3 14 7.5 14ZM4 13C4 13.9 4.4 14.7 5 15.2V17C5 17.6 5.4 18 6 18H7C7.6 18 8 17.6 8 17V16H16V17C16 17.6 16.4 18 17 18H18C18.6 18 19 17.6 19 17V15.2C19.6 14.7 20 13.9 20 13V4C20 0.5 16.4 0 12 0C7.6 0 4 0.5 4 4V13ZM7 21H11V19L17 22H13V24L7 21Z" />
    </Svg>
  );
};
