import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StarCrescentIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.3 1.99933C12.2 1.99933 12.1 1.99933 12 1.99933C10.6868 1.99933 9.38642 2.25798 8.17317 2.76053C6.95991 3.26308 5.85752 3.99967 4.92893 4.92826C3.05357 6.80362 2 9.34716 2 11.9993C2 14.6515 3.05357 17.195 4.92893 19.0704C5.85752 19.999 6.95991 20.7356 8.17317 21.2381C9.38642 21.7407 10.6868 21.9993 12 21.9993C15 21.9993 16.7 20.9993 18.5 19.4993C13 20.9993 8 16.9993 8 11.9993C8 6.99933 13 2.99933 18.5 4.49933C16.86 2.85933 14.62 1.95933 12.3 1.99933ZM16.8 6.19933L15.3 9.69933L11.6 9.99933L14.5 12.4993L13.6 15.9993L16.8 13.9993L20 15.9993L19 12.4993L22 9.99933L18.3 9.69933L16.8 6.19933Z" />
    </Svg>
  );
};
