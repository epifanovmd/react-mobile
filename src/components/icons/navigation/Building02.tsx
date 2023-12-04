import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const Building02Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M2 20H4M4 20H12M4 20V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H8.8002C9.9203 4 10.4801 4 10.9079 4.21799C11.2842 4.40973 11.5905 4.71547 11.7822 5.0918C12 5.5192 12 6.07899 12 7.19691V10.2461M12 20H20M12 20V10.2461M20 20H22M20 20V14.3682C20 13.843 20 13.5799 19.937 13.335C19.8812 13.1178 19.7889 12.9118 19.6647 12.7252C19.5245 12.5146 19.3295 12.3388 18.9387 11.9877L16.6387 9.92139C15.8827 9.2422 15.5045 8.90275 15.0771 8.77393C14.7007 8.66045 14.299 8.66045 13.9226 8.77393C13.4953 8.90273 13.1173 9.24235 12.3614 9.92139L12 10.2461"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
