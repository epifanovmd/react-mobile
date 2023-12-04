import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EvPlugType1Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 9C13 10.1 13.9 11 15 11C16.1 11 17 10.1 17 9C17 7.9 16.1 7 15 7C13.9 7 13 7.9 13 9ZM7 9C7 10.1 7.9 11 9 11C10.1 11 11 10.1 11 9C11 7.9 10.1 7 9 7C7.9 7 7 7.9 7 9ZM9 13.2C9 12.6 8.4 12 7.8 12C7.2 12 6.6 12.6 6.6 13.2C6.6 13.8 7.2 14.4 7.8 14.4C8.4 14.4 9 13.9 9 13.2ZM14 16C14 14.9 13.1 14 12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18C13.1 18 14 17.1 14 16ZM12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM17.5 13.2C17.5 12.5 16.9 12 16.3 12C15.6 12 15.1 12.6 15.1 13.2C15.1 13.8 15.7 14.4 16.3 14.4C16.9 14.5 17.5 13.9 17.5 13.2Z" />
    </Svg>
  );
};
