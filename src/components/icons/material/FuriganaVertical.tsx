import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FuriganaVerticalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 5V7H2V9H11.95C11.53 10.13 10.5 11.5 9.16 12.67C8.12 11.74 7.35 10.82 6.82 10H4.5C5.08 11.25 6.13 12.62 7.62 13.96L3.55 17.22L2.76 17.84L4 19.41L4.8 18.78L9.17 15.28L13.55 18.78L14.33 19.41L15.58 17.84L14.8 17.22L10.73 13.97C12.34 12.5 13.7 10.85 14.07 9H16V7H10V5H8ZM19.5 6C18.12 6 17 7.12 17 8.5C17 9.88 18.12 11 19.5 11C20.88 11 22 9.88 22 8.5C22 7.12 20.88 6 19.5 6ZM19.47 13C18.09 13 16.97 14.12 16.97 15.5C16.97 16.88 18.09 18 19.47 18C20.85 18 21.97 16.88 21.97 15.5C21.97 14.12 20.85 13 19.47 13Z" />
    </Svg>
  );
};
