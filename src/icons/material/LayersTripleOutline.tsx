import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LayersTripleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 16.54L19.37 10.8L21 12.07L12 19.07L3 12.07L4.62 10.81L12 16.54ZM12 14L3 7L12 0L21 7L12 14ZM12 2.53L6.26 7L12 11.47L17.74 7L12 2.53ZM12 21.47L19.37 15.73L21 17L12 24L3 17L4.62 15.74L12 21.47Z" />
    </Svg>
  );
};
