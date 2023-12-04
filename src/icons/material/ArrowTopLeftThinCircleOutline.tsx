import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowTopLeftThinCircleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 3.97C16.41 3.97 20.03 7.59 20.03 12C20.03 16.41 16.41 20.03 12 20.03C7.59 20.03 3.97 16.41 3.97 12C3.97 7.59 7.59 3.97 12 3.97ZM12 2C6.46 2 2 6.46 2 12C2 17.54 6.46 22 12 22C17.54 22 22 17.54 22 12C22 6.46 17.54 2 12 2ZM10.12 11.53L8 13.64V8H13.64L11.53 10.12L16.5 15.1L15.1 16.5" />
    </Svg>
  );
};
