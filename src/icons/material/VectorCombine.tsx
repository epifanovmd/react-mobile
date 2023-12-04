import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VectorCombineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 1C1.89 1 1 1.89 1 3V14C1 15.11 1.89 16 3 16C4.33 16 7 16 7 16C7 16 7 18.67 7 20C7 21.11 7.89 22 9 22H20C21.11 22 22 21.11 22 20V9C22 7.89 21.11 7 20 7C18.67 7 16 7 16 7C16 7 16 4.33 16 3C16 1.89 15.11 1 14 1H3ZM3 3H14C14 4.33 14 7 14 7H9C7.89 7 7 7.89 7 9V14C7 14 4.33 14 3 14V3ZM9 9H14V14H9V9ZM16 9C16 9 18.67 9 20 9V20H9C9 18.67 9 16 9 16H14C15.11 16 16 15.11 16 14V9Z" />
    </Svg>
  );
};
