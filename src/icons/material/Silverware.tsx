import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SilverwareIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M8.09999 13.3407L3.90999 9.16071C2.34999 7.59071 2.34999 5.06071 3.90999 3.50071L10.93 10.5007L8.09999 13.3407ZM14.88 11.5307L13.41 13.0007L20.29 19.8807L18.88 21.2907L12 14.4107L5.11999 21.2907L3.70999 19.8807L13.47 10.1207C12.76 8.59071 13.26 6.44071 14.85 4.85071C16.76 2.93071 19.5 2.57072 20.96 4.03072C22.43 5.50072 22.07 8.24071 20.15 10.1507C18.56 11.7407 16.41 12.2407 14.88 11.5307Z" />
    </Svg>
  );
};
