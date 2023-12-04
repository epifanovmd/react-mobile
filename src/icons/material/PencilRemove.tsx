import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PencilRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.7 7.00039C21.1 6.60039 21.1 6.00039 20.7 5.60039L18.4 3.30039C18 2.90039 17.4 2.90039 17 3.30039L15.2 5.10039L19 8.90039L20.7 7.00039ZM3 17.2004V21.0004H6.8L17.8 9.90039L14.1 6.10039L3 17.2004ZM3.9 2.40039L6 4.50039L8.1 2.40039L9.5 3.80039L7.4 5.90039L9.5 8.00039L8.1 9.50039L6 7.40039L3.9 9.50039L2.5 8.10039L4.6 6.00039L2.5 3.80039L3.9 2.40039Z" />
    </Svg>
  );
};
