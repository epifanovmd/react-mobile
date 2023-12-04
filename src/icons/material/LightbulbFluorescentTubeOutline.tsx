import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LightbulbFluorescentTubeOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7.04992 2.80992L6.49992 3.33992L5.10992 1.91992L3.86992 3.15992L5.27992 4.57992L4.57992 5.27992L3.15992 3.86992L1.91992 5.10992L3.33992 6.49992L2.80992 7.04992L4.21992 8.45992L15.5399 19.7799L16.9499 21.1899L17.4999 20.6599L18.8899 22.0799L20.1299 20.8399L18.7199 19.4299L19.4299 18.7199L20.8399 20.1299L22.0799 18.8899L20.6599 17.4999L21.1899 16.9499L19.7799 15.5399L8.45992 4.21992L7.04992 2.80992ZM7.04992 5.63992L18.3599 16.9499L16.9499 18.3599L5.63992 7.04992L7.04992 5.63992Z" />
    </Svg>
  );
};
