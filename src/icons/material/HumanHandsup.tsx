import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HumanHandsupIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 1C5 3.7 6.56 6.16 9 7.32V22H11V15H13V22H15V7.31C17.44 6.16 19 3.7 19 1H17C17 2.32608 16.4732 3.59785 15.5355 4.53553C15.0712 4.99983 14.52 5.36812 13.9134 5.6194C13.3068 5.87067 12.6566 6 12 6C10.6739 6 9.40215 5.47322 8.46447 4.53553C7.52678 3.59785 7 2.32608 7 1H5ZM12 1C10.89 1 10 1.89 10 3C10 4.11 10.89 5 12 5C13.11 5 14 4.11 14 3C14 1.89 13.11 1 12 1Z" />
    </Svg>
  );
};
