import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowURightTopBoldIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 13.5C3 9.36 6.36 6 10.5 6H13V2L20 8L13 14V10H10.5C8.57 10 7 11.57 7 13.5C7 15.43 8.57 17 10.5 17H18V21H10.5C6.36 21 3 17.64 3 13.5Z" />
    </Svg>
  );
};
