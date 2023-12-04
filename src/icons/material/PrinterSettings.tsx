import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PrinterSettingsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 2V6H6V2H18ZM19 11C19.2652 11 19.5196 10.8946 19.7071 10.7071C19.8946 10.5196 20 10.2652 20 10C20 9.73478 19.8946 9.48043 19.7071 9.29289C19.5196 9.10536 19.2652 9 19 9C18.7348 9 18.4804 9.10536 18.2929 9.29289C18.1054 9.48043 18 9.73478 18 10C18 10.2652 18.1054 10.5196 18.2929 10.7071C18.4804 10.8946 18.7348 11 19 11ZM16 18V13H8V18H16ZM19 7C19.7956 7 20.5587 7.31607 21.1213 7.87868C21.6839 8.44129 22 9.20435 22 10V16H18V20H6V16H2V10C2 9.20435 2.31607 8.44129 2.87868 7.87868C3.44129 7.31607 4.20435 7 5 7H19ZM15 24V22H17V24H15ZM11 24V22H13V24H11ZM7 24V22H9V24H7Z" />
    </Svg>
  );
};
