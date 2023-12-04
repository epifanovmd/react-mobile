import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BugleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 6C21 11 12 11 12 11C12 11 6 11 5 11C4 11 3 10 3 10H2V14H3C3 14 4 13 5 13C5.2 13 5.7 13 6.3 13C5.5 13.5 5 14.2 5 15C5 16.8 7.3 18 10.5 18C13.7 18 16 16.8 16 15C16 14.4 15.7 13.8 15.2 13.3C17.8 13.8 21 15 21 18H22V6H21ZM10.5 16.7C8.2 16.7 6.4 15.9 6.4 15C6.4 14.1 8.2 13.3 10.5 13.3C12.8 13.3 14.6 14.1 14.6 15C14.6 15.9 12.8 16.7 10.5 16.7Z" />
    </Svg>
  );
};
