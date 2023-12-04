import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AccountSupervisorIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.5 12C16.8283 12 17.1534 11.9353 17.4567 11.8097C17.76 11.6841 18.0356 11.4999 18.2678 11.2678C18.4999 11.0356 18.6841 10.76 18.8097 10.4567C18.9353 10.1534 19 9.8283 19 9.5C19 8.83696 18.7366 8.20107 18.2678 7.73223C17.7989 7.26339 17.163 7 16.5 7C15.837 7 15.2011 7.26339 14.7322 7.73223C14.2634 8.20107 14 8.83696 14 9.5C14 9.8283 14.0647 10.1534 14.1903 10.4567C14.3159 10.76 14.5001 11.0356 14.7322 11.2678C15.2011 11.7366 15.837 12 16.5 12ZM9 11C9.79565 11 10.5587 10.6839 11.1213 10.1213C11.6839 9.55871 12 8.79565 12 8C12 7.20435 11.6839 6.44129 11.1213 5.87868C10.5587 5.31607 9.79565 5 9 5C8.20435 5 7.44129 5.31607 6.87868 5.87868C6.31607 6.44129 6 7.20435 6 8C6 8.79565 6.31607 9.55871 6.87868 10.1213C7.44129 10.6839 8.20435 11 9 11ZM16.5 14C14.67 14 11 14.92 11 16.75V19H22V16.75C22 14.92 18.33 14 16.5 14ZM9 13C6.67 13 2 14.17 2 16.5V19H9V16.75C9 15.9 9.33 14.41 11.37 13.28C10.5 13.1 9.66 13 9 13Z" />
    </Svg>
  );
};
