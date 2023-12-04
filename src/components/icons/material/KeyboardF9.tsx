import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const KeyboardF9Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 7H11V9H7V11H10V13H7V17H5V7ZM17 17H13V15H17V13H15C13.9 13 13 12.11 13 11V9C13 7.9 13.9 7 15 7H17C18.11 7 19 7.9 19 9V15C19 16.11 18.11 17 17 17ZM17 11V9H15V11H17Z" />
    </Svg>
  );
};
