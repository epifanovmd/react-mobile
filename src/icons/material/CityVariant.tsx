import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CityVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19 9V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H16V2H14V5H13C12.4696 5 11.9609 5.21071 11.5858 5.58579C11.2107 5.96086 11 6.46957 11 7V9C10.4696 9 9.96086 9.21071 9.58579 9.58579C9.21071 9.96086 9 10.4696 9 11V12H5C4.46957 12 3.96086 12.2107 3.58579 12.5858C3.21071 12.9609 3 13.4696 3 14V22H6V20H8V22H12V20H14V22H16V20H18V22H21V11C21 10.4696 20.7893 9.96086 20.4142 9.58579C20.0391 9.21071 19.5304 9 19 9ZM8 18H6V16H8V18ZM14 18H12V16H14V18ZM14 14H12V12H14V14ZM13 9V7H17V9H13ZM18 18H16V16H18V18ZM18 14H16V12H18V14Z" />
    </Svg>
  );
};
