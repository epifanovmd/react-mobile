import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CloseBoxMultipleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2ZM20 16H8V4H20V16ZM4 6V20H18V22H4C2.9 22 2 21.11 2 20V6H4ZM9.77 12.84L12.6 10L9.77 7.15L11.17 5.75L14 8.6L16.84 5.77L18.24 7.17L15.4 10L18.23 12.84L16.83 14.24L14 11.4L11.17 14.24L9.77 12.84Z" />
    </Svg>
  );
};
