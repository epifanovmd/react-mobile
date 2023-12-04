import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LayersOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 4.52938L10.83 5.43937L9.41 3.99937L12 1.99937L21 8.99938L17.28 11.8894L15.85 10.4694L17.74 8.99938L12 4.52938ZM21 14.0694L20.13 14.7494L18.7 13.3194L19.37 12.7994L21 14.0694ZM3.41 0.859375L22.14 19.5894L20.73 20.9994L16.95 17.2194L12 21.0694L3 14.0694L4.62 12.8094L12 18.5394L15.5 15.7894L14.1 14.3694L12 15.9994L3 8.99938L6.22 6.49937L2 2.26937L3.41 0.859375ZM12 13.4694L12.67 12.9394L7.65 7.91937L6.26 8.99938L12 13.4694Z" />
    </Svg>
  );
};
