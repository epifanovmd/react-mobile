import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AudioInputRcaIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 6V12H5V6H7V2C7 1.45 7.45 1 8 1C8.55 1 9 1.45 9 2V6H11ZM5 14V16C5 17.3 5.84 18.4 7 18.82V23H9V18.82C10.16 18.4 11 17.3 11 16V14H5ZM17 6V2C17 1.45 16.55 1 16 1C15.45 1 15 1.45 15 2V6H13V12H19V6H17ZM13 14V16C13 17.3 13.84 18.4 15 18.82V23H17V18.82C18.16 18.4 19 17.3 19 16V14H13Z" />
    </Svg>
  );
};
