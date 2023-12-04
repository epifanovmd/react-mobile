import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilmstripIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 9H16V7H18V9ZM18 13H16V11H18V13ZM18 17H16V15H18V17ZM8 9H6V7H8V9ZM8 13H6V11H8V13ZM8 17H6V15H8V17ZM18 3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18Z" />
    </Svg>
  );
};
