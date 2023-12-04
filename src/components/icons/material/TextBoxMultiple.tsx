import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TextBoxMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 15H9V13H16V15ZM19 11H9V9H19V11ZM19 7H9V5H19V7ZM21 1H7C5.89 1 5 1.89 5 3V17C5 18.11 5.9 19 7 19H21C22.11 19 23 18.11 23 17V3C23 1.89 22.1 1 21 1ZM3 5V21H19V23H3C2.46957 23 1.96086 22.7893 1.58579 22.4142C1.21071 22.0391 1 21.5304 1 21V5H3Z" />
    </Svg>
  );
};
