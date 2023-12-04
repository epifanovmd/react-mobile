import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChessQueenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 3C18.5304 3 19.0391 3.21071 19.4142 3.58579C19.7893 3.96086 20 4.46957 20 5C20 5.81 19.5 6.5 18.83 6.82L17 13.15V18H7V13.15L5.17 6.82C4.5 6.5 4 5.81 4 5C4 4.46957 4.21071 3.96086 4.58579 3.58579C4.96086 3.21071 5.46957 3 6 3C6.53043 3 7.03914 3.21071 7.41421 3.58579C7.78929 3.96086 8 4.46957 8 5C8 5.5 7.82 5.95 7.5 6.3L10.3 9.35L10.83 5.62C10.33 5.26 10 4.67 10 4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4C14 4.67 13.67 5.26 13.17 5.62L13.7 9.35L16.47 6.29C16.18 5.94 16 5.5 16 5C16 4.46957 16.2107 3.96086 16.5858 3.58579C16.9609 3.21071 17.4696 3 18 3ZM5 20H19V22H5V20Z" />
    </Svg>
  );
};
