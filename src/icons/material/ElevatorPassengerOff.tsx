import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ElevatorPassengerOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.11 21.4605L20.7 20.0505V20.0405L2.38999 1.73047L1.10999 3.00047L2.99999 4.90047C2.99999 4.94047 2.99999 4.97047 2.99999 5.00047V19.0005C2.99999 20.1005 3.89999 21.0005 4.99999 21.0005H19C19.03 21.0005 19.06 21.0005 19.1 21.0005L20.84 22.7305L22.11 21.4605ZM11 14.0005H9.99999V18.0005H6.99999V14.0005H5.99999V11.5005C5.99999 10.5005 6.70999 9.71047 7.64999 9.54047L11 12.8905V14.0005ZM13.46 10.2605L6.19999 3.00047H19C20.1 3.00047 21 3.90047 21 5.00047V17.8005L17.31 14.1105L18 13.0005H16.2L14.2 11.0005H18L15.5 7.00047L13.46 10.2605Z" />
    </Svg>
  );
};
