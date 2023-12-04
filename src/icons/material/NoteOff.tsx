import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NoteOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.11 21.4605L20.84 22.7305L19.1 21.0005C19.07 21.0005 19.03 21.0005 19 21.0005H4.99999C3.89999 21.0005 2.99999 20.1105 2.99999 19.0005V5.00047C2.99999 4.97047 2.99999 4.93047 2.99999 4.90047L1.10999 3.00047L2.38999 1.73047L20.7 20.0405V20.0505L22.11 21.4605ZM21 17.8005L6.19999 3.00047H15L21 9.00047V17.8005ZM19.5 10.0005L14 4.50047V10.0005H19.5Z" />
    </Svg>
  );
};
