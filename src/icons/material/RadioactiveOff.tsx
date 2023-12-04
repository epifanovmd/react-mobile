import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RadioactiveOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M1 4.2693L2.28 2.9993L21 21.7193L19.73 22.9993L17.25 20.4993C15.72 21.4593 13.92 21.9993 12 21.9993C10.05 21.9993 8.22 21.4393 6.69 20.4693L10 15.4693C10.6 15.8093 11.28 15.9993 12 15.9993C12.23 15.9993 12.46 15.9993 12.67 15.9393L8.06 11.3293C8 11.5393 8 11.7693 8 11.9993H2C2 10.0793 2.54 8.2793 3.5 6.7493L1 4.2693ZM12 9.9993C12.5304 9.9993 13.0391 10.21 13.4142 10.5851C13.7893 10.9602 14 11.4689 14 11.9993V12.1693L11.83 9.9993H12ZM8.11 2.7793L10.23 8.4093L5.9 4.0793C6.57 3.5593 7.32 3.1193 8.11 2.7793ZM16 11.9993C16 10.3793 15.04 8.9993 13.66 8.3593L15.89 2.7793C19.5 4.2993 22 7.8593 22 11.9993H16Z" />
    </Svg>
  );
};
