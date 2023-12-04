import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const KeyboardF8Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 7H11V9H7V11H10V13H7V17H5V7ZM15 13V15H17V13H15ZM15 9V11H17V9H15ZM15 17C13.9 17 13 16.11 13 15V13.5C13 12.67 13.67 12 14.5 12C13.67 12 13 11.33 13 10.5V9C13 7.9 13.9 7 15 7H17C18.1 7 19 7.89 19 9V10.5C19 11.33 18.33 12 17.5 12C18.33 12 19 12.67 19 13.5V15C19 16.11 18.11 17 17 17H15Z" />
    </Svg>
  );
};
