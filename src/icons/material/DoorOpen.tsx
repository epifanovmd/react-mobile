import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DoorOpenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 3C10.89 3 10 3.89 10 5H3V19H2V21H22V19H21V5C21 3.89 20.11 3 19 3H12ZM12 5H19V19H12V5ZM5 11H7V13H5V11Z" />
    </Svg>
  );
};
