import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SprayBottleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 7H15C15.66 7.64 16 8.31 16 9V22H8V15C8 14.72 8.11 14.39 8.3 14L12 7ZM16 4L15 6H12V5L10 7H9L10 5V4H9V2H14.5C14.8978 2 15.2794 2.15804 15.5607 2.43934C15.842 2.72064 16 3.10218 16 3.5V4Z" />
    </Svg>
  );
};
