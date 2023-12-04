import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LaptopOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M1 4.27L2.28 3L20 20.72L18.73 22L16.73 20H0V18H4C2.89 18 2 17.1 2 16V6C2 5.78 2.04 5.57 2.1 5.37L1 4.27ZM4 16H12.73L4 7.27V16ZM20 16V6H7.82L5.82 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H24V20H21.82L17.82 16H20Z" />
    </Svg>
  );
};
