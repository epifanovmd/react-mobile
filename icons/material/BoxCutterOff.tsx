import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BoxCutterOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.8401 22.73L12.8601 14.75L12.1701 15.44L6.66011 13.08C6.71011 12.65 6.89011 12.24 7.22011 11.91L8.62011 10.5L1.11011 2.99998L2.39011 1.72998L22.1101 21.46L20.8401 22.73ZM15.4101 12.21L11.1601 7.95998L16.4101 2.70998C17.2001 1.92998 18.4601 1.92998 19.2401 2.70998L20.6601 4.12998C21.4401 4.90998 21.4401 6.16998 20.6601 6.95998L15.4101 12.21ZM17.1201 6.24998C17.5001 6.63998 18.1501 6.63998 18.5401 6.24998C18.9301 5.85998 18.9301 5.22998 18.5401 4.82998C18.1501 4.43998 17.5001 4.43998 17.1201 4.82998C16.7301 5.22998 16.7301 5.85998 17.1201 6.24998ZM5.00011 16V21.75L10.8101 16.53L5.81011 14.53L5.00011 16Z" />
    </Svg>
  );
};
