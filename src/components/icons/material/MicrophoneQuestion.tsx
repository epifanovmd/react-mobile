import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MicrophoneQuestionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 2C10.66 2 12 3.34 12 5V11C12 12.66 10.66 14 9 14C7.34 14 6 12.66 6 11V5C6 3.34 7.34 2 9 2ZM16 11C16 14.53 13.39 17.44 10 17.93V21H8V17.93C4.61 17.44 2 14.53 2 11H4C4 13.76 6.24 16 9 16C11.76 16 14 13.76 14 11H16ZM20.5 14.5V16H19V14.5H20.5ZM18.5 9.5H17V9C17 7.34 18.34 6 20 6C21.66 6 23 7.34 23 9C23 9.97 22.5 10.88 21.71 11.41L21.41 11.6C20.84 12 20.5 12.61 20.5 13.3V13.5H19V13.3C19 12.11 19.6 11 20.59 10.35L20.88 10.16C21.27 9.9 21.5 9.47 21.5 9C21.5 8.17 20.83 7.5 20 7.5C19.17 7.5 18.5 8.17 18.5 9V9.5Z" />
    </Svg>
  );
};
