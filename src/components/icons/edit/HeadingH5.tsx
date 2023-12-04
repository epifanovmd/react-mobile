import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HeadingH5Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M21 9H17L15.75 14.0158C15.8285 13.9268 15.912 13.8429 16 13.7642C16.3509 13.4504 16.7731 13.2209 17.2346 13.0991C17.9263 12.9166 18.6611 12.9876 19.3053 13.2987C19.9495 13.6099 20.4608 14.1414 20.7479 14.7967C21.035 15.452 21.0788 16.188 20.8707 16.8725C20.6627 17.557 20.2165 18.1447 19.6133 18.5295C19.0101 18.9142 18.2895 19.0704 17.5811 18.9704C16.8726 18.8705 16.2232 18.521 15.75 17.9844M3 5V12M3 12V19M3 12H11M11 5V12M11 12V19"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
