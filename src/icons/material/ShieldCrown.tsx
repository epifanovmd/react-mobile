import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShieldCrownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1ZM16 14H8V15.5C8 15.77 8.19 15.96 8.47 16H8.57H15.43C15.74 16 15.95 15.84 16 15.59V15.5V14ZM17 8L14.33 10.67L12 8.34L9.67 10.67L7 8L8 13H16L17 8Z" />
    </Svg>
  );
};
