import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EscalatorBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M5 3C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3H5ZM14.34 6H17.05C18.16 6 19.05 6.9 19.05 8C19.05 9.11 18.16 10 17.05 10H16L10 18H7.05C5.95 18 5.05 17.11 5.05 16C5.05 14.9 5.95 14 7.05 14H8.34L14.34 6Z" />
    </Svg>
  );
};
