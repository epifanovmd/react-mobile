import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowBottomRightBoldOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9.87997 15.54L4.21997 9.87997L9.87997 4.21997L15.54 9.87997L19.78 5.63997V19.78H5.63997L9.87997 15.54ZM17.66 10.59L15.54 12.71L9.87997 7.04997L7.04997 9.87997L12.71 15.54L10.59 17.66H17.66V10.59Z" />
    </Svg>
  );
};
