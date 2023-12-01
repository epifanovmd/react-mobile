import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { IModalManagerHandles } from './types';
import { memo } from 'react';

export const ModalManager = memo(
  React.forwardRef((_, ref): any => {
    const [portals, setPortals] = React.useState<
      { key: string; children: React.ReactNode }[]
    >([]);

    React.useImperativeHandle(
      ref,
      (): IModalManagerHandles => ({
        mount(key: string, children: React.ReactNode): void {
          setPortals(prev => [...prev, { key, children }]);
        },

        update(key: string, children: React.ReactNode): void {
          setPortals(prev =>
            prev.map(item => {
              if (item.key === key) {
                return { ...item, children };
              }

              return item;
            }),
          );
        },

        unmount(key: string): void {
          setPortals(prev => prev.filter(item => item.key !== key));
        },
      }),
    );

    return portals.map(({ key, children }, index: number) => (
      <View
        key={`modal-port-${key}-${index}`}
        collapsable={false}
        pointerEvents="box-none"
        style={StyleSheet.absoluteFill}
      >
        {children}
      </View>
    ));
  }),
);
