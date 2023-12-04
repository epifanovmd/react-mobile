import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SkiWaterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4.2 3.50039C4.2 2.70039 4.9 1.90039 5.8 1.90039C6.7 1.90039 7.4 2.60039 7.4 3.50039C7.4 4.40039 6.6 5.00039 5.8 5.00039C5 5.00039 4.2 4.30039 4.2 3.50039ZM22 3.90039L21.5 3.00039L13.5 7.10039L14 8.00039L22 3.90039ZM20.8 20.3004L21.7 21.2004C21.1 21.8004 20.5 22.2004 19.8 22.5004C19.1 22.8004 18.3 23.0004 17.5 23.0004H2V21.7004H4.7L6.8 18.2004L4.5 15.0004L3.7 7.20039C3.7 6.30039 4.5 5.50039 5.4 5.50039C5.7 5.50039 6 5.60039 6.2 5.70039L9.7 8.30039L12 7.50039L12.8 9.10039L9.3 10.6004C9.2 10.5004 7.7 9.40039 6.6 8.50039L7 12.0004L12.3 16.5004L14 21.7004H17.5C18.1 21.7004 18.7 21.6004 19.3 21.3004C19.9 21.1004 20.4 20.7004 20.8 20.3004ZM7 21.7004H12L10.4 17.8004L8.1 15.9004L9.3 18.4004L7 21.7004Z" />
    </Svg>
  );
};
