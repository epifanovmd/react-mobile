import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TwoFactorAuthenticationIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 7V9H6V11H4C3.46957 11 2.96086 11.2107 2.58579 11.5858C2.21071 11.9609 2 12.4696 2 13V17H8V15H4V13H6C6.53043 13 7.03914 12.7893 7.41421 12.4142C7.78929 12.0391 8 11.5304 8 11V9C8 7.89 7.1 7 6 7H2ZM9 7V17H11V13H14V11H11V9H15V7H9ZM18 7C17.4696 7 16.9609 7.21071 16.5858 7.58579C16.2107 7.96086 16 8.46957 16 9V17H18V14H20V17H22V9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H18ZM18 9H20V12H18V9Z" />
    </Svg>
  );
};
