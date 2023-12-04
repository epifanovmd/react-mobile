import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const XmlIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.89 3L14.85 3.4L11.11 21L9.14996 20.6L12.89 3ZM19.59 12L16 8.41V5.58L22.42 12L16 18.41V15.58L19.59 12ZM1.57996 12L7.99996 5.58V8.41L4.40996 12L7.99996 15.58V18.41L1.57996 12Z" />
    </Svg>
  );
};
