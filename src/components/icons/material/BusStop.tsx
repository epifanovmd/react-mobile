import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BusStopIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 7V16C22 16.71 21.62 17.36 21 17.72V19.25C21 19.66 20.66 20 20.25 20H19.75C19.34 20 19 19.66 19 19.25V18H12V19.25C12 19.66 11.66 20 11.25 20H10.75C10.34 20 9.99999 19.66 9.99999 19.25V17.72C9.38999 17.36 8.99999 16.71 8.99999 16V7C8.99999 4 12 4 15.5 4C19 4 22 4 22 7ZM13 15C13 14.45 12.55 14 12 14C11.45 14 11 14.45 11 15C11 15.55 11.45 16 12 16C12.55 16 13 15.55 13 15ZM20 15C20 14.45 19.55 14 19 14C18.45 14 18 14.45 18 15C18 15.55 18.45 16 19 16C19.55 16 20 15.55 20 15ZM20 7H11V11H20V7ZM6.99999 9.5C6.96999 8.12 5.82999 7 4.44999 7.05C3.06999 7.08 1.96999 8.22 1.99999 9.6C2.02999 10.77 2.85999 11.77 3.99999 12V20H4.99999V12C6.17999 11.76 6.99999 10.71 6.99999 9.5Z" />
    </Svg>
  );
};
