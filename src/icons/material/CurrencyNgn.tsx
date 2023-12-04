import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CurrencyNgnIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 9H6V3H8L11.42 9H16V3H18V9H20V11H18V13H20V15H18V21H16L12.57 15H8V21H6V15H4V13H6V11H4V9ZM8 9H9.13L8 7.03V9ZM8 11V13H11.42L10.28 11H8ZM16 17V15H14.85L16 17ZM12.56 11L13.71 13H16V11H12.56Z" />
    </Svg>
  );
};
