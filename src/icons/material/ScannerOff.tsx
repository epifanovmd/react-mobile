import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScannerOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 5.27L3.28 4L20 20.72L18.73 22L16.73 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V12.5C3 11.7 3.5 10.9 4.2 10.7L6.57 9.84L2 5.27ZM6.4 12H8.73L8.11 11.38L6.4 12ZM5 15V17H13.73L11.73 15H5ZM19.8 5L20.5 6.9L11.85 10.03L10.3 8.47L19.8 5ZM19 12C19.5304 12 20.0391 12.2107 20.4142 12.5858C20.7893 12.9609 21 13.4696 21 14V18C21 18.34 20.91 18.66 20.76 18.94L19 17.18V15H16.82L13.82 12H19Z" />
    </Svg>
  );
};
