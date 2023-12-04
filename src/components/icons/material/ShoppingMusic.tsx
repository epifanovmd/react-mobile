import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ShoppingMusicIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6H15C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3ZM19 6C19.5304 6 20.0391 6.21071 20.4142 6.58579C20.7893 6.96086 21 7.46957 21 8V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C3.89 22 3 21.1 3 20V8C3 6.89 3.89 6 5 6H7C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6H19ZM9 19L16.5 14L9 10V19Z" />
    </Svg>
  );
};
