import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BedSingleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.0001 10V7C17.0001 5.9 16.1101 5 15.0001 5H9.00005C7.90005 5 7.00005 5.9 7.00005 7V10C5.90005 10 4.89005 10.9 5.00005 12V17H6.33005L7.00005 19H8.00005L8.67005 17H15.3301L16.0001 19H17.0001L17.6701 17H19.0001V12C19.0001 10.9 18.1101 10 17.0001 10ZM15.0001 10H9.00005V7H15.0001V10Z" />
    </Svg>
  );
};
