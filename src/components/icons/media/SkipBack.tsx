import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SkipBackIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M7 5V19M18 10.5713V13.4287C18 15.2557 17.9998 16.1693 17.6162 16.6958C17.2817 17.1549 16.7679 17.4496 16.2028 17.5073C15.5548 17.5733 14.7656 17.113 13.1875 16.1924L10.7305 14.7592C9.17859 13.8539 8.40224 13.401 8.14062 12.8105C7.91202 12.2946 7.91202 11.7062 8.14062 11.1902C8.40267 10.5988 9.18117 10.1446 10.7383 9.2363L13.1875 7.80762L13.1895 7.80644C14.7663 6.88663 15.5551 6.42653 16.2028 6.49256C16.7679 6.55017 17.2817 6.84556 17.6162 7.30469C17.9998 7.83111 18 8.74424 18 10.5713Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
