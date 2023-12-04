import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FolderKeyOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 18H4V8H20V18ZM20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM12.8 12C12.4 10.8 11.3 10 10 10C8.3 10 7 11.3 7 13C7 14.7 8.3 16 10 16C11.3 16 12.4 15.2 12.8 14H15V16H17V14H19V12H12.8ZM10 14C9.4 14 9 13.6 9 13C9 12.4 9.4 12 10 12C10.6 12 11 12.4 11 13C11 13.6 10.6 14 10 14Z" />
    </Svg>
  );
};