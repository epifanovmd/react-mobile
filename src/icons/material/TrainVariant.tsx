import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TrainVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 10H6V5H18V10ZM12 17C10.89 17 10 16.1 10 15C10 13.89 10.89 13 12 13C12.5304 13 13.0391 13.2107 13.4142 13.5858C13.7893 13.9609 14 14.4696 14 15C14 15.5304 13.7893 16.0391 13.4142 16.4142C13.0391 16.7893 12.5304 17 12 17ZM4 15.5C4 16.4283 4.36875 17.3185 5.02513 17.9749C5.6815 18.6313 6.57174 19 7.5 19L6 20.5V21H18V20.5L16.5 19C17.4283 19 18.3185 18.6313 18.9749 17.9749C19.6313 17.3185 20 16.4283 20 15.5V5C20 1.5 16.42 1 12 1C7.58 1 4 1.5 4 5V15.5Z" />
    </Svg>
  );
};
