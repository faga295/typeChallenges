type If<C extends boolean, T = any, F = any> = C extends true ? T : F;
let a:If<false,string,number>;
