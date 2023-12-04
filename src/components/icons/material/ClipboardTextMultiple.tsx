import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ClipboardTextMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 3H16.8C16.4 1.8 15.3 1 14 1C12.7 1 11.6 1.8 11.2 3H8C6.9 3 6 3.9 6 5V17C6 18.1 6.9 19 8 19H20C21.1 19 22 18.1 22 17V5C22 3.9 21.1 3 20 3ZM14 3C14.6 3 15 3.5 15 4C15 4.5 14.5 5 14 5C13.5 5 13 4.5 13 4C13 3.5 13.4 3 14 3ZM16 14H9V12H16V14ZM19 10H9V8H19V10ZM4 21H18V23H4C2.9 23 2 22.1 2 21V7H4" />
    </Svg>
  );
};
