import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MapPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 3L3.36 4.9C3.16 4.97 3 5.15 3 5.38V20.5C3 20.6326 3.05268 20.7598 3.14645 20.8536C3.24021 20.9473 3.36739 21 3.5 21C3.55 21 3.6 21 3.66 20.97L9 18.9L13.16 20.36C13.06 19.92 13 19.46 13 19C13 18.77 13 18.54 13.04 18.3L9 16.9V5L15 7.1V14.56C16.07 13.6 17.47 13 19 13C19.7 13 20.37 13.13 21 13.36V3.5C21 3.36739 20.9473 3.24021 20.8536 3.14645C20.7598 3.05268 20.6326 3 20.5 3H20.34L15 5.1L9 3ZM18 15V18H15V20H18V23H20V20H23V18H20V15H18Z" />
    </Svg>
  );
};
