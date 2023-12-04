import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CastleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 13H4V15H6V13H8V15H10V13H12V15H14V10L17 7V1H19L23 3L19 5V7L22 10V22H11V19C11 18.4696 10.7893 17.9609 10.4142 17.5858C10.0391 17.2107 9.53043 17 9 17C8.46957 17 7.96086 17.2107 7.58579 17.5858C7.21071 17.9609 7 18.4696 7 19V22H2V13ZM18 10C17.45 10 17 10.54 17 11.2V13H19V11.2C19 10.54 18.55 10 18 10Z" />
    </Svg>
  );
};
