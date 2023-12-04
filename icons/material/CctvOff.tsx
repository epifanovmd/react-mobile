import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CctvOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.8401 22.73L18.1101 20H17.0001C15.9001 20 15.0001 19.1 15.0001 18V16.89L12.6601 14.55L11.8101 15.04C10.8601 15.59 9.63011 15.26 9.08011 14.31L7.58011 11.71C7.18011 11 7.25011 10.18 7.68011 9.56998L1.11011 2.99998L2.39011 1.72998L22.1101 21.46L20.8401 22.73ZM18.5001 13C18.5001 12.43 18.3001 11.9 17.9701 11.5L19.9401 10.35C20.9501 9.75998 21.3001 8.46998 20.7101 7.45998L19.3301 5.05998C18.7401 4.04998 17.4501 3.69998 16.4401 4.27998L10.7701 7.56998L17.8601 14.66C18.2601 14.22 18.5001 13.64 18.5001 13ZM2.00011 12.62L5.50011 18.68L8.03011 15.5L6.03011 12.03L2.00011 12.62Z" />
    </Svg>
  );
};
