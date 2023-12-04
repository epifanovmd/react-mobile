import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const VectorCircleVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 9H19.97C18.7 5.41 15.31 3 11.5 3C9.11305 3 6.82387 3.94821 5.13604 5.63604C3.44821 7.32387 2.5 9.61305 2.5 12C2.5 17 6.53 21 11.5 21C15.31 21 18.7 18.6 20 15H22V9ZM20 11V13H18V11H20ZM17.82 15C16.66 17.44 14.2 19 11.5 19C7.64 19 4.5 15.87 4.5 12C4.5 8.14 7.64 5 11.5 5C14.2 5 16.66 6.57 17.81 9H16V15" />
    </Svg>
  );
};
