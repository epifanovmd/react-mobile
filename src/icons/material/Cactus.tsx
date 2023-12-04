import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CactusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14 16V21H10V18H9C8.20435 18 7.44129 17.6839 6.87868 17.1213C6.31607 16.5587 6 15.7956 6 15V12C6 11.7348 6.10536 11.4804 6.29289 11.2929C6.48043 11.1054 6.73478 11 7 11C7.26522 11 7.51957 11.1054 7.70711 11.2929C7.89464 11.4804 8 11.7348 8 12V15C8 15.56 8.45 16 9 16H10V6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V14H15C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V11C16 10.7348 16.1054 10.4804 16.2929 10.2929C16.4804 10.1054 16.7348 10 17 10C17.2652 10 17.5196 10.1054 17.7071 10.2929C17.8946 10.4804 18 10.7348 18 11V13C18 13.7956 17.6839 14.5587 17.1213 15.1213C16.5587 15.6839 15.7956 16 15 16H14Z" />
    </Svg>
  );
};
