import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PrinterSearchIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.3 18.9C20.7 18.2 21 17.4 21 16.5C21 14 19 12 16.5 12C14 12 12 14 12 16.5C12 19 14 21 16.5 21C17.4 21 18.2 20.8 18.9 20.3L22 23.4L23.4 22L20.3 18.9ZM16.5 19C15.1 19 14 17.9 14 16.5C14 15.1 15.1 14 16.5 14C17.9 14 19 15.1 19 16.5C19 17.9 17.9 19 16.5 19ZM18 7H6V3H18V7ZM6 21V17H2V11C2 9.3 3.3 8 5 8H19C20.7 8 22 9.3 22 11V13C20.8 11.2 18.8 10 16.5 10C13.8 10 11.5 11.7 10.5 14H8V19H10.5C10.8 19.7 11.3 20.4 11.8 21H6Z" />
    </Svg>
  );
};
