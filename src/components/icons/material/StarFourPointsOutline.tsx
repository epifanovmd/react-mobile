import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const StarFourPointsOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 6.7L13.45 10.55L17.3 12L13.45 13.45L12 17.3L10.55 13.45L6.7 12L10.55 10.55L12 6.7ZM12 1L9 9L1 12L9 15L12 23L15 15L23 12L15 9L12 1Z" />
    </Svg>
  );
};
