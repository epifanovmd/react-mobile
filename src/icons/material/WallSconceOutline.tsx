import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WallSconceOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13.7 6L15.92 11H10.08L12.3 6H13.7ZM15 4H11L7 13H19L15 4ZM4 14V22H6V19H14V14H12V17H6V14H4Z" />
    </Svg>
  );
};
