import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SkateOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 15.8105L13.36 10.1605C15.22 10.6205 17.63 11.0505 18.53 12.9505C18.95 13.5705 19 14.7105 19 15.8105ZM20.95 17.0005C20.92 17.2105 20.87 17.4105 20.8 17.6005L22.32 19.1205C22.68 18.5005 22.92 17.7705 23 17.0005H20.95ZM10.5 7.00047V6.00047H9.2L10.2 7.00047H10.5ZM22.11 21.4605L20.84 22.7305L19.66 21.5505C19 21.8305 18.27 22.0005 17.5 22.0005H1V20.0005H5V18.0005H2.03V3.92047L1.11 3.00047L2.03 2.09047V2.00047H2.12L2.39 1.73047L22.11 21.4605ZM14 18.0005H7V20.0005H14V18.0005ZM18.06 19.9505L16.11 18.0005H16V20.0005H17.5C17.69 20.0005 17.88 20.0005 18.06 19.9505ZM10.5 5.00047V2.00047H5.2L8.2 5.00047H10.5Z" />
    </Svg>
  );
};
