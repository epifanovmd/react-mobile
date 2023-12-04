import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SnowflakeVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.25 11.9992L16.27 10.9992H23L22 8.99922H18.03L20.42 5.82922L19.43 3.82922L15.37 9.19922L13.35 10.2092L13.75 7.99922L17.83 2.61922L15.64 2.21922L12 6.99922L8.4 2.19922L6.2 2.59922L10.26 7.99922L10.66 10.2092L8.82 9.28922L8.66 9.20922L4.6 3.79922L3.6 5.79922L6 8.99922H2L1 10.9992H7.77L9.75 11.9992L7.73 12.9992H1L2 14.9992H5.97L3.58 18.1692L4.57 20.1692L8.63 14.7992L10.65 13.7892L10.25 15.9992L6.17 21.3792L8.36 21.7892L12 16.9992L15.6 21.7992L17.8 21.3992L13.74 15.9992L13.34 13.7892L15.34 14.7892L19.4 20.1992L20.4 18.1992L18 14.9992H22L23 12.9992H16.23" />
    </Svg>
  );
};
