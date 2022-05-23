
type isSame<X,Y> =  (<T>() => T extends X ? true : false) extends (<T>() => T extends Y ? true : false) ? true : false 
type Includes<T extends readonly any[],K> =  T extends [infer F,...infer R]?isSame<F,K> extends true?true:Includes<R,K>: false