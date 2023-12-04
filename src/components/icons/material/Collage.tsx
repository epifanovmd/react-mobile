import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CollageIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 3C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H11V3H5ZM13 3V11H21V5C21 3.89 20.11 3 19 3H13ZM13 13V21H19C20.11 21 21 20.11 21 19V13" />
    </Svg>
  );
};
