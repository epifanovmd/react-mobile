import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FridgeAlertOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 21V22H5V21C3.9 21 3 20.11 3 19V4C3 2.9 3.9 2 5 2H15C16.11 2 17 2.9 17 4V19C17 20.11 16.11 21 15 21V22H13V21H7ZM5 4V9H15V4H5ZM5 19H15V11H5V19ZM6 12H8V15H6V12ZM6 6H8V8H6V6ZM19 15H21V17H19V15ZM19 7H21V13H19V7Z" />
    </Svg>
  );
};
