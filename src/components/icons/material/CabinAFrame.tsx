import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CabinAFrameIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 3L4 21H20L12 3ZM9 19H7.08L9 14.67V19ZM13 19H11V14H13V19ZM10.19 12L12 7.92L13.81 12H10.19ZM15 14.67L16.92 19H15V14.67Z" />
    </Svg>
  );
};
