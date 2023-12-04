import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MoonWaxingCrescentIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 2.00001C10.9823 1.9984 9.97045 2.15355 9 2.46001C11.0304 3.0981 12.8043 4.36734 14.0636 6.08312C15.3229 7.79889 16.0019 9.8717 16.0019 12C16.0019 14.1283 15.3229 16.2011 14.0636 17.9169C12.8043 19.6327 11.0304 20.9019 9 21.54C10.3751 21.9721 11.8273 22.1019 13.2572 21.9204C14.6871 21.7389 16.0608 21.2505 17.2843 20.4886C18.5078 19.7266 19.5522 18.7092 20.3458 17.506C21.1394 16.3028 21.6635 14.9422 21.8822 13.5175C22.101 12.0929 22.0091 10.6378 21.613 9.25189C21.2169 7.86602 20.5259 6.58216 19.5873 5.48827C18.6488 4.39438 17.4848 3.51631 16.1752 2.91423C14.8656 2.31215 13.4414 2.00029 12 2.00001Z" />
    </Svg>
  );
};
