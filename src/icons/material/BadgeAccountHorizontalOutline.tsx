import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BadgeAccountHorizontalOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M8 9C8.53043 9 9.03914 9.21071 9.41421 9.58579C9.78929 9.96086 10 10.4696 10 11C10 11.5304 9.78929 12.0391 9.41421 12.4142C9.03914 12.7893 8.53043 13 8 13C7.46957 13 6.96086 12.7893 6.58579 12.4142C6.21071 12.0391 6 11.5304 6 11C6 10.4696 6.21071 9.96086 6.58579 9.58579C6.96086 9.21071 7.46957 9 8 9ZM12 17H4V16C4 14.67 6.67 14 8 14C9.33 14 12 14.67 12 16V17ZM20 8H14V10H20V8ZM20 12H14V14H20V12ZM20 16H14V18H20V16ZM22 4H14V6H22V20H2V6H10V4H2C1.46957 4 0.960859 4.21071 0.585786 4.58579C0.210714 4.96086 0 5.46957 0 6L0 20C0 20.5304 0.210714 21.0391 0.585786 21.4142C0.960859 21.7893 1.46957 22 2 22H22C22.5304 22 23.0391 21.7893 23.4142 21.4142C23.7893 21.0391 24 20.5304 24 20V6C24 5.46957 23.7893 4.96086 23.4142 4.58579C23.0391 4.21071 22.5304 4 22 4ZM13 6H11V2H13V6Z" />
    </Svg>
  );
};
