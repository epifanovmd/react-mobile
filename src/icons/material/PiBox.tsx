import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PiBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M5 3C3.89 3 3 3.9 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5ZM6 7H17V9H15V14C15 14.2652 15.1054 14.5196 15.2929 14.7071C15.4804 14.8946 15.7348 15 16 15C16.2652 15 16.5196 14.8946 16.7071 14.7071C16.8946 14.5196 17 14.2652 17 14H19C19 14.7956 18.6839 15.5587 18.1213 16.1213C17.5587 16.6839 16.7956 17 16 17C15.2044 17 14.4413 16.6839 13.8787 16.1213C13.3161 15.5587 13 14.7956 13 14V9H10V17H8V9H6" />
    </Svg>
  );
};
