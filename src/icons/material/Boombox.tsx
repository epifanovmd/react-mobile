import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BoomboxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 5L5 7V8H3C2.73478 8 2.48043 8.10536 2.29289 8.29289C2.10536 8.48043 2 8.73478 2 9V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17V9C22 8.73478 21.8946 8.48043 21.7071 8.29289C21.5196 8.10536 21.2652 8 21 8H19V7L17 5H7ZM7 7H17V8H7V7ZM11 9H13C13.1326 9 13.2598 9.05268 13.3536 9.14645C13.4473 9.24021 13.5 9.36739 13.5 9.5C13.5 9.63261 13.4473 9.75979 13.3536 9.85355C13.2598 9.94732 13.1326 10 13 10H11C10.8674 10 10.7402 9.94732 10.6464 9.85355C10.5527 9.75979 10.5 9.63261 10.5 9.5C10.5 9.36739 10.5527 9.24021 10.6464 9.14645C10.7402 9.05268 10.8674 9 11 9ZM7.5 10.5C8.29565 10.5 9.05871 10.8161 9.62132 11.3787C10.1839 11.9413 10.5 12.7044 10.5 13.5C10.5 14.2956 10.1839 15.0587 9.62132 15.6213C9.05871 16.1839 8.29565 16.5 7.5 16.5C6.70435 16.5 5.94129 16.1839 5.37868 15.6213C4.81607 15.0587 4.5 14.2956 4.5 13.5C4.5 12.7044 4.81607 11.9413 5.37868 11.3787C5.94129 10.8161 6.70435 10.5 7.5 10.5ZM16.5 10.5C17.2956 10.5 18.0587 10.8161 18.6213 11.3787C19.1839 11.9413 19.5 12.7044 19.5 13.5C19.5 14.2956 19.1839 15.0587 18.6213 15.6213C18.0587 16.1839 17.2956 16.5 16.5 16.5C15.7044 16.5 14.9413 16.1839 14.3787 15.6213C13.8161 15.0587 13.5 14.2956 13.5 13.5C13.5 12.7044 13.8161 11.9413 14.3787 11.3787C14.9413 10.8161 15.7044 10.5 16.5 10.5ZM7.5 12C7.10218 12 6.72064 12.158 6.43934 12.4393C6.15804 12.7206 6 13.1022 6 13.5C6 13.8978 6.15804 14.2794 6.43934 14.5607C6.72064 14.842 7.10218 15 7.5 15C7.89782 15 8.27936 14.842 8.56066 14.5607C8.84196 14.2794 9 13.8978 9 13.5C9 13.1022 8.84196 12.7206 8.56066 12.4393C8.27936 12.158 7.89782 12 7.5 12ZM16.5 12C16.1022 12 15.7206 12.158 15.4393 12.4393C15.158 12.7206 15 13.1022 15 13.5C15 13.8978 15.158 14.2794 15.4393 14.5607C15.7206 14.842 16.1022 15 16.5 15C16.8978 15 17.2794 14.842 17.5607 14.5607C17.842 14.2794 18 13.8978 18 13.5C18 13.1022 17.842 12.7206 17.5607 12.4393C17.2794 12.158 16.8978 12 16.5 12Z" />
    </Svg>
  );
};
