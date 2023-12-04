import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const Slider02Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path
        d="M14 18H21M3 18H5M5 18C5 19.3807 6.11929 20.5 7.5 20.5C8.88071 20.5 10 19.3807 10 18C10 16.6193 8.88071 15.5 7.5 15.5C6.11929 15.5 5 16.6193 5 18ZM20 12H21M3 12H10M13 6H21M13 6C13 4.61929 11.8807 3.5 10.5 3.5C9.11929 3.5 8 4.61929 8 6C8 7.38071 9.11929 8.5 10.5 8.5C11.8807 8.5 13 7.38071 13 6ZM3 6H4M16.5 14.5C15.1193 14.5 14 13.3807 14 12C14 10.6193 15.1193 9.5 16.5 9.5C17.8807 9.5 19 10.6193 19 12C19 13.3807 17.8807 14.5 16.5 14.5Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
