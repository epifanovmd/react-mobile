import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadHeartIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 3C9.22996 3 6.18996 5.95 5.99996 9.66L4.07996 12.19C3.83996 12.5 4.07996 13 4.49996 13H5.99996V16C5.99996 17.11 6.88996 18 7.99996 18H8.99996V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3ZM17 8.83C17 10.37 15.64 11.6 13.58 13.47L13 14L12.42 13.47C10.36 11.6 8.99996 10.37 8.99996 8.83C8.99996 7.63 9.95996 6.64 11.16 6.63H11.2C11.89 6.63 12.55 6.94 13 7.46C13.45 6.94 14.11 6.63 14.8 6.63C16 6.62 17 7.59 17 8.79V8.83Z" />
    </Svg>
  );
};
