import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const VanityLightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 20.0001H16C16 18.3401 17.34 13.0001 19 13.0001C20.66 13.0001 22 18.3401 22 20.0001ZM12 13.0001C10.34 13.0001 9 18.3401 9 20.0001H15C15 18.3401 13.66 13.0001 12 13.0001ZM5 13.0001C3.34 13.0001 2 18.3401 2 20.0001H8C8 18.3401 6.66 13.0001 5 13.0001ZM14.82 6.00005C14.26 4.44005 12.53 3.64005 11 4.20005C10.14 4.50005 9.5 5.17005 9.18 6.00005H2V8.00005H4V12.0001H6V8.00005H9.18C9.5 8.85005 10.15 9.50005 11 9.82005V12.0001H13V9.82005C13.85 9.50005 14.5 8.85005 14.82 8.00005H18V12.0001H20V8.00005H22V6.00005H14.82Z" />
    </Svg>
  );
};
