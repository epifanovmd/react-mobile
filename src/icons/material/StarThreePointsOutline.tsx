import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StarThreePointsOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 9.49961L13.2 13.4996L16 16.4996L12 15.5996L7.9 16.4996L10.7 13.4996L12 9.49961ZM12 2.59961L9 12.3996L2 19.8996L12 17.5996L22 19.9996L15 12.4996L12 2.59961Z" />
    </Svg>
  );
};
