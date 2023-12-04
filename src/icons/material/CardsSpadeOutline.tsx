import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardsSpadeOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11 17C11 17 11.3 19 9 22H15C12.7 19 13 17 13 17C13 17 14 18 16 18C18 18 20 16 20 14C20 9 15 7 12 2C9 7 4 9 4 14C4 16 6 18 8 18C10 18 11 17 11 17ZM13 14H11C11 14 10 16 8 16C7.1 16 6 14.9 6 14C5.8 11 9.9 8.2 12 5.4C14.1 8.1 18.2 10.9 18 14C18 14.9 16.9 16 16 16C14 16 13 14 13 14Z" />
    </Svg>
  );
};
