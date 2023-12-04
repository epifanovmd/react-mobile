import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const Building01Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M2 20H4M4 20H9M4 20V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H8.8002C9.9203 4 10.4796 4 10.9074 4.21799C11.2837 4.40973 11.5905 4.71547 11.7822 5.0918C12 5.5192 12 6.07899 12 7.19691V10.0002M9 20H20M9 20V14.3682C9 13.8428 9 13.58 9.063 13.335C9.11883 13.1178 9.21073 12.9118 9.33496 12.7252C9.47505 12.5147 9.67113 12.3384 10.0615 11.9877L12.3631 9.91997C13.1178 9.24192 13.4955 8.90264 13.9225 8.77393C14.2989 8.66045 14.7007 8.66045 15.0771 8.77393C15.5045 8.90275 15.8827 9.2422 16.6387 9.92139L18.9387 11.9877C19.3295 12.3388 19.5245 12.5146 19.6647 12.7252C19.7889 12.9118 19.8807 13.1178 19.9365 13.335C19.9995 13.58 20 13.8428 20 14.3682V20M20 20H22"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
