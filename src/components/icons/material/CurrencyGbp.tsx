import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CurrencyGbpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 21V19C10 17 9.5 13 9.5 13H7V11H9.5C8.5 6.5 10 3 14 3C16 3 17 3.5 17 3.5V5.5C11 3.5 11 8 11.5 11H16V13H11.5C11.5 13 12 17 9.5 19H18V21H6Z" />
    </Svg>
  );
};
