import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ArrowRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 11.0001V13.0001H16L10.5 18.5001L11.92 19.9201L19.84 12.0001L11.92 4.08008L10.5 5.50008L16 11.0001H4Z" />
    </Svg>
  );
};
