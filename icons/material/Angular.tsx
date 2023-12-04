import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AngularIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2.5L20.84 5.65L19.5 17.35L12 21.5L4.50003 17.35L3.16003 5.65L12 2.5ZM12 4.6L6.47003 17H8.53003L9.64003 14.22H14.34L15.45 17H17.5L12 4.6ZM13.62 12.5H10.39L12 8.63L13.62 12.5Z" />
    </Svg>
  );
};
