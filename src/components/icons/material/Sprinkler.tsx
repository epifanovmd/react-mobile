import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SprinklerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 7H13V9H11V7ZM5 22H9V10H5V22ZM14 11H16V9H14V11ZM17 10H19V8H17V10ZM17 5V7H19V5H17ZM14 8H16V6H14V8ZM17 13H19V11H17V13ZM5 7H5.33L6 9H8L8.67 7H9V6H5V7Z" />
    </Svg>
  );
};
