import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FireExtinguisherIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10.5 7H11.75L12 5H10.25L6 7.5V9H4V6.5L10 3H12V2H14V3H16L17 2.5V5.5L16 5H14L14.25 7H15.5C15.8978 7 16.2794 7.15804 16.5607 7.43934C16.842 7.72064 17 8.10218 17 8.5V22H9V8.5C9 8.10218 9.15804 7.72064 9.43934 7.43934C9.72064 7.15804 10.1022 7 10.5 7Z" />
    </Svg>
  );
};
