import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FlashAlertOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 2H15L11.5 9H15L8 22V14H5V2ZM7 4V12H10V14.66L12 11H8.24L11.76 4H7ZM17 15H19V17H17V15ZM17 7H19V13H17V7Z" />
    </Svg>
  );
};
