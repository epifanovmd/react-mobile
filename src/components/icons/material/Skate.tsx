import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SkateIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.95 17C20.7 18.69 19.26 20 17.5 20H16V18H19C18.93 16.72 19.26 14.04 18.53 12.95C17.56 10.9 14.83 10.56 12.93 10.05C12 10 11 9 10.84 8H8C7.72 8 7.5 7.78 7.5 7.5C7.5 7.22 7.72 7 8 7H10.5V6H8C7.72 6 7.5 5.78 7.5 5.5C7.5 5.22 7.72 5 8 5H10.5V2H2.03V18H5V20H1V22H17.5C20.36 22 22.72 19.8 23 17H20.95ZM14 20H7V18H14V20Z" />
    </Svg>
  );
};
