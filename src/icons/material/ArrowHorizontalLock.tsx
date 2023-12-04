import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowHorizontalLockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.8 7V5.5C14.8 4.1 13.4 3 12 3C10.6 3 9.2 4.1 9.2 5.5V7C8.6 7 8 7.6 8 8.2V11.7C8 12.4 8.6 13 9.2 13H14.7C15.4 13 16 12.4 16 11.8V8.3C16 7.6 15.4 7 14.8 7ZM13.5 7H10.5V5.5C10.5 4.7 11.2 4.2 12 4.2C12.8 4.2 13.5 4.7 13.5 5.5V7ZM6 17V20L2 16L6 12V15H18V12L22 16L18 20V17H6Z" />
    </Svg>
  );
};
