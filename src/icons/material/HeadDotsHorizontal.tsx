import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadDotsHorizontalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 3C9.22996 3 6.18996 5.95 5.99996 9.66L4.07996 12.19C3.83996 12.5 4.07996 13 4.49996 13H5.99996V16C5.99996 17.11 6.88996 18 7.99996 18H8.99996V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3ZM9.99996 11C9.44996 11 8.99996 10.55 8.99996 10C8.99996 9.45 9.44996 9 9.99996 9C10.55 9 11 9.45 11 10C11 10.55 10.55 11 9.99996 11ZM13 11C12.45 11 12 10.55 12 10C12 9.45 12.45 9 13 9C13.55 9 14 9.45 14 10C14 10.55 13.55 11 13 11ZM16 11C15.45 11 15 10.55 15 10C15 9.45 15.45 9 16 9C16.55 9 17 9.45 17 10C17 10.55 16.55 11 16 11Z" />
    </Svg>
  );
};
