import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChairSchoolIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 5.00005V7.00005H17L13.53 12H16V14H14.46L18.17 22H15.97L15.04 20H6.38L5.35 22H3.1L7.23 14H7C6.55 14 6.17 13.7 6.04 13.3L2.87 3.84005L3.82 3.50005C4.34 3.34005 4.91 3.63005 5.08 4.15005L7.72 12H12.1L15.57 7.00005H12V5.00005H22ZM9.5 14L7.42 18H14.11L12.26 14H9.5Z" />
    </Svg>
  );
};
