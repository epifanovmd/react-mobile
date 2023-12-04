import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const RefreshAutoIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.68 6H11.32L7 16H9L9.73 14H14.27L15 16H17L12.68 6ZM10.3 12.5L12 8L13.7 12.5H10.3ZM17.4 20.4L19 22H14V17L16 19C18.39 17.61 20 14.95 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12C4 14.95 5.61 17.53 8 18.92V21.16C4.47 19.61 2 16.1 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 15.53 20.17 18.62 17.4 20.4Z" />
    </Svg>
  );
};
