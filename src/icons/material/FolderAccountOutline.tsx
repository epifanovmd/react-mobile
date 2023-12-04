import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FolderAccountOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 14C16.33 14 19 14.67 19 16V17H11V16C11 14.67 13.67 14 15 14ZM15 13C16.11 13 17 12.11 17 11C17 9.89 16.11 9 15 9C13.9 9 13 9.89 13 11C13 12.11 13.9 13 15 13ZM22 8V18C22 19.11 21.11 20 20 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H10L12 6H20C21.11 6 22 6.9 22 8ZM20 8H4V18H20V8Z" />
    </Svg>
  );
};
