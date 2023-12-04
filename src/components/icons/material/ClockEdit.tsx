import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ClockEditIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 13.1C20.9 13.1 20.7 13.2 20.6 13.3L19.6 14.3L21.7 16.4L22.7 15.4C22.9 15.2 22.9 14.8 22.7 14.6L21.4 13.3C21.3 13.2 21.2 13.1 21 13.1ZM19.1 14.9L13 20.9V23H15.1L21.2 16.9L19.1 14.9ZM11 21.9C5.9 21.4 2 17.1 2 12C2 6.5 6.5 2 12 2C17.3 2 21.6 6.1 22 11.3C21.7 11.2 21.4 11.1 21 11.1C20.2 11.1 19.6 11.5 19.2 11.9L16.5 14.6L12.5 12.2V7H11V13L15.4 15.7L11 20.1V21.9Z" />
    </Svg>
  );
};
