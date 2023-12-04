import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const IdentifierIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 7V9H9V15H10V17H6V15H7V9H6V7H10ZM16 7C17.11 7 18 7.9 18 9V15C18 16.11 17.11 17 16 17H12V7H16ZM16 9H14V15H16V9Z" />
    </Svg>
  );
};
