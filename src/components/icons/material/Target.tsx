import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TargetIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 2V4.07C7.38 4.53 4.53 7.38 4.07 11H2V13H4.07C4.53 16.62 7.38 19.47 11 19.93V22H13V19.93C16.62 19.47 19.47 16.62 19.93 13H22V11H19.93C19.47 7.38 16.62 4.53 13 4.07V2H11ZM11 6.08V8H13V6.09C15.5 6.5 17.5 8.5 17.92 11H16V13H17.91C17.5 15.5 15.5 17.5 13 17.92V16H11V17.91C8.5 17.5 6.5 15.5 6.08 13H8V11H6.09C6.5 8.5 8.5 6.5 11 6.08ZM12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11Z" />
    </Svg>
  );
};
