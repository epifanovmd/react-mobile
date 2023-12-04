import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WrenchClockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 6.2C10 4.3 8.8 2.6 7 2V5.7H4V2C2.2 2.6 1 4.3 1 6.2C1 8.1 2.2 9.8 4 10.4V21.4C4 21.8 4.2 22 4.5 22H6.5C6.8 22 7 21.8 7 21.5V10.5C8.8 9.9 10 8.2 10 6.2ZM16 8C15.9 8 16 8 16 8C12.1 8.1 9 11.2 9 15C9 18.9 12.1 22 16 22C19.9 22 23 18.9 23 15C23 11.1 19.9 8 16 8ZM16 20C13.2 20 11 17.8 11 15C11 12.2 13.2 10 16 10C18.8 10 21 12.2 21 15C21 17.8 18.8 20 16 20ZM15 11V16L18.6 18.2L19.4 17L16.5 15.3V11H15Z" />
    </Svg>
  );
};
