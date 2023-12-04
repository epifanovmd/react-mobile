import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CloudIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M19 11C21.2091 11 23 12.7909 23 15C23 17.2091 21.2091 19 19 19L6 19.0001C3.23858 19.0001 1 16.7613 1 13.9999C1 11.3498 3.06206 9.18144 5.66895 9.01082C6.79019 6.64004 9.20335 5 12 5C15.5267 5 18.4447 7.60802 18.9297 11.0006C18.9532 11.0002 18.9764 11 19 11Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
