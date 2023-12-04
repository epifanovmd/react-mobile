import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LabelOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 4.27L3.28 3L20 19.72L18.73 21L16.63 18.9C16.43 18.96 16.22 19 16 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7C3 6.5 3.17 6.07 3.46 5.73L2 4.27ZM17.63 5.84L22 12L19 16.2L7.83 5H16C16.67 5 17.27 5.33 17.63 5.84Z" />
    </Svg>
  );
};
