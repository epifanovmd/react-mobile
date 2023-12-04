import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WaterAlertOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 3.25C10 3.25 4 10 4 14C4 17.31 6.69 20 10 20C13.31 20 16 17.31 16 14C16 10 10 3.25 10 3.25ZM10 18C7.79 18 6 16.21 6 14C6 12.23 8 8.96 10 6.39C12 8.95 14 12.23 14 14C14 16.21 12.21 18 10 18ZM20 7V13H18V7H20ZM18 17H20V15H18V17Z" />
    </Svg>
  );
};
