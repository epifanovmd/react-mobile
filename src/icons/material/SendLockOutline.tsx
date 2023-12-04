import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SendLockOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M23 18V17.5C23 16.12 21.88 15 20.5 15C19.12 15 18 16.12 18 17.5V18C17.45 18 17 18.45 17 19V23C17 23.55 17.45 24 18 24H23C23.55 24 24 23.55 24 23V19C24 18.45 23.55 18 23 18ZM22 18H19V17.5C19 16.67 19.67 16 20.5 16C21.33 16 22 16.67 22 17.5V18ZM4 6.03L11.5 9.25L4 8.25V6.03ZM11.5 14.75L4 17.97V15.75L11.5 14.75ZM2 3V10L17 12L2 14V21L23 12L2 3Z" />
    </Svg>
  );
};