import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CurrencyRubIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M6 10H7V3H14.5C17 3 19 5 19 7.5C19 10 17 12 14.5 12H9V14H15V16H9V21H7V16H6V14H7V12H6V10ZM14.5 5H9V10H14.5C15.163 10 15.7989 9.73661 16.2678 9.26777C16.7366 8.79893 17 8.16304 17 7.5C17 6.83696 16.7366 6.20107 16.2678 5.73223C15.7989 5.26339 15.163 5 14.5 5Z" />
    </Svg>
  );
};
