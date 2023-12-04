import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HeadingH6Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M15.4024 14.5249C14.574 15.9516 15.0656 17.7759 16.5005 18.5997C17.9354 19.4234 19.7701 18.9346 20.5986 17.5078C21.427 16.0811 20.9352 14.2571 19.5003 13.4334C18.0655 12.6097 16.2309 13.0982 15.4024 14.5249ZM15.4024 14.5249L18.9998 8M3 5V12M3 12V19M3 12H11M11 5V12M11 12V19"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
