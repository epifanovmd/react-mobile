import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MicrosoftXboxControllerBatteryMediumIcon: FC<
  FlexSvgProps
> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 12V7H15V12H21ZM21.67 5C22.4 5 23 5.6 23 6.33V19.67C23 20.0227 22.8599 20.361 22.6105 20.6105C22.3611 20.8599 22.0228 21 21.67 21H14.33C13.6 21 13 20.4 13 19.67V16.75H7.75002C5.75002 16.75 5.00002 19 3.00002 20C1.00002 20 -0.499978 17 3.50002 8.5H3.75002L4.19002 7.67C4.19002 7.67 7.00002 6 8.33002 7.23H13V6.33C13 5.97726 13.1401 5.63897 13.3896 5.38955C13.639 5.14012 13.9773 5 14.33 5H16V3H20V5H21.67ZM11 8C10.7348 8 10.4805 8.10536 10.2929 8.29289C10.1054 8.48043 10 8.73478 10 9C10 9.26522 10.1054 9.51957 10.2929 9.70711C10.4805 9.89464 10.7348 10 11 10C11.2652 10 11.5196 9.89464 11.7071 9.70711C11.8947 9.51957 12 9.26522 12 9C12 8.73478 11.8947 8.48043 11.7071 8.29289C11.5196 8.10536 11.2652 8 11 8Z" />
    </Svg>
  );
};
