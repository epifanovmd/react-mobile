import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CreditCardCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 4H4C2.9 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13.09C13.03 19.67 13 19.34 13 19C13 15.69 15.69 13 19 13C20.06 13 21.09 13.28 22 13.81V6C22 4.89 21.11 4 20 4ZM20 11H4V8H20V11ZM17.75 22L15 19L16.16 17.84L17.75 19.43L21.34 15.84L22.5 17.25L17.75 22Z" />
    </Svg>
  );
};
