import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiStrength2LockOpenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.44 10.55C14.68 11.35 14.2 12.38 14.2 13.5V14.74C13.5 15.34 13 16.24 13 17.2V20.24L12 21.5C7.87999 16.37 4.38999 12.06 0.36499 7C3.68999 4.41 7.77999 3 12 3C16.2 3 20.31 4.41 23.64 7L21.5 9.69C20.86 9.33 20.16 9.1 19.41 9.04L20.7 7.45C18.08 5.86 15.06 5 12 5C8.93999 5 5.89999 5.85 3.25999 7.44L6.49999 11.43C7.72999 10.75 9.60999 10 12 10C13.29 10 14.45 10.23 15.44 10.55ZM21.8 16H17.5V13.5C17.5 12.7 18.2 12.2 19 12.2C19.8 12.2 20.5 12.7 20.5 13.5V14H21.8V13.5C21.8 12.1 20.4 11 19 11C17.6 11 16.2 12.1 16.2 13.5V16C15.6 16 15 16.6 15 17.2V20.7C15 21.4 15.6 22 16.2 22H21.7C22.4 22 23 21.4 23 20.8V17.3C23 16.6 22.4 16 21.8 16Z" />
    </Svg>
  );
};