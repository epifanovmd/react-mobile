import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BookmarkOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 20.72L18.73 22L16.78 20.05L12 18L5 21V8.27L2 5.27L3.28 4L20 20.72ZM19 17.16V5C19 3.89 18.1 3 17 3H7C6.41 3 5.89 3.27 5.5 3.68L19 17.16Z" />
    </Svg>
  );
};
