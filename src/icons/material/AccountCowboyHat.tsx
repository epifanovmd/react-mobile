import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountCowboyHatIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 22H4V20C4 17.8 7.6 16 12 16C16.4 16 20 17.8 20 20V22ZM8 8.99999H16V9.99999C16 12.2 14.2 14 12 14C9.8 14 8 12.2 8 9.99999V8.99999ZM19 3.99999C18.4 3.99999 18 4.39999 18 4.99999V5.99999H16.5L15.1 2.99999C15 2.79999 14.9 2.59999 14.7 2.49999C14.2 1.99999 13.4 1.89999 12.7 2.19999L12 2.39999L11.3 2.09999C10.6 1.79999 9.8 1.89999 9.3 2.39999C9.1 2.59999 9 2.79999 8.9 2.99999L7.5 5.99999H6V4.99999C6 4.39999 5.6 3.99999 5 3.99999C4.4 3.99999 4 4.39999 4 4.99999V5.99999C4 7.09999 4.9 7.99999 6 7.99999H18C19.1 7.99999 20 7.09999 20 5.99999V4.99999C20 4.49999 19.6 3.99999 19 3.99999Z" />
    </Svg>
  );
};
