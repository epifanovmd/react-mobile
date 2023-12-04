import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PanoramaWideAngleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 4C9.27 4 6.78 4.24 4.05 4.72L3.12 4.88L2.87 5.78C2.29 7.85 2 9.93 2 12C2 14.07 2.29 16.15 2.87 18.22L3.12 19.11L4.05 19.27C6.78 19.76 9.27 20 12 20C14.73 20 17.22 19.76 19.95 19.28L20.88 19.12L21.13 18.23C21.71 16.15 22 14.07 22 12C22 9.93 21.71 7.85 21.13 5.78L20.88 4.89L19.95 4.73C17.22 4.24 14.73 4 12 4ZM12 6C14.45 6 16.71 6.2 19.29 6.64C19.76 8.42 20 10.22 20 12C20 13.78 19.76 15.58 19.29 17.36C16.71 17.8 14.45 18 12 18C9.55 18 7.29 17.8 4.71 17.36C4.24 15.58 4 13.78 4 12C4 10.22 4.24 8.42 4.71 6.64C7.29 6.2 9.55 6 12 6Z" />
    </Svg>
  );
};
