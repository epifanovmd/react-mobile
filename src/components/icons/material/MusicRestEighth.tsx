import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MusicRestEighthIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.0001 6C13.2157 6.93863 12.1436 7.59239 10.9501 7.86C11.025 7.5567 11.0034 7.23755 10.8883 6.94712C10.7731 6.65668 10.5701 6.40946 10.3077 6.23995C10.0452 6.07045 9.73639 5.98713 9.4243 6.00163C9.1122 6.01613 8.81242 6.12771 8.5668 6.32082C8.32119 6.51392 8.14201 6.7789 8.05426 7.07876C7.96652 7.37862 7.9746 7.69839 8.07738 7.99344C8.18015 8.28848 8.37249 8.54407 8.62754 8.72452C8.88259 8.90498 9.18763 9.00128 9.50006 9H9.74006C10.9901 8.99832 12.2116 8.62595 13.2501 7.93L10.0001 18H12.0001L16.0001 6H14.0001Z" />
    </Svg>
  );
};
