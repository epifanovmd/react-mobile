import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadSyncIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 3C9.22996 3 6.18996 5.95 5.99996 9.66L4.07996 12.19C3.83996 12.5 4.07996 13 4.49996 13H5.99996V16C5.99996 17.11 6.88996 18 7.99996 18H8.99996V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3ZM13 15V13.5C10.79 13.5 8.99996 11.71 8.99996 9.5C8.99996 8.68 9.24996 7.92 9.66996 7.29L10.76 8.38C10.59 8.72 10.5 9.1 10.5 9.5C10.5 10.88 11.62 12 13 12V10.5L15.25 12.75L13 15ZM16.33 11.71L15.24 10.62C15.41 10.28 15.5 9.9 15.5 9.5C15.5 8.12 14.38 7 13 7V8.5L10.75 6.25L13 4V5.5C15.21 5.5 17 7.29 17 9.5C17 10.32 16.75 11.08 16.33 11.71Z" />
    </Svg>
  );
};
