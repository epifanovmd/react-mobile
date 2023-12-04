import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AccountArrowDownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 8C6 5.79 7.79 4 10 4C12.21 4 14 5.79 14 8C14 10.21 12.21 12 10 12C7.79 12 6 10.21 6 8ZM10 14C5.58 14 2 15.79 2 18V20H13.09C13.04 19.67 13 19.34 13 19C13 17.36 13.66 15.87 14.74 14.78C13.41 14.29 11.78 14 10 14ZM20 20V16H18V20H16L19 23L22 20H20Z" />
    </Svg>
  );
};
