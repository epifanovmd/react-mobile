import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FoodOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M0.999932 21H15.9999V22C15.9999 22.54 15.5599 23 14.9999 23H1.99993C1.44993 23 0.999932 22.54 0.999932 22V21ZM20.4999 23.31L15.9999 18.83V19H0.999932V17H14.1699L12.1699 15H0.999932C0.999932 11.76 3.45993 9.83 6.37993 9.21L0.679932 3.5L2.09993 2.1L12.9999 13L14.9999 15L21.8999 21.9L20.4999 23.31ZM10.1699 13L8.16993 11C6.74993 11.06 4.64993 11.56 3.61993 13H10.1699ZM22.9999 5H17.9999V1H15.9999V5H10.9999L11.2299 7H20.7899L19.7899 16.97L21.6199 18.8L22.9999 5Z" />
    </Svg>
  );
};
