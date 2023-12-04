import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PackageIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.12 5H18.87L17.93 4H5.93L5.12 5ZM20.54 5.23C20.83 5.57 21 6 21 6.5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V6.5C3 6 3.17 5.57 3.46 5.23L4.84 3.55C5.12 3.21 5.53 3 6 3H18C18.47 3 18.88 3.21 19.15 3.55L20.54 5.23ZM6 18H12V15H6V18Z" />
    </Svg>
  );
};
