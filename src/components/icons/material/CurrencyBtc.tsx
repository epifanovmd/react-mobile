import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CurrencyBtcIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 4H8V2H10V4H12V2H14V4.03C16.25 4.28 18 6.18 18 8.5C18 9.8 17.45 11 16.56 11.8C17.73 12.61 18.5 13.97 18.5 15.5C18.5 18 16.5 20 14 20V22H12V20H10V22H8V20H6L6.5 18H8V6H6V4ZM10 13V18H14C14.663 18 15.2989 17.7366 15.7678 17.2678C16.2366 16.7989 16.5 16.163 16.5 15.5C16.5 14.837 16.2366 14.2011 15.7678 13.7322C15.2989 13.2634 14.663 13 14 13H10ZM10 6V11H13.5C14.163 11 14.7989 10.7366 15.2678 10.2678C15.7366 9.79893 16 9.16304 16 8.5C16 7.83696 15.7366 7.20107 15.2678 6.73223C14.7989 6.26339 14.163 6 13.5 6H10Z" />
    </Svg>
  );
};
