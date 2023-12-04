import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DogServiceIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 8.00004L17 11V21H15V15H8L6 18V21H4V15L5 14V11L2 8.00004L3 7.00004L5 9.00004H7V12C7 12.2653 7.10536 12.5196 7.29289 12.7071C7.48043 12.8947 7.73478 13 8 13H12C12.2652 13 12.5196 12.8947 12.7071 12.7071C12.8946 12.5196 13 12.2653 13 12V9.00004L14 8.00004ZM19 5.00004V3.00004L15 7.00004L18 10L19 9.00004L20 10L22 8.00004L19 5.00004ZM11.5 9.50004L4.5 2.50004C4.23 2.22004 3.79 2.22004 3.5 2.50004C3.22 2.77004 3.22 3.21004 3.5 3.50004L10.5 10.5C10.77 10.78 11.21 10.78 11.5 10.5C11.78 10.23 11.78 9.79004 11.5 9.50004Z" />
    </Svg>
  );
};
