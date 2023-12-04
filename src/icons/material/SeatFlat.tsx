import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SeatFlatIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22 11V13H9V7H18C19.0609 7 20.0783 7.42143 20.8284 8.17157C21.5786 8.92172 22 9.93913 22 11ZM2 14V16H8V18H16V16H22V14H2ZM7.14 12.1C8.3 10.91 8.28 9 7.1 7.86C5.91 6.7 4 6.72 2.86 7.9C1.7 9.09 1.72 11 2.9 12.14C4.09 13.3 6 13.28 7.14 12.1Z" />
    </Svg>
  );
};
