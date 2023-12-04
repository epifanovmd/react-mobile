import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SolderingIronIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4.86003 4.0293L2.03003 6.8593L5.21003 10.0393V12.8693L6.63003 14.2793L12.28 8.6293L10.87 7.2093H8.04003L4.86003 4.0293ZM17 5.9993V7.4993C18 7.4993 18.85 8.3293 18.85 9.3493C18.85 10.3693 18 11.1993 17 11.1993V12.6993C19.24 12.6993 21 14.5293 21 16.7693V20.9993H22.5V16.7593C22.5 14.5393 21.22 12.6193 19.35 11.7293C19.97 11.1193 20.35 10.2793 20.35 9.3493C20.35 7.4993 18.85 5.9993 17 5.9993ZM11.93 11.0993L9.10003 13.9293L14.05 18.8793L14.76 18.1693L16.88 20.2893L19 20.9993L18.29 18.8793L16.17 16.7593L16.88 16.0493L11.93 11.0993Z" />
    </Svg>
  );
};
