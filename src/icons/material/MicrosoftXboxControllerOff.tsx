import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicrosoftXboxControllerOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1.99995 5.27L3.27995 4L20 20.72L18.73 22L12.5 15.75H8.74995C6.74995 15.75 5.99995 18 3.99995 19C1.99995 19 0.499953 16.04 4.41995 7.69L1.99995 5.27ZM9.32995 6.23H14.67C16 5 18.81 6.67 18.81 6.67L19.25 7.5H19.5C23 15 22.28 18.2 20.69 18.87L7.61995 5.8C8.24995 5.73 8.86995 5.81 9.32995 6.23ZM12 7C11.7347 7 11.4804 7.10536 11.2928 7.29289C11.1053 7.48043 11 7.73478 11 8C11 8.26522 11.1053 8.51957 11.2928 8.70711C11.4804 8.89464 11.7347 9 12 9C12.2652 9 12.5195 8.89464 12.7071 8.70711C12.8946 8.51957 13 8.26522 13 8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5195 7.10536 12.2652 7 12 7Z" />
    </Svg>
  );
};
