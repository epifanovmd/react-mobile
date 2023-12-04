import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TurnstileIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 22H16V11L10 5V2H22V22ZM9.17 6.17C8.42 6.92 8 7.94 8 9H2V11H8.55C8.9 11.6 9.4 12.1 10 12.45V19H12V13C13.06 13 14.08 12.58 14.83 11.83L9.17 6.17Z" />
    </Svg>
  );
};
