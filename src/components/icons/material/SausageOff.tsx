import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SausageOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.8001 22.6992L16.3001 18.1992C14.2001 19.8992 11.4001 20.9992 8.5001 20.9992C7.1001 20.9992 5.9001 20.1992 5.3001 18.9992L3.0001 20.4992V14.4992L5.3001 15.9992C5.8001 14.7992 7.1001 13.9992 8.5001 13.9992C9.5001 13.9992 10.5001 13.6992 11.3001 13.1992L1.1001 2.99922L2.4001 1.69922L22.1001 21.3992L20.8001 22.6992ZM21.0001 8.49922C21.0001 7.09922 20.2001 5.89922 19.0001 5.29922L20.5001 2.99922H14.5001L16.0001 5.29922C14.8001 5.79922 14.0001 7.09922 14.0001 8.49922C14.0001 9.19922 13.9001 9.79922 13.6001 10.3992L18.7001 15.5992C20.2001 13.5992 21.0001 11.0992 21.0001 8.49922Z" />
    </Svg>
  );
};
