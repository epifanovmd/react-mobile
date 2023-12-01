const genericMessage = 'Invariant Violation modal';

const {
  setPrototypeOf = (obj: any, proto: any): any => {
    obj.__proto__ = proto;

    return obj;
  },
} = Object;

class InvariantError extends Error {
  framesToPop = 1;
  name = genericMessage;

  constructor(message: string | number = genericMessage) {
    super(`${message}`);

    setPrototypeOf(this, InvariantError.prototype);
  }
}

export const invariant = (condition: any, message?: string | number): void => {
  if (condition) {
    throw new InvariantError(message);
  }
};
