import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmailFastIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22 5.5H9C7.9 5.5 7 6.4 7 7.5V16.5C7 17.61 7.9 18.5 9 18.5H22C23.11 18.5 24 17.61 24 16.5V7.5C24 6.4 23.11 5.5 22 5.5ZM22 9.17L15.5 12.5L9 9.17V7.5L15.5 10.81L22 7.5V9.17ZM5 16.5C5 16.67 5.03 16.83 5.05 17H1C0.448 17 0 16.55 0 16C0 15.45 0.448 15 1 15H5V16.5ZM3 7H5.05C5.03 7.17 5 7.33 5 7.5V9H3C2.45 9 2 8.55 2 8C2 7.45 2.45 7 3 7ZM1 12C1 11.45 1.45 11 2 11H5V13H2C1.45 13 1 12.55 1 12Z" />
    </Svg>
  );
};
