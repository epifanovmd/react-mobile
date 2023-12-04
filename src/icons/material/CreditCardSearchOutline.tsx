import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CreditCardSearchOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11.03 12C11.28 11.61 11.57 11.24 11.9 10.9C14.44 8.37 18.56 8.37 21.1 10.9C21.45 11.26 21.74 11.65 22 12.06V6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H11.82C11.24 19.4 10.8 18.72 10.5 18H4V12H11.03ZM4 6H20V8H4V6ZM20.31 17.9C20.75 17.21 21 16.38 21 15.5C21 13 19 11 16.5 11C14 11 12 13 12 15.5C12 18 14 20 16.5 20C17.37 20 18.19 19.75 18.88 19.32L22 22.39L23.39 21L20.31 17.9ZM16.5 18C15.12 18 14 16.88 14 15.5C14 14.12 15.12 13 16.5 13C17.88 13 19 14.12 19 15.5C19 16.88 17.88 18 16.5 18Z" />
    </Svg>
  );
};
