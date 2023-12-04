import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SkewMoreIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.5 11L10.41 20H5.5L7.59 11H12.5ZM15 9H6L3 22H12L15 9ZM21 6L17 2V5H9V7H17V10L21 6Z" />
    </Svg>
  );
};
