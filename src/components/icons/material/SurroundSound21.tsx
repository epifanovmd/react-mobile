import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SurroundSound21Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 7V9H8V11H6C4.9 11 4 11.9 4 13V17H10V15H6V13H8C9.1 13 10 12.1 10 11V9C10 7.9 9.1 7 8 7H4ZM14 17H12V15H14V17ZM16 7V9H18V17H20V7H16Z" />
    </Svg>
  );
};
