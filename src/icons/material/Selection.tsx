import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SelectionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4ZM22 4V7H20V4H17V2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4ZM20 20V17H22V20C22 21.11 21.1 22 20 22H17V20H20ZM2 20V17H4V20H7V22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20ZM10 2H14V4H10V2ZM10 20H14V22H10V20ZM20 10H22V14H20V10ZM2 10H4V14H2V10Z" />
    </Svg>
  );
};
