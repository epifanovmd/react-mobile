import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BowlOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 12V15C2 18.9 5.1 22 9 22H15C18.9 22 22 18.9 22 15V12H2ZM4 14H20V15C20 17.8 17.8 20 15 20H9C6.2 20 4 17.8 4 15V14Z" />
    </Svg>
  );
};
