import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HumanPregnantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 4C9 2.89 9.89 2 11 2C12.11 2 13 2.89 13 4C13 5.11 12.11 6 11 6C9.89 6 9 5.11 9 4ZM16 13C16 11.66 15.17 10.5 14 10C14 9.20435 13.6839 8.44129 13.1213 7.87868C12.5587 7.31607 11.7956 7 11 7C10.2044 7 9.44129 7.31607 8.87868 7.87868C8.31607 8.44129 8 9.20435 8 10V17H10V22H13V17H16V13Z" />
    </Svg>
  );
};
