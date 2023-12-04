import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PanoramaSphereIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22 8.1C21.7 8 21.3 7.8 21 7.7C19.4 4.3 16 2 12 2C8 2 4.6 4.3 3 7.7C2.7 7.8 2.3 8 2.1 8.1C1.4 8.5 1 9.2 1 9.9V14.1C1 14.8 1.4 15.5 2 15.9C2.3 16 2.7 16.2 3 16.3C4.6 19.7 8 22 12 22C16 22 19.4 19.7 21 16.3C21.3 16.2 21.6 16 21.9 15.8C22.5 15.4 23 14.8 23 14V9.9C23 9.2 22.6 8.5 22 8.1ZM12 4C14.4 4 16.5 5 18 6.7C16.2 6.2 14.1 6 12 6C9.9 6 7.8 6.2 6.1 6.7C7.5 5 9.6 4 12 4ZM12 20C9.6 20 7.5 19 6.1 17.3C7.8 17.8 9.9 18 12 18C14.1 18 16.2 17.8 18 17.3C16.5 19 14.4 20 12 20Z" />
    </Svg>
  );
};
