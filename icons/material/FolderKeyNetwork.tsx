import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FolderKeyNetworkIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 5C4.9 5 4 5.9 4 7V15C4 16.1 4.9 17 6 17H11V19H10C9.4 19 9 19.4 9 20H2V22H9C9 22.6 9.4 23 10 23H14C14.6 23 15 22.6 15 22H22V20H15C15 19.4 14.6 19 14 19H13V17H18C19.1 17 20 16.1 20 15V9C20 7.9 19.1 7 18 7H12L10 5H6ZM9 9C10.3 9 11.4 9.8 11.8 11H18V13H16V15H14V13H11.8C11.4 14.2 10.3 15 9 15C7.3 15 6 13.7 6 12C6 10.3 7.3 9 9 9ZM9 11C8.4 11 8 11.4 8 12C8 12.6 8.4 13 9 13C9.6 13 10 12.6 10 12C10 11.4 9.6 11 9 11Z" />
    </Svg>
  );
};
