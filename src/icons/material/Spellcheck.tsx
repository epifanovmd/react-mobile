import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SpellcheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.59 11.59L13.5 19.68L9.82996 16L8.41996 17.41L13.5 22.5L23 13L21.59 11.59ZM6.42996 11L8.49996 5.5L10.57 11H6.42996ZM12.45 16H14.54L9.42996 3H7.56996L2.45996 16H4.54996L5.66996 13H11.31L12.45 16Z" />
    </Svg>
  );
};
