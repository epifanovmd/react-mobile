import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatTextRotationAngleDownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.2501 20.9998H10.0301L11.4401 19.5898L2.58008 10.7298L4.03008 9.32984L12.8401 18.1898L14.2501 16.7798V20.9998ZM12.6101 7.99984L15.2301 10.6398L17.4301 5.76984L12.6101 7.99984ZM19.4101 4.91984L14.9501 16.0298L13.5001 14.5798L14.3901 12.3798L10.8801 8.80984L8.68008 9.74984L7.22008 8.24984L18.3301 3.83984L19.4101 4.91984Z" />
    </Svg>
  );
};
