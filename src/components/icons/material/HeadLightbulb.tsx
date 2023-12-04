import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HeadLightbulbIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 3C9.22996 3 6.18996 5.95 5.99996 9.66L4.07996 12.19C3.83996 12.5 4.07996 13 4.49996 13H5.99996V16C5.99996 17.11 6.88996 18 7.99996 18H8.99996V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3ZM14 14H12V13H14V14ZM15.6 9.5C15.34 9.94 14.96 10.32 14.5 10.58V12H11.5V10.58C10.07 9.75 9.56996 7.92 10.4 6.5C11.23 5.08 13.07 4.56 14.5 5.38C15.93 6.2 16.43 8.05 15.6 9.5Z" />
    </Svg>
  );
};
