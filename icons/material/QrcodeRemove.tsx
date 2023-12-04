import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const QrcodeRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 5H7V7H5V5ZM1 1H11V11H1V1ZM3 3V9H9V3H3ZM5 17H7V19H5V17ZM1 13H11V23H1V13ZM3 15V21H9V15H3ZM13 13H17V15H19V13H23V15H19V17H23V23H19V21H15V23H13V21H15V19H13V13ZM21 21V19H19V21H21ZM19 17H17V15H15V19H19V17ZM15.17 1.76L13.76 3.17L16.59 6L13.76 8.83L15.17 10.24L18 7.41L20.83 10.24L22.24 8.83L19.41 6L22.24 3.17L20.83 1.76L18 4.59L15.17 1.76Z" />
    </Svg>
  );
};
