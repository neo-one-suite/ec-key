import { Verify } from 'crypto';

interface ECKeyOptions {
  crv: 'P-256';
  publicKey: Buffer;
}

declare class ECKey {
  constructor(options: ECKeyOptions);
  createVerify(alg: 'SHA256'): Verify;
}

export default ECKey;
