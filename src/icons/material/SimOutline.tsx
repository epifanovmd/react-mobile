import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SimOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 4V20H6V8.8L10.8 4H18ZM18 2H10L4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9.5 19H7.5V17H9.5V19ZM16.5 19H14.5V17H16.5V19ZM9.5 15H7.5V11H9.5V15ZM13 19H11V15H13V19ZM13 13H11V11H13V13ZM16.5 15H14.5V11H16.5V15Z" />
    </Svg>
  );
};
