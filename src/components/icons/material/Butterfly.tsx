import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ButterflyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 21H11V6L9.03 3.97L10 3L12 5L14 3L15 4L13 6V21ZM7 6C4.24 6 2 8.24 2 11C2 12.64 2.79 14.09 4 15V17C4 19.21 5.79 21 8 21C8.72 21 9.39 20.81 9.97 20.5L10 20.46V7C9.16 6.37 8.13 6 7 6ZM6.5 12.5L5 11L6.5 9.5L8 11L6.5 12.5ZM22 11C22 8.24 19.76 6 17 6C15.88 6 14.85 6.37 14 7V20.46C14.59 20.81 15.27 21 16 21C18.21 21 20 19.21 20 17V15C21.21 14.09 22 12.64 22 11ZM17.5 12.5L16 11L17.5 9.5L19 11L17.5 12.5Z" />
    </Svg>
  );
};
