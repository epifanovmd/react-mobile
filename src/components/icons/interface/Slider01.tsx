import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const Slider01Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path
        d="M14 15H21M3 15H5M5 15C5 16.3807 6.11929 17.5 7.5 17.5C8.88071 17.5 10 16.3807 10 15C10 13.6193 8.88071 12.5 7.5 12.5C6.11929 12.5 5 13.6193 5 15ZM20 9H21M3 9H10M16.5 11.5C15.1193 11.5 14 10.3807 14 9C14 7.61929 15.1193 6.5 16.5 6.5C17.8807 6.5 19 7.61929 19 9C19 10.3807 17.8807 11.5 16.5 11.5Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
