import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CheckboxMultipleMarkedOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 16V10H22V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H8C6.89 18 6 17.1 6 16V4C6 2.89 6.89 2 8 2H16V4H8V16H20ZM10.91 7.08L14 10.17L20.59 3.58L22 5L14 13L9.5 8.5L10.91 7.08ZM16 20V22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V7H4V20H16Z" />
    </Svg>
  );
};
