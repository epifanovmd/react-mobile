import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SignalVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 6V4H4.1C12.9 4 20 11.1 20 19.9V20H18V19.9C18 12.2 11.8 6 4 6ZM4 10V8C7.1826 8 10.2348 9.26428 12.4853 11.5147C14.7357 13.7652 16 16.8174 16 20H14C14 18.6868 13.7413 17.3864 13.2388 16.1732C12.7362 14.9599 11.9997 13.8575 11.0711 12.9289C10.1425 12.0003 9.04009 11.2638 7.82683 10.7612C6.61358 10.2587 5.31322 10 4 10ZM4 14V12C6.12173 12 8.15656 12.8429 9.65685 14.3431C11.1571 15.8434 12 17.8783 12 20H10C10 18.4087 9.36786 16.8826 8.24264 15.7574C7.11742 14.6321 5.5913 14 4 14ZM4 16C5.06087 16 6.07828 16.4214 6.82843 17.1716C7.57857 17.9217 8 18.9391 8 20H4V16Z" />
    </Svg>
  );
};
