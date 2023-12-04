import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const Signal3gIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 16.5V14.25C11 13 10 12 8.75 12C10 12 11 11 11 9.75V7.5C11 6.70435 10.6839 5.94129 10.1213 5.37868C9.55871 4.81607 8.79565 4.5 8 4.5H2V7.5H8V10.5H5V13.5H8V16.5H2V19.5H8C8.79565 19.5 9.55871 19.1839 10.1213 18.6213C10.6839 18.0587 11 17.2956 11 16.5ZM22 16.5V10.5H17.5V13.5H19V16.5H16V7.5H22V4.5H16C15.2044 4.5 14.4413 4.81607 13.8787 5.37868C13.3161 5.94129 13 6.70435 13 7.5V16.5C13 17.2956 13.3161 18.0587 13.8787 18.6213C14.4413 19.1839 15.2044 19.5 16 19.5H19C19.7956 19.5 20.5587 19.1839 21.1213 18.6213C21.6839 18.0587 22 17.2956 22 16.5Z" />
    </Svg>
  );
};
