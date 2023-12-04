import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const LightbulbSpotIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 19H11V22H9V19ZM13 22H15V19H13V22ZM2 2V4H22V2H2ZM9 14V17H15V14C17.5 12.57 20 11 20 6H4C4 11 6.5 12.57 9 14Z" />
    </Svg>
  );
};
