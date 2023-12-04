import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AlertDecagramOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 12L20.56 14.78L20.9 18.46L17.29 19.28L15.4 22.46L12 21L8.6 22.47L6.71 19.29L3.1 18.47L3.44 14.78L1 12L3.44 9.20998L3.1 5.52998L6.71 4.71998L8.6 1.53998L12 2.99998L15.4 1.53998L17.29 4.71998L20.9 5.53998L20.56 9.21998L23 12ZM20.33 12L18.5 9.88998L18.74 7.09998L16 6.49998L14.58 4.06998L12 5.17998L9.42 4.06998L8 6.49998L5.26 7.08998L5.5 9.87998L3.67 12L5.5 14.1L5.26 16.9L8 17.5L9.42 19.93L12 18.81L14.58 19.92L16 17.5L18.74 16.89L18.5 14.1L20.33 12ZM11 15H13V17H11V15ZM11 6.99998H13V13H11V6.99998Z" />
    </Svg>
  );
};
