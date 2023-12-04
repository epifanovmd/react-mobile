import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const KeyboardF3Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 7H11V9H7V11H10V13H7V17H5V7ZM19 15C19 16.11 18.11 17 17 17H13V15H17V13H15V11H17V9H13V7H17C18.1 7 19 7.89 19 9V10.5C19 11.33 18.33 12 17.5 12C18.33 12 19 12.67 19 13.5V15Z" />
    </Svg>
  );
};
