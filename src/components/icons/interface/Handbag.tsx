import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HandbagIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M8 8H7.71094C6.74786 8 6.26653 8 5.87598 8.17521C5.5317 8.32965 5.23841 8.57838 5.02947 8.89258C4.79244 9.24902 4.71276 9.72386 4.55443 10.6738L3.62109 16.2738L3.62072 16.2759C3.40728 17.5565 3.3005 18.1972 3.48595 18.6965C3.64877 19.1348 3.96058 19.5022 4.36621 19.7349C4.82844 20 5.47776 20 6.77734 20H17.2224C18.522 20 19.1724 20 19.6346 19.7349C20.0402 19.5022 20.3513 19.1348 20.5141 18.6965C20.6995 18.1974 20.5928 17.557 20.3795 16.2774L20.3786 16.2738L19.4453 10.6738C19.287 9.72386 19.2077 9.24902 18.9707 8.89258C18.7618 8.57838 18.4682 8.32965 18.124 8.17521C17.7334 8 17.2524 8 16.2893 8H16M8 8H16M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
