import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BeakerAlertOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 3H21V5C19.9 5 19 5.9 19 7V19C19 20.11 18.11 21 17 21H7C5.9 21 5 20.11 5 19V7C5 5.9 4.11 5 3 5V3ZM7 5V7H12V8H7V9H10V10H7V11H10V12H7V13H12V14H7V15H10V16H7V19H17V5H7ZM21 13V7H23V13H21ZM21 17V15H23V17H21Z" />
    </Svg>
  );
};
