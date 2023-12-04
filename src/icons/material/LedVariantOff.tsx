import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LedVariantOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 3C10.05 3 8.43 4.4 8.08 6.25L16.82 15H18V13H16V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3ZM3.28 4L2 5.27L8 11.27V13H6V15H9V21H11V15H11.73L13 16.27V21H15V18.27L18.73 22L20 20.72L15 15.72L8 8.72L3.28 4Z" />
    </Svg>
  );
};
