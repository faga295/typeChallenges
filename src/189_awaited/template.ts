type deepPromise<T>  =T extends Promise<infer u> ? deepPromise<u> : T
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer r> ? deepPromise<r> : never
