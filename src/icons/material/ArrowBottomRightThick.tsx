import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowBottomRightThickIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.8899 12.0599V7.10994H18.3099V18.3099H7.10994V14.8899H12.0599L5.68994 8.49994L8.49994 5.68994L14.8899 12.0599Z" />
    </Svg>
  );
};
