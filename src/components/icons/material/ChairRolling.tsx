import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ChairRollingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 10V13H19V10H22ZM2 13H5V10H2V13ZM17 5C17 3.9 16.1 3 15 3H9C7.9 3 7 3.9 7 5V13H17V5ZM7 15H6V17H11V18L7 22H9.8L12 19.8L14.2 22H17L13 18V17H18V15H7Z" />
    </Svg>
  );
};
