import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PinwheelOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 23H11V16.43C9.93 17.4 8.5 18 7 18C3.75 18 1 15.25 1 12V11H7.57C6.6 9.93 6 8.5 6 7C6 3.75 8.75 1 12 1H13V7.57C14.07 6.6 15.5 6 17 6C20.25 6 23 8.75 23 12V13H16.43C17.4 14.07 18 15.5 18 17C18 20.25 15.25 23 12 23ZM13 13.13V20.87C14.7 20.41 16 18.83 16 17C16 15.17 14.7 13.59 13 13.13ZM3.13 13C3.59 14.7 5.17 16 7 16C8.83 16 10.41 14.7 10.87 13H3.13ZM13.13 11H20.87C20.41 9.3 18.82 8 17 8C15.18 8 13.59 9.3 13.13 11ZM11 3.13C9.3 3.59 8 5.18 8 7C8 8.82 9.3 10.41 11 10.87V3.13Z" />
    </Svg>
  );
};