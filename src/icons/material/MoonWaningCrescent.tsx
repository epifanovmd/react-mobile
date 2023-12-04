import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MoonWaningCrescentIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 12.0006C1.9999 13.5708 2.36955 15.1189 3.07901 16.5196C3.78847 17.9204 4.8178 19.1343 6.08367 20.0633C7.34955 20.9922 8.81638 21.6101 10.3654 21.8667C11.9145 22.1234 13.5022 22.0117 15 21.5406C12.9696 20.9025 11.1957 19.6333 9.93641 17.9175C8.67711 16.2017 7.99807 14.1289 7.99807 12.0006C7.99807 9.87229 8.67711 7.79949 9.93641 6.08371C11.1957 4.36794 12.9696 3.09869 15 2.46061C13.5022 1.98956 11.9145 1.87784 10.3654 2.1345C8.81638 2.39115 7.34955 3.00897 6.08367 3.93792C4.8178 4.86688 3.78847 6.08087 3.07901 7.4816C2.36955 8.88234 1.9999 10.4305 2 12.0006Z" />
    </Svg>
  );
};
