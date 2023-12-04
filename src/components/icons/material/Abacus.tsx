import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AbacusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 5H7V11H5V5ZM10 5H8V11H10V5ZM5 19H7V13H5V19ZM10 13H8V19H10V17H15V15H10V13ZM2 21H4V3H2V21ZM20 3V7H13V5H11V11H13V9H20V15H18V13H16V19H18V17H20V21H22V3H20Z" />
    </Svg>
  );
};
