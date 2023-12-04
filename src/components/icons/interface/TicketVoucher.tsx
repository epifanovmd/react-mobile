import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TicketVoucherIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M14 6H6C5.06812 6 4.60192 6 4.23438 6.15224C3.74432 6.35523 3.35523 6.74481 3.15224 7.23486C3 7.60241 3 8.06835 3 9.00023C4.65685 9.00023 6 10.3429 6 11.9998C6 13.6566 4.65685 15 3 15C3 15.9319 3 16.3978 3.15224 16.7654C3.35523 17.2554 3.74432 17.6447 4.23438 17.8477C4.60192 17.9999 5.06812 18 6 18H14M14 6H18C18.9319 6 19.3978 6 19.7654 6.15224C20.2554 6.35523 20.6447 6.74481 20.8477 7.23486C20.9999 7.6024 20.9999 8.06835 20.9999 9.00023C19.343 9.00023 18 10.3431 18 12C18 13.6569 19.343 15 20.9999 15C20.9999 15.9319 20.9999 16.3978 20.8477 16.7654C20.6447 17.2554 20.2554 17.6447 19.7654 17.8477C19.3978 17.9999 18.9319 18 18 18H14M14 6V18"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
