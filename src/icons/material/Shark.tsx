import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SharkIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.56 9.09C14.66 7.18 12.54 6 11 6C11.47 7.4 11.28 8.57 10.95 9.43C8.45 10 6 11 6 11C6 11 3 7 1 7L3 13L2 17C4 17 6 14 6 14C6 14 11 16 14 16V18C14.65 18 15.91 17.17 16.73 15.77C17.97 15.56 19 15.21 19.87 14.81C19.72 14.63 19.53 14.44 19.28 14.3C18.63 13.91 17.82 13.67 17 13.5C17.82 13.34 18.67 13.22 19.59 13.35C20.05 13.41 20.54 13.54 21 13.86C21.1 13.92 21.17 14 21.24 14.05C22.4 13.26 23 12.44 23 12C23 11.13 19.19 9.5 15.56 9.09ZM18 12C17.45 12 17 11.55 17 11C17 10.76 17.1 10.55 17.23 10.38C17.84 10.5 18.43 10.67 18.97 10.84C19 10.89 19 10.94 19 11C19 11.55 18.55 12 18 12Z" />
    </Svg>
  );
};
