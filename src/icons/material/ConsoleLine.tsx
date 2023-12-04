import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ConsoleLineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 19V16H21V19H13ZM8.49997 13L2.46997 7H6.70997L11.67 11.95C12.25 12.54 12.25 13.5 11.67 14.07L6.73997 19H2.49997L8.49997 13Z" />
    </Svg>
  );
};
