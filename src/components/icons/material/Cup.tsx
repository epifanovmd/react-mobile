import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CupIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.32 8H5.67L5.23 4H18.77L18.32 8ZM3 2L5 20.23C5.13 21.23 5.97 22 7 22H17C18 22 18.87 21.23 19 20.23L21 2H3Z" />
    </Svg>
  );
};
