import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LessThanOrEqualIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.5 2.26953L5 10.1395L18.5 17.9995L19.5 16.2695L8.97 10.1395L19.5 3.99953L18.5 2.26953ZM5 19.9995V21.9995H20V19.9995H5Z" />
    </Svg>
  );
};
