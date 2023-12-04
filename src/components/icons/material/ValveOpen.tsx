import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ValveOpenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 22H2V2H4V22ZM22 2H20V22H22V2ZM11 4V9.18C10.4208 9.3902 9.92046 9.77363 9.56684 10.2782C9.21322 10.7827 9.02352 11.3839 9.02352 12C9.02352 12.6161 9.21322 13.2173 9.56684 13.7218C9.92046 14.2264 10.4208 14.6098 11 14.82V20H13V14.82C13.5792 14.6098 14.0795 14.2264 14.4332 13.7218C14.7868 13.2173 14.9765 12.6161 14.9765 12C14.9765 11.3839 14.7868 10.7827 14.4332 10.2782C14.0795 9.77363 13.5792 9.3902 13 9.18V4H11Z" />
    </Svg>
  );
};
