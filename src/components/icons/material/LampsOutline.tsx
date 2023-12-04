import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LampsOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8.5 4L9.35 7H4.65L5.5 4H8.5ZM10 2H4L2 9H12L10 2ZM6 10H8V20H11V22H3V20H6V10ZM18.5 10L19.35 13H14.65L15.5 10H18.5ZM20 8H14L12 15H22L20 8ZM16 16H18V20H21V22H13V20H16V16Z" />
    </Svg>
  );
};
