import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WaterAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 3.25C10 3.25 16 10 16 14C16 17.31 13.31 20 10 20C6.69 20 4 17.31 4 14C4 10 10 3.25 10 3.25ZM20 7V13H18V7H20ZM18 17H20V15H18V17Z" />
    </Svg>
  );
};
