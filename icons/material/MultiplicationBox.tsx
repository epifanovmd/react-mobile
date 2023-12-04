import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MultiplicationBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H19ZM11 17H13V13.73L15.83 15.36L16.83 13.63L14 12L16.83 10.36L15.83 8.63L13 10.27V7H11V10.27L8.17 8.63L7.17 10.36L10 12L7.17 13.63L8.17 15.36L11 13.73V17Z" />
    </Svg>
  );
};
