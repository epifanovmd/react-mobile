import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilmIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3.5 3H5V1.8C5 1.36 5.36 1 5.8 1H10.2C10.64 1 11 1.36 11 1.8V3H12.5C12.8978 3 13.2794 3.15804 13.5607 3.43934C13.842 3.72064 14 4.10218 14 4.5V5H22V20H14V20.5C14 20.8978 13.842 21.2794 13.5607 21.5607C13.2794 21.842 12.8978 22 12.5 22H3.5C3.10218 22 2.72064 21.842 2.43934 21.5607C2.15804 21.2794 2 20.8978 2 20.5V4.5C2 4.10218 2.15804 3.72064 2.43934 3.43934C2.72064 3.15804 3.10218 3 3.5 3ZM18 7V9H20V7H18ZM14 7V9H16V7H14ZM10 7V9H12V7H10ZM14 16V18H16V16H14ZM18 16V18H20V16H18ZM10 16V18H12V16H10Z" />
    </Svg>
  );
};
