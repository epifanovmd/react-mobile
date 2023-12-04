import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FlashAutoIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.85 7.65L18 4L19.15 7.65H16.85ZM19 2H17L13.8 11H15.7L16.4 9H19.6L20.3 11H22.2L19 2ZM3 2V14H6V23L13 11H9L13 2H3Z" />
    </Svg>
  );
};
