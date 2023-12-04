import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HockeyPuckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 5C6.5 5 2 6.57 2 8.5C2 10.43 6.5 12 12 12C17.5 12 22 10.43 22 8.5C22 6.57 17.5 5 12 5ZM2 11.76V16.5C2 18.43 6.5 20 12 20C17.5 20 22 18.43 22 16.5V11.76C21.33 12.22 20.58 12.57 19.73 12.86C17.62 13.6 14.95 14 12 14C9.05 14 6.38 13.6 4.27 12.86C3.42 12.57 2.67 12.22 2 11.76Z" />
    </Svg>
  );
};
