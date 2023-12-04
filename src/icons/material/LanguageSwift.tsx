import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LanguageSwiftIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.09 19.7191C14.73 21.0791 11.5 21.2191 8.23 19.8191C5.59 18.6991 3.4 16.7391 2 14.4991C2.67 15.0491 3.46 15.4991 4.3 15.8991C7.67 17.4691 11.03 17.3591 13.4 15.8991C10.03 13.3091 7.16 9.93906 5.03 7.18906C4.58 6.73906 4.25 6.17906 3.91 5.67906C12.19 11.7291 11.83 13.2691 6.32 4.66906C11.21 9.60906 15.75 12.4091 15.75 12.4091C15.91 12.4991 16 12.5691 16.11 12.6291C16.21 12.3791 16.3 12.1191 16.37 11.8491C17.16 8.99906 16.26 5.72906 14.29 3.03906C18.84 5.78906 21.54 10.9491 20.41 15.2791C20.38 15.3891 20.35 15.4991 20.36 15.6691C22.6 18.4991 22 21.4491 21.71 20.8891C20.5 18.4991 18.23 19.2391 17.09 19.7191Z" />
    </Svg>
  );
};
