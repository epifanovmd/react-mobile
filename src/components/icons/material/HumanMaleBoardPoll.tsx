import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HumanMaleBoardPollIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 17C21.1 17 22 16.1 22 15V4C22 2.9 21.1 2 20 2H9.5C9.8 2.6 10 3.3 10 4H20V15H11V17H20ZM15 7V9H9V22H7V16H5V22H3V14H1.5V9C1.5 7.9 2.4 7 3.5 7H15ZM8 4C8 5.1 7.1 6 6 6C4.9 6 4 5.1 4 4C4 2.9 4.9 2 6 2C7.1 2 8 2.9 8 4ZM17 6H19V14H17V6ZM14 10H16V14H14V10ZM11 10H13V14H11V10Z" />
    </Svg>
  );
};
