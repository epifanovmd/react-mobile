import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AccountDetailsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 9C11 10.66 9.66 12 8 12C6.34 12 5 10.66 5 9C5 7.34 6.34 6 8 6C9.66 6 11 7.34 11 9ZM14 20H2V18C2 15.79 4.69 14 8 14C11.31 14 14 15.79 14 18V20ZM22 12V14H13V12H22ZM22 8V10H13V8H22ZM22 4V6H13V4H22Z" />
    </Svg>
  );
};
