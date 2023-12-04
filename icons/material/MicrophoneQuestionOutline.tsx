import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MicrophoneQuestionOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.3 11C14.3 14 11.76 16.1 9 16.1C6.24 16.1 3.7 14 3.7 11H2C2 14.41 4.72 17.23 8 17.72V21H10V17.72C13.28 17.23 16 14.41 16 11H14.3ZM7.8 4.9C7.8 4.24 8.34 3.7 9 3.7C9.66 3.7 10.2 4.24 10.2 4.9L10.19 11.1C10.19 11.76 9.66 12.3 9 12.3C8.34 12.3 7.8 11.76 7.8 11.1V4.9ZM9 14C10.66 14 12 12.66 12 11V5C12 3.34 10.66 2 9 2C7.34 2 6 3.34 6 5V11C6 12.66 7.34 14 9 14ZM20.5 14.5V16H19V14.5H20.5ZM18.5 9.5H17V9C17 7.34 18.34 6 20 6C21.66 6 23 7.34 23 9C23 9.97 22.5 10.88 21.71 11.41L21.41 11.6C20.84 12 20.5 12.61 20.5 13.3V13.5H19V13.3C19 12.11 19.6 11 20.59 10.35L20.88 10.16C21.27 9.9 21.5 9.47 21.5 9C21.5 8.17 20.83 7.5 20 7.5C19.17 7.5 18.5 8.17 18.5 9V9.5Z" />
    </Svg>
  );
};
