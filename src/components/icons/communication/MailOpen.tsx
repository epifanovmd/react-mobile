import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MailOpenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M4 10L10.1076 14.6122L10.1097 14.6139C10.7878 15.1112 11.1271 15.36 11.4988 15.4561C11.8272 15.5411 12.1725 15.5411 12.501 15.4561C12.8729 15.3599 13.2132 15.1104 13.8926 14.6122L20 10M19.8002 9.03944L14.2012 4.55657C13.506 3.99995 13.1581 3.72174 12.7715 3.61126C12.4304 3.51378 12.0692 3.50861 11.7255 3.59661C11.336 3.69634 10.9809 3.96473 10.2705 4.50188L4.26953 9.03967C3.8038 9.39184 3.57123 9.56804 3.40332 9.7906C3.2546 9.98772 3.14377 10.2107 3.07624 10.4482C3 10.7163 3 11.0083 3 11.5922V17.8001C3 18.9202 3 19.4805 3.21799 19.9083C3.40973 20.2847 3.71547 20.5904 4.0918 20.7822C4.5192 20.9999 5.07899 20.9999 6.19691 20.9999H17.8031C18.921 20.9999 19.48 20.9999 19.9074 20.7822C20.2837 20.5904 20.5905 20.2844 20.7822 19.9081C21 19.4807 21 18.9214 21 17.8035V11.5265C21 10.9693 21 10.689 20.9287 10.4301C20.8651 10.1992 20.7595 9.98161 20.619 9.78768C20.4604 9.56876 20.2409 9.39227 19.8002 9.03944Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
