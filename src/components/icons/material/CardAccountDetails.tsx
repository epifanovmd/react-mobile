import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CardAccountDetailsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 3H22C23.05 3 24 3.95 24 5V19C24 20.05 23.05 21 22 21H2C0.95 21 0 20.05 0 19V5C0 3.95 0.95 3 2 3ZM14 6V7H22V6H14ZM14 8V9H21.5H22V8H14ZM14 10V11H21V10H14ZM8 13.91C6 13.91 2 15 2 17V18H14V17C14 15 10 13.91 8 13.91ZM8 6C7.20435 6 6.44129 6.31607 5.87868 6.87868C5.31607 7.44129 5 8.20435 5 9C5 9.79565 5.31607 10.5587 5.87868 11.1213C6.44129 11.6839 7.20435 12 8 12C8.79565 12 9.55871 11.6839 10.1213 11.1213C10.6839 10.5587 11 9.79565 11 9C11 8.20435 10.6839 7.44129 10.1213 6.87868C9.55871 6.31607 8.79565 6 8 6Z" />
    </Svg>
  );
};
