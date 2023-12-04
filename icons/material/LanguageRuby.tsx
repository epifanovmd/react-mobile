import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const LanguageRubyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.8 2.07055C21.32 2.50055 22.04 4.23055 22 6.04055V6.00055L20.86 20.9305L6.08 21.9405H6.09C4.86 21.8905 2.13 21.7705 2 17.9505L3.37 15.4505L6.14 21.9105L8.5 14.2905L8.45 14.3005L8.47 14.2805L16.18 16.7405L14.19 8.96055L21.54 8.50055L15.75 3.76055L18.8 2.06055V2.07055ZM2 17.9105V17.9305V17.9105ZM6.28 6.23055C9.24 3.28055 13.07 1.54055 14.54 3.03055C16 4.50055 14.46 8.12055 11.5 11.0605C8.5 14.0005 4.73 15.8405 3.26 14.3605C1.79 12.8705 3.3 9.17055 6.27 6.23055H6.28Z" />
    </Svg>
  );
};
