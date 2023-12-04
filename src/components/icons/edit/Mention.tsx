import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MentionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M15 12.0024V13C15 14.1046 15.8954 15 17 15C18.1046 15 19 14.1046 19 13V12C19 10.5021 18.5197 9.04388 17.6294 7.83935C16.7391 6.63482 15.4856 5.74757 14.0537 5.3081C12.6218 4.86863 11.0866 4.90001 9.67383 5.39771C8.26109 5.89542 7.04534 6.83359 6.20508 8.07355C5.36482 9.31351 4.94457 10.7899 5.00587 12.2865C5.06717 13.7831 5.60688 15.2207 6.54573 16.3878C7.48458 17.5549 8.77336 18.3899 10.2221 18.7704C11.6708 19.1509 13.2027 19.0566 14.5939 18.5015M15 12.0024C14.9987 13.6582 13.656 15 12 15C10.3431 15 9 13.6568 9 12C9 10.3431 10.3431 8.99999 12 8.99999C13.656 8.99999 14.9987 10.3418 15 11.9976M15 12.0024V11.9976M15 11.9976V8.99999"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
