import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileAccountOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM13 13C13 14.1 12.1 15 11 15C9.9 15 9 14.1 9 13C9 11.9 9.9 11 11 11C12.1 11 13 11.9 13 13ZM15 18V19H7V18C7 16.67 9.67 16 11 16C12.33 16 15 16.67 15 18Z" />
    </Svg>
  );
};
