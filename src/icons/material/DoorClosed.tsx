import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DoorClosedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16 11H18V13H16V11ZM12 3H19C20.11 3 21 3.89 21 5V19H22V21H2V19H10V5C10 3.89 10.89 3 12 3ZM12 5V19H19V5H12Z" />
    </Svg>
  );
};
