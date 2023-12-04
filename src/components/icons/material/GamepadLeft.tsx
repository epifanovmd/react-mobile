import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const GamepadLeftIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 2V7.5L12 10.5L15 7.5V2H9ZM2 9V15H7.5L10.5 12L7.5 9H2ZM16.5 9L13.5 12L16.5 15H22V9H16.5ZM4 11H6V13H4V11ZM12 13.5L9 16.5V22H15V16.5L12 13.5Z" />
    </Svg>
  );
};
