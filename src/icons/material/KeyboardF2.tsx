import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyboardF2Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 7H11V9H7V11H10V13H7V17H5V7ZM13 7H17C18.11 7 19 7.9 19 9V11C19 12.11 18.11 13 17 13H15V15H19V17H13V13C13 11.9 13.9 11 15 11H17V9H13V7Z" />
    </Svg>
  );
};
