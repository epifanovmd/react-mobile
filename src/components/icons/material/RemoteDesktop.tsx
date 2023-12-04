import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const RemoteDesktopIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 2C2.46957 2 1.96086 2.21071 1.58579 2.58579C1.21071 2.96086 1 3.46957 1 4V16C1 17.11 1.9 18 3 18H10V20H8V22H16V20H14V18H21C21.5304 18 22.0391 17.7893 22.4142 17.4142C22.7893 17.0391 23 16.5304 23 16V4C23 3.46957 22.7893 2.96086 22.4142 2.58579C22.0391 2.21071 21.5304 2 21 2H3ZM3 4H21V16H3V4ZM15 5L11.5 8.5L15 12L16.4 10.6L14.3 8.5L16.4 6.4L15 5ZM9 8L7.6 9.4L9.7 11.5L7.6 13.6L9 15L12.5 11.5" />
    </Svg>
  );
};
