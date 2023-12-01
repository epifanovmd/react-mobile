import * as React from "react";
import { View } from "react-native";

import { useKey } from "./hooks/useKey";
import { ModalManager } from "./ModalManager";
import { IModalHostProps, IModalManagerHandles, IModalProvider } from "./types";

export const ModalContext = React.createContext<IModalProvider | null>(null);

export const ModalHost = ({ children, style }: IModalHostProps) => {
  const managerRef = React.useRef<IModalManagerHandles>(null);
  const queue: {
    type: "mount" | "update" | "unmount";
    key: string;
    children?: React.ReactNode;
  }[] = [];
  const { generateKey, removeKey } = useKey();

  React.useEffect(() => {
    while (queue.length && managerRef.current) {
      const action = queue.pop();

      if (action) {
        switch (action.type) {
          case "mount":
            managerRef.current?.mount(action.key, action.children);
            break;
          case "update":
            managerRef.current?.update(action.key, action.children);
            break;
          case "unmount":
            managerRef.current?.unmount(action.key);
            break;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mount = (_children: React.ReactNode): string => {
    const key = generateKey();

    if (managerRef.current) {
      managerRef.current.mount(key, _children);
    } else {
      queue.push({ type: "mount", key, children: _children });
    }

    return key;
  };

  const update = (key: string, _children: React.ReactNode): void => {
    if (managerRef.current) {
      managerRef.current.update(key, _children);
    } else {
      const op = { type: "mount" as "mount", key, _children };
      const index = queue.findIndex(
        o => o.type === "mount" || (o.type === "update" && o.key === key),
      );

      if (index > -1) {
        queue[index] = op;
      } else {
        queue.push(op);
      }
    }
  };

  const unmount = (key: string): void => {
    if (managerRef.current) {
      managerRef.current.unmount(key);
      removeKey(key);
    } else {
      queue.push({ type: "unmount", key });
    }
  };

  return (
    <ModalContext.Provider value={{ mount, update, unmount }}>
      <View
        style={[{ flex: 1 }, style]}
        collapsable={false}
        pointerEvents="box-none"
      >
        {children}
      </View>

      <ModalManager ref={managerRef} />
    </ModalContext.Provider>
  );
};
