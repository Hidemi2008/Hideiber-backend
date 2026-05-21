
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Offer
 * 
 */
export type Offer = $Result.DefaultSelection<Prisma.$OfferPayload>
/**
 * Model OfferService
 * 
 */
export type OfferService = $Result.DefaultSelection<Prisma.$OfferServicePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **Offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.OfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offerService`: Exposes CRUD operations for the **OfferService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfferServices
    * const offerServices = await prisma.offerService.findMany()
    * ```
    */
  get offerService(): Prisma.OfferServiceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Service: 'Service',
    Offer: 'Offer',
    OfferService: 'OfferService'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "service" | "offer" | "offerService"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Offer: {
        payload: Prisma.$OfferPayload<ExtArgs>
        fields: Prisma.OfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findFirst: {
            args: Prisma.OfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findMany: {
            args: Prisma.OfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          create: {
            args: Prisma.OfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          createMany: {
            args: Prisma.OfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          delete: {
            args: Prisma.OfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          update: {
            args: Prisma.OfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          deleteMany: {
            args: Prisma.OfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          upsert: {
            args: Prisma.OfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.OfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
          }
        }
      }
      OfferService: {
        payload: Prisma.$OfferServicePayload<ExtArgs>
        fields: Prisma.OfferServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferServicePayload>
          }
          findFirst: {
            args: Prisma.OfferServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferServicePayload>
          }
          findMany: {
            args: Prisma.OfferServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferServicePayload>[]
          }
          create: {
            args: Prisma.OfferServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferServicePayload>
          }
          createMany: {
            args: Prisma.OfferServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferServicePayload>[]
          }
          delete: {
            args: Prisma.OfferServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferServicePayload>
          }
          update: {
            args: Prisma.OfferServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferServicePayload>
          }
          deleteMany: {
            args: Prisma.OfferServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferServicePayload>[]
          }
          upsert: {
            args: Prisma.OfferServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferServicePayload>
          }
          aggregate: {
            args: Prisma.OfferServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfferService>
          }
          groupBy: {
            args: Prisma.OfferServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferServiceCountArgs<ExtArgs>
            result: $Utils.Optional<OfferServiceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    service?: ServiceOmit
    offer?: OfferOmit
    offerService?: OfferServiceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    services: number
    offers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | UserCountOutputTypeCountServicesArgs
    offers?: boolean | UserCountOutputTypeCountOffersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    offerServices: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offerServices?: boolean | ServiceCountOutputTypeCountOfferServicesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountOfferServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferServiceWhereInput
  }


  /**
   * Count Type OfferCountOutputType
   */

  export type OfferCountOutputType = {
    services: number
  }

  export type OfferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | OfferCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferCountOutputType
     */
    select?: OfferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferServiceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    services?: boolean | User$servicesArgs<ExtArgs>
    offers?: boolean | User$offersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | User$servicesArgs<ExtArgs>
    offers?: boolean | User$offersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
      offers: Prisma.$OfferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends User$servicesArgs<ExtArgs> = {}>(args?: Subset<T, User$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    offers<T extends User$offersArgs<ExtArgs> = {}>(args?: Subset<T, User$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.services
   */
  export type User$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * User.offers
   */
  export type User$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    price: number | null
    discount: number | null
    estimatedTime: number | null
  }

  export type ServiceSumAggregateOutputType = {
    price: number | null
    discount: number | null
    estimatedTime: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    discount: number | null
    estimatedTime: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    discount: number | null
    estimatedTime: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    discount: number
    estimatedTime: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    price?: true
    discount?: true
    estimatedTime?: true
  }

  export type ServiceSumAggregateInputType = {
    price?: true
    discount?: true
    estimatedTime?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    discount?: true
    estimatedTime?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    discount?: true
    estimatedTime?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    discount?: true
    estimatedTime?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: number
    discount: number | null
    estimatedTime: number | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    discount?: boolean
    estimatedTime?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    offerServices?: boolean | Service$offerServicesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    discount?: boolean
    estimatedTime?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    discount?: boolean
    estimatedTime?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    discount?: boolean
    estimatedTime?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "discount" | "estimatedTime" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    offerServices?: boolean | Service$offerServicesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      offerServices: Prisma.$OfferServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: number
      discount: number | null
      estimatedTime: number | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    offerServices<T extends Service$offerServicesArgs<ExtArgs> = {}>(args?: Subset<T, Service$offerServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Float'>
    readonly discount: FieldRef<"Service", 'Float'>
    readonly estimatedTime: FieldRef<"Service", 'Int'>
    readonly userId: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.offerServices
   */
  export type Service$offerServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferService
     */
    select?: OfferServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferService
     */
    omit?: OfferServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferServiceInclude<ExtArgs> | null
    where?: OfferServiceWhereInput
    orderBy?: OfferServiceOrderByWithRelationInput | OfferServiceOrderByWithRelationInput[]
    cursor?: OfferServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferServiceScalarFieldEnum | OfferServiceScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferMinAggregateOutputType = {
    id: string | null
    title: string | null
    details: string | null
    validUntil: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type OfferMaxAggregateOutputType = {
    id: string | null
    title: string | null
    details: string | null
    validUntil: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type OfferCountAggregateOutputType = {
    id: number
    title: number
    details: number
    validUntil: number
    userId: number
    createdAt: number
    _all: number
  }


  export type OfferMinAggregateInputType = {
    id?: true
    title?: true
    details?: true
    validUntil?: true
    userId?: true
    createdAt?: true
  }

  export type OfferMaxAggregateInputType = {
    id?: true
    title?: true
    details?: true
    validUntil?: true
    userId?: true
    createdAt?: true
  }

  export type OfferCountAggregateInputType = {
    id?: true
    title?: true
    details?: true
    validUntil?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offer to aggregate.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type OfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithAggregationInput | OfferOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: OfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    id: string
    title: string
    details: string | null
    validUntil: Date | null
    userId: string
    createdAt: Date
    _count: OfferCountAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type OfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    details?: boolean
    validUntil?: boolean
    userId?: boolean
    createdAt?: boolean
    services?: boolean | Offer$servicesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | OfferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    details?: boolean
    validUntil?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    details?: boolean
    validUntil?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectScalar = {
    id?: boolean
    title?: boolean
    details?: boolean
    validUntil?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type OfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "details" | "validUntil" | "userId" | "createdAt", ExtArgs["result"]["offer"]>
  export type OfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Offer$servicesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | OfferCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offer"
    objects: {
      services: Prisma.$OfferServicePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      details: string | null
      validUntil: Date | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = $Result.GetResult<Prisma.$OfferPayload, S>

  type OfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface OfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offer'], meta: { name: 'Offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {OfferFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferFindUniqueArgs>(args: SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferFindFirstArgs>(args?: SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferFindManyArgs>(args?: SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Offer.
     * @param {OfferCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends OfferCreateArgs>(args: SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offers.
     * @param {OfferCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCreateManyArgs>(args?: SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offers and returns the data saved in the database.
     * @param {OfferCreateManyAndReturnArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Offer.
     * @param {OfferDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends OfferDeleteArgs>(args: SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Offer.
     * @param {OfferUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferUpdateArgs>(args: SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offers.
     * @param {OfferDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDeleteManyArgs>(args?: SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferUpdateManyArgs>(args: SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers and returns the data updated in the database.
     * @param {OfferUpdateManyAndReturnArgs} args - Arguments to update many Offers.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OfferUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Offer.
     * @param {OfferUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends OfferUpsertArgs>(args: SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends OfferCountArgs>(
      args?: Subset<T, OfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferGroupByArgs['orderBy'] }
        : { orderBy?: OfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offer model
   */
  readonly fields: OfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Offer$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Offer$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Offer model
   */
  interface OfferFieldRefs {
    readonly id: FieldRef<"Offer", 'String'>
    readonly title: FieldRef<"Offer", 'String'>
    readonly details: FieldRef<"Offer", 'String'>
    readonly validUntil: FieldRef<"Offer", 'DateTime'>
    readonly userId: FieldRef<"Offer", 'String'>
    readonly createdAt: FieldRef<"Offer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Offer findUnique
   */
  export type OfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findUniqueOrThrow
   */
  export type OfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findFirst
   */
  export type OfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findFirstOrThrow
   */
  export type OfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findMany
   */
  export type OfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offers to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer create
   */
  export type OfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to create a Offer.
     */
    data: XOR<OfferCreateInput, OfferUncheckedCreateInput>
  }

  /**
   * Offer createMany
   */
  export type OfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offer createManyAndReturn
   */
  export type OfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer update
   */
  export type OfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to update a Offer.
     */
    data: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
    /**
     * Choose, which Offer to update.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer updateMany
   */
  export type OfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
  }

  /**
   * Offer updateManyAndReturn
   */
  export type OfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer upsert
   */
  export type OfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The filter to search for the Offer to update in case it exists.
     */
    where: OfferWhereUniqueInput
    /**
     * In case the Offer found by the `where` argument doesn't exist, create a new Offer with this data.
     */
    create: XOR<OfferCreateInput, OfferUncheckedCreateInput>
    /**
     * In case the Offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
  }

  /**
   * Offer delete
   */
  export type OfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter which Offer to delete.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer deleteMany
   */
  export type OfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offers to delete
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to delete.
     */
    limit?: number
  }

  /**
   * Offer.services
   */
  export type Offer$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferService
     */
    select?: OfferServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferService
     */
    omit?: OfferServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferServiceInclude<ExtArgs> | null
    where?: OfferServiceWhereInput
    orderBy?: OfferServiceOrderByWithRelationInput | OfferServiceOrderByWithRelationInput[]
    cursor?: OfferServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferServiceScalarFieldEnum | OfferServiceScalarFieldEnum[]
  }

  /**
   * Offer without action
   */
  export type OfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
  }


  /**
   * Model OfferService
   */

  export type AggregateOfferService = {
    _count: OfferServiceCountAggregateOutputType | null
    _min: OfferServiceMinAggregateOutputType | null
    _max: OfferServiceMaxAggregateOutputType | null
  }

  export type OfferServiceMinAggregateOutputType = {
    id: string | null
    offerId: string | null
    serviceId: string | null
  }

  export type OfferServiceMaxAggregateOutputType = {
    id: string | null
    offerId: string | null
    serviceId: string | null
  }

  export type OfferServiceCountAggregateOutputType = {
    id: number
    offerId: number
    serviceId: number
    _all: number
  }


  export type OfferServiceMinAggregateInputType = {
    id?: true
    offerId?: true
    serviceId?: true
  }

  export type OfferServiceMaxAggregateInputType = {
    id?: true
    offerId?: true
    serviceId?: true
  }

  export type OfferServiceCountAggregateInputType = {
    id?: true
    offerId?: true
    serviceId?: true
    _all?: true
  }

  export type OfferServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferService to aggregate.
     */
    where?: OfferServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferServices to fetch.
     */
    orderBy?: OfferServiceOrderByWithRelationInput | OfferServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfferServices
    **/
    _count?: true | OfferServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferServiceMaxAggregateInputType
  }

  export type GetOfferServiceAggregateType<T extends OfferServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateOfferService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfferService[P]>
      : GetScalarType<T[P], AggregateOfferService[P]>
  }




  export type OfferServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferServiceWhereInput
    orderBy?: OfferServiceOrderByWithAggregationInput | OfferServiceOrderByWithAggregationInput[]
    by: OfferServiceScalarFieldEnum[] | OfferServiceScalarFieldEnum
    having?: OfferServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferServiceCountAggregateInputType | true
    _min?: OfferServiceMinAggregateInputType
    _max?: OfferServiceMaxAggregateInputType
  }

  export type OfferServiceGroupByOutputType = {
    id: string
    offerId: string
    serviceId: string
    _count: OfferServiceCountAggregateOutputType | null
    _min: OfferServiceMinAggregateOutputType | null
    _max: OfferServiceMaxAggregateOutputType | null
  }

  type GetOfferServiceGroupByPayload<T extends OfferServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferServiceGroupByOutputType[P]>
            : GetScalarType<T[P], OfferServiceGroupByOutputType[P]>
        }
      >
    >


  export type OfferServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    offerId?: boolean
    serviceId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerService"]>

  export type OfferServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    offerId?: boolean
    serviceId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerService"]>

  export type OfferServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    offerId?: boolean
    serviceId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerService"]>

  export type OfferServiceSelectScalar = {
    id?: boolean
    offerId?: boolean
    serviceId?: boolean
  }

  export type OfferServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "offerId" | "serviceId", ExtArgs["result"]["offerService"]>
  export type OfferServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type OfferServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type OfferServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $OfferServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfferService"
    objects: {
      offer: Prisma.$OfferPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      offerId: string
      serviceId: string
    }, ExtArgs["result"]["offerService"]>
    composites: {}
  }

  type OfferServiceGetPayload<S extends boolean | null | undefined | OfferServiceDefaultArgs> = $Result.GetResult<Prisma.$OfferServicePayload, S>

  type OfferServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferServiceCountAggregateInputType | true
    }

  export interface OfferServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfferService'], meta: { name: 'OfferService' } }
    /**
     * Find zero or one OfferService that matches the filter.
     * @param {OfferServiceFindUniqueArgs} args - Arguments to find a OfferService
     * @example
     * // Get one OfferService
     * const offerService = await prisma.offerService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferServiceFindUniqueArgs>(args: SelectSubset<T, OfferServiceFindUniqueArgs<ExtArgs>>): Prisma__OfferServiceClient<$Result.GetResult<Prisma.$OfferServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OfferService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferServiceFindUniqueOrThrowArgs} args - Arguments to find a OfferService
     * @example
     * // Get one OfferService
     * const offerService = await prisma.offerService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferServiceClient<$Result.GetResult<Prisma.$OfferServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfferService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferServiceFindFirstArgs} args - Arguments to find a OfferService
     * @example
     * // Get one OfferService
     * const offerService = await prisma.offerService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferServiceFindFirstArgs>(args?: SelectSubset<T, OfferServiceFindFirstArgs<ExtArgs>>): Prisma__OfferServiceClient<$Result.GetResult<Prisma.$OfferServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfferService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferServiceFindFirstOrThrowArgs} args - Arguments to find a OfferService
     * @example
     * // Get one OfferService
     * const offerService = await prisma.offerService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferServiceClient<$Result.GetResult<Prisma.$OfferServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OfferServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfferServices
     * const offerServices = await prisma.offerService.findMany()
     * 
     * // Get first 10 OfferServices
     * const offerServices = await prisma.offerService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerServiceWithIdOnly = await prisma.offerService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferServiceFindManyArgs>(args?: SelectSubset<T, OfferServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OfferService.
     * @param {OfferServiceCreateArgs} args - Arguments to create a OfferService.
     * @example
     * // Create one OfferService
     * const OfferService = await prisma.offerService.create({
     *   data: {
     *     // ... data to create a OfferService
     *   }
     * })
     * 
     */
    create<T extends OfferServiceCreateArgs>(args: SelectSubset<T, OfferServiceCreateArgs<ExtArgs>>): Prisma__OfferServiceClient<$Result.GetResult<Prisma.$OfferServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OfferServices.
     * @param {OfferServiceCreateManyArgs} args - Arguments to create many OfferServices.
     * @example
     * // Create many OfferServices
     * const offerService = await prisma.offerService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferServiceCreateManyArgs>(args?: SelectSubset<T, OfferServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OfferServices and returns the data saved in the database.
     * @param {OfferServiceCreateManyAndReturnArgs} args - Arguments to create many OfferServices.
     * @example
     * // Create many OfferServices
     * const offerService = await prisma.offerService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OfferServices and only return the `id`
     * const offerServiceWithIdOnly = await prisma.offerService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OfferService.
     * @param {OfferServiceDeleteArgs} args - Arguments to delete one OfferService.
     * @example
     * // Delete one OfferService
     * const OfferService = await prisma.offerService.delete({
     *   where: {
     *     // ... filter to delete one OfferService
     *   }
     * })
     * 
     */
    delete<T extends OfferServiceDeleteArgs>(args: SelectSubset<T, OfferServiceDeleteArgs<ExtArgs>>): Prisma__OfferServiceClient<$Result.GetResult<Prisma.$OfferServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OfferService.
     * @param {OfferServiceUpdateArgs} args - Arguments to update one OfferService.
     * @example
     * // Update one OfferService
     * const offerService = await prisma.offerService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferServiceUpdateArgs>(args: SelectSubset<T, OfferServiceUpdateArgs<ExtArgs>>): Prisma__OfferServiceClient<$Result.GetResult<Prisma.$OfferServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OfferServices.
     * @param {OfferServiceDeleteManyArgs} args - Arguments to filter OfferServices to delete.
     * @example
     * // Delete a few OfferServices
     * const { count } = await prisma.offerService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferServiceDeleteManyArgs>(args?: SelectSubset<T, OfferServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfferServices
     * const offerService = await prisma.offerService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferServiceUpdateManyArgs>(args: SelectSubset<T, OfferServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferServices and returns the data updated in the database.
     * @param {OfferServiceUpdateManyAndReturnArgs} args - Arguments to update many OfferServices.
     * @example
     * // Update many OfferServices
     * const offerService = await prisma.offerService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OfferServices and only return the `id`
     * const offerServiceWithIdOnly = await prisma.offerService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OfferServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OfferService.
     * @param {OfferServiceUpsertArgs} args - Arguments to update or create a OfferService.
     * @example
     * // Update or create a OfferService
     * const offerService = await prisma.offerService.upsert({
     *   create: {
     *     // ... data to create a OfferService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfferService we want to update
     *   }
     * })
     */
    upsert<T extends OfferServiceUpsertArgs>(args: SelectSubset<T, OfferServiceUpsertArgs<ExtArgs>>): Prisma__OfferServiceClient<$Result.GetResult<Prisma.$OfferServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OfferServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferServiceCountArgs} args - Arguments to filter OfferServices to count.
     * @example
     * // Count the number of OfferServices
     * const count = await prisma.offerService.count({
     *   where: {
     *     // ... the filter for the OfferServices we want to count
     *   }
     * })
    **/
    count<T extends OfferServiceCountArgs>(
      args?: Subset<T, OfferServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfferService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfferServiceAggregateArgs>(args: Subset<T, OfferServiceAggregateArgs>): Prisma.PrismaPromise<GetOfferServiceAggregateType<T>>

    /**
     * Group by OfferService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfferServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferServiceGroupByArgs['orderBy'] }
        : { orderBy?: OfferServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfferService model
   */
  readonly fields: OfferServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfferService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offer<T extends OfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfferDefaultArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OfferService model
   */
  interface OfferServiceFieldRefs {
    readonly id: FieldRef<"OfferService", 'String'>
    readonly offerId: FieldRef<"OfferService", 'String'>
    readonly serviceId: FieldRef<"OfferService", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OfferService findUnique
   */
  export type OfferServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferService
     */
    select?: OfferServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferService
     */
    omit?: OfferServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferServiceInclude<ExtArgs> | null
    /**
     * Filter, which OfferService to fetch.
     */
    where: OfferServiceWhereUniqueInput
  }

  /**
   * OfferService findUniqueOrThrow
   */
  export type OfferServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferService
     */
    select?: OfferServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferService
     */
    omit?: OfferServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferServiceInclude<ExtArgs> | null
    /**
     * Filter, which OfferService to fetch.
     */
    where: OfferServiceWhereUniqueInput
  }

  /**
   * OfferService findFirst
   */
  export type OfferServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferService
     */
    select?: OfferServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferService
     */
    omit?: OfferServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferServiceInclude<ExtArgs> | null
    /**
     * Filter, which OfferService to fetch.
     */
    where?: OfferServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferServices to fetch.
     */
    orderBy?: OfferServiceOrderByWithRelationInput | OfferServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferServices.
     */
    cursor?: OfferServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferServices.
     */
    distinct?: OfferServiceScalarFieldEnum | OfferServiceScalarFieldEnum[]
  }

  /**
   * OfferService findFirstOrThrow
   */
  export type OfferServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferService
     */
    select?: OfferServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferService
     */
    omit?: OfferServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferServiceInclude<ExtArgs> | null
    /**
     * Filter, which OfferService to fetch.
     */
    where?: OfferServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferServices to fetch.
     */
    orderBy?: OfferServiceOrderByWithRelationInput | OfferServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferServices.
     */
    cursor?: OfferServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferServices.
     */
    distinct?: OfferServiceScalarFieldEnum | OfferServiceScalarFieldEnum[]
  }

  /**
   * OfferService findMany
   */
  export type OfferServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferService
     */
    select?: OfferServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferService
     */
    omit?: OfferServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferServiceInclude<ExtArgs> | null
    /**
     * Filter, which OfferServices to fetch.
     */
    where?: OfferServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferServices to fetch.
     */
    orderBy?: OfferServiceOrderByWithRelationInput | OfferServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfferServices.
     */
    cursor?: OfferServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferServices.
     */
    distinct?: OfferServiceScalarFieldEnum | OfferServiceScalarFieldEnum[]
  }

  /**
   * OfferService create
   */
  export type OfferServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferService
     */
    select?: OfferServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferService
     */
    omit?: OfferServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a OfferService.
     */
    data: XOR<OfferServiceCreateInput, OfferServiceUncheckedCreateInput>
  }

  /**
   * OfferService createMany
   */
  export type OfferServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfferServices.
     */
    data: OfferServiceCreateManyInput | OfferServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OfferService createManyAndReturn
   */
  export type OfferServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferService
     */
    select?: OfferServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfferService
     */
    omit?: OfferServiceOmit<ExtArgs> | null
    /**
     * The data used to create many OfferServices.
     */
    data: OfferServiceCreateManyInput | OfferServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfferService update
   */
  export type OfferServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferService
     */
    select?: OfferServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferService
     */
    omit?: OfferServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a OfferService.
     */
    data: XOR<OfferServiceUpdateInput, OfferServiceUncheckedUpdateInput>
    /**
     * Choose, which OfferService to update.
     */
    where: OfferServiceWhereUniqueInput
  }

  /**
   * OfferService updateMany
   */
  export type OfferServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfferServices.
     */
    data: XOR<OfferServiceUpdateManyMutationInput, OfferServiceUncheckedUpdateManyInput>
    /**
     * Filter which OfferServices to update
     */
    where?: OfferServiceWhereInput
    /**
     * Limit how many OfferServices to update.
     */
    limit?: number
  }

  /**
   * OfferService updateManyAndReturn
   */
  export type OfferServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferService
     */
    select?: OfferServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfferService
     */
    omit?: OfferServiceOmit<ExtArgs> | null
    /**
     * The data used to update OfferServices.
     */
    data: XOR<OfferServiceUpdateManyMutationInput, OfferServiceUncheckedUpdateManyInput>
    /**
     * Filter which OfferServices to update
     */
    where?: OfferServiceWhereInput
    /**
     * Limit how many OfferServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfferService upsert
   */
  export type OfferServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferService
     */
    select?: OfferServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferService
     */
    omit?: OfferServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the OfferService to update in case it exists.
     */
    where: OfferServiceWhereUniqueInput
    /**
     * In case the OfferService found by the `where` argument doesn't exist, create a new OfferService with this data.
     */
    create: XOR<OfferServiceCreateInput, OfferServiceUncheckedCreateInput>
    /**
     * In case the OfferService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferServiceUpdateInput, OfferServiceUncheckedUpdateInput>
  }

  /**
   * OfferService delete
   */
  export type OfferServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferService
     */
    select?: OfferServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferService
     */
    omit?: OfferServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferServiceInclude<ExtArgs> | null
    /**
     * Filter which OfferService to delete.
     */
    where: OfferServiceWhereUniqueInput
  }

  /**
   * OfferService deleteMany
   */
  export type OfferServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferServices to delete
     */
    where?: OfferServiceWhereInput
    /**
     * Limit how many OfferServices to delete.
     */
    limit?: number
  }

  /**
   * OfferService without action
   */
  export type OfferServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferService
     */
    select?: OfferServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferService
     */
    omit?: OfferServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferServiceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    discount: 'discount',
    estimatedTime: 'estimatedTime',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const OfferScalarFieldEnum: {
    id: 'id',
    title: 'title',
    details: 'details',
    validUntil: 'validUntil',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


  export const OfferServiceScalarFieldEnum: {
    id: 'id',
    offerId: 'offerId',
    serviceId: 'serviceId'
  };

  export type OfferServiceScalarFieldEnum = (typeof OfferServiceScalarFieldEnum)[keyof typeof OfferServiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    services?: ServiceListRelationFilter
    offers?: OfferListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    services?: ServiceOrderByRelationAggregateInput
    offers?: OfferOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    services?: ServiceListRelationFilter
    offers?: OfferListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: FloatFilter<"Service"> | number
    discount?: FloatNullableFilter<"Service"> | number | null
    estimatedTime?: IntNullableFilter<"Service"> | number | null
    userId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    offerServices?: OfferServiceListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    discount?: SortOrderInput | SortOrder
    estimatedTime?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    offerServices?: OfferServiceOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: FloatFilter<"Service"> | number
    discount?: FloatNullableFilter<"Service"> | number | null
    estimatedTime?: IntNullableFilter<"Service"> | number | null
    userId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    offerServices?: OfferServiceListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    discount?: SortOrderInput | SortOrder
    estimatedTime?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    price?: FloatWithAggregatesFilter<"Service"> | number
    discount?: FloatNullableWithAggregatesFilter<"Service"> | number | null
    estimatedTime?: IntNullableWithAggregatesFilter<"Service"> | number | null
    userId?: StringWithAggregatesFilter<"Service"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type OfferWhereInput = {
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    id?: StringFilter<"Offer"> | string
    title?: StringFilter<"Offer"> | string
    details?: StringNullableFilter<"Offer"> | string | null
    validUntil?: DateTimeNullableFilter<"Offer"> | Date | string | null
    userId?: StringFilter<"Offer"> | string
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    services?: OfferServiceListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OfferOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrderInput | SortOrder
    validUntil?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    services?: OfferServiceOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type OfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    title?: StringFilter<"Offer"> | string
    details?: StringNullableFilter<"Offer"> | string | null
    validUntil?: DateTimeNullableFilter<"Offer"> | Date | string | null
    userId?: StringFilter<"Offer"> | string
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    services?: OfferServiceListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OfferOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrderInput | SortOrder
    validUntil?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: OfferCountOrderByAggregateInput
    _max?: OfferMaxOrderByAggregateInput
    _min?: OfferMinOrderByAggregateInput
  }

  export type OfferScalarWhereWithAggregatesInput = {
    AND?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    OR?: OfferScalarWhereWithAggregatesInput[]
    NOT?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Offer"> | string
    title?: StringWithAggregatesFilter<"Offer"> | string
    details?: StringNullableWithAggregatesFilter<"Offer"> | string | null
    validUntil?: DateTimeNullableWithAggregatesFilter<"Offer"> | Date | string | null
    userId?: StringWithAggregatesFilter<"Offer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
  }

  export type OfferServiceWhereInput = {
    AND?: OfferServiceWhereInput | OfferServiceWhereInput[]
    OR?: OfferServiceWhereInput[]
    NOT?: OfferServiceWhereInput | OfferServiceWhereInput[]
    id?: StringFilter<"OfferService"> | string
    offerId?: StringFilter<"OfferService"> | string
    serviceId?: StringFilter<"OfferService"> | string
    offer?: XOR<OfferScalarRelationFilter, OfferWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type OfferServiceOrderByWithRelationInput = {
    id?: SortOrder
    offerId?: SortOrder
    serviceId?: SortOrder
    offer?: OfferOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type OfferServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfferServiceWhereInput | OfferServiceWhereInput[]
    OR?: OfferServiceWhereInput[]
    NOT?: OfferServiceWhereInput | OfferServiceWhereInput[]
    offerId?: StringFilter<"OfferService"> | string
    serviceId?: StringFilter<"OfferService"> | string
    offer?: XOR<OfferScalarRelationFilter, OfferWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type OfferServiceOrderByWithAggregationInput = {
    id?: SortOrder
    offerId?: SortOrder
    serviceId?: SortOrder
    _count?: OfferServiceCountOrderByAggregateInput
    _max?: OfferServiceMaxOrderByAggregateInput
    _min?: OfferServiceMinOrderByAggregateInput
  }

  export type OfferServiceScalarWhereWithAggregatesInput = {
    AND?: OfferServiceScalarWhereWithAggregatesInput | OfferServiceScalarWhereWithAggregatesInput[]
    OR?: OfferServiceScalarWhereWithAggregatesInput[]
    NOT?: OfferServiceScalarWhereWithAggregatesInput | OfferServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OfferService"> | string
    offerId?: StringWithAggregatesFilter<"OfferService"> | string
    serviceId?: StringWithAggregatesFilter<"OfferService"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    services?: ServiceCreateNestedManyWithoutUserInput
    offers?: OfferCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutUserInput
    offers?: OfferUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutUserNestedInput
    offers?: OfferUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutUserNestedInput
    offers?: OfferUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discount?: number | null
    estimatedTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutServicesInput
    offerServices?: OfferServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discount?: number | null
    estimatedTime?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    offerServices?: OfferServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutServicesNestedInput
    offerServices?: OfferServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offerServices?: OfferServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discount?: number | null
    estimatedTime?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateInput = {
    id?: string
    title: string
    details?: string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    services?: OfferServiceCreateNestedManyWithoutOfferInput
    user: UserCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateInput = {
    id?: string
    title: string
    details?: string | null
    validUntil?: Date | string | null
    userId: string
    createdAt?: Date | string
    services?: OfferServiceUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: OfferServiceUpdateManyWithoutOfferNestedInput
    user?: UserUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: OfferServiceUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferCreateManyInput = {
    id?: string
    title: string
    details?: string | null
    validUntil?: Date | string | null
    userId: string
    createdAt?: Date | string
  }

  export type OfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferServiceCreateInput = {
    id?: string
    offer: OfferCreateNestedOneWithoutServicesInput
    service: ServiceCreateNestedOneWithoutOfferServicesInput
  }

  export type OfferServiceUncheckedCreateInput = {
    id?: string
    offerId: string
    serviceId: string
  }

  export type OfferServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    offer?: OfferUpdateOneRequiredWithoutServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutOfferServicesNestedInput
  }

  export type OfferServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferServiceCreateManyInput = {
    id?: string
    offerId: string
    serviceId: string
  }

  export type OfferServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type OfferServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type OfferListRelationFilter = {
    every?: OfferWhereInput
    some?: OfferWhereInput
    none?: OfferWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OfferServiceListRelationFilter = {
    every?: OfferServiceWhereInput
    some?: OfferServiceWhereInput
    none?: OfferServiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OfferServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    estimatedTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
    estimatedTime?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    estimatedTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    estimatedTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
    estimatedTime?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OfferCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    validUntil?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type OfferMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    validUntil?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type OfferMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    validUntil?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OfferScalarRelationFilter = {
    is?: OfferWhereInput
    isNot?: OfferWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type OfferServiceCountOrderByAggregateInput = {
    id?: SortOrder
    offerId?: SortOrder
    serviceId?: SortOrder
  }

  export type OfferServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    offerId?: SortOrder
    serviceId?: SortOrder
  }

  export type OfferServiceMinOrderByAggregateInput = {
    id?: SortOrder
    offerId?: SortOrder
    serviceId?: SortOrder
  }

  export type ServiceCreateNestedManyWithoutUserInput = {
    create?: XOR<ServiceCreateWithoutUserInput, ServiceUncheckedCreateWithoutUserInput> | ServiceCreateWithoutUserInput[] | ServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutUserInput | ServiceCreateOrConnectWithoutUserInput[]
    createMany?: ServiceCreateManyUserInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type OfferCreateNestedManyWithoutUserInput = {
    create?: XOR<OfferCreateWithoutUserInput, OfferUncheckedCreateWithoutUserInput> | OfferCreateWithoutUserInput[] | OfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutUserInput | OfferCreateOrConnectWithoutUserInput[]
    createMany?: OfferCreateManyUserInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ServiceCreateWithoutUserInput, ServiceUncheckedCreateWithoutUserInput> | ServiceCreateWithoutUserInput[] | ServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutUserInput | ServiceCreateOrConnectWithoutUserInput[]
    createMany?: ServiceCreateManyUserInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OfferCreateWithoutUserInput, OfferUncheckedCreateWithoutUserInput> | OfferCreateWithoutUserInput[] | OfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutUserInput | OfferCreateOrConnectWithoutUserInput[]
    createMany?: OfferCreateManyUserInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ServiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServiceCreateWithoutUserInput, ServiceUncheckedCreateWithoutUserInput> | ServiceCreateWithoutUserInput[] | ServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutUserInput | ServiceCreateOrConnectWithoutUserInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutUserInput | ServiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServiceCreateManyUserInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutUserInput | ServiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutUserInput | ServiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type OfferUpdateManyWithoutUserNestedInput = {
    create?: XOR<OfferCreateWithoutUserInput, OfferUncheckedCreateWithoutUserInput> | OfferCreateWithoutUserInput[] | OfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutUserInput | OfferCreateOrConnectWithoutUserInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutUserInput | OfferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OfferCreateManyUserInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutUserInput | OfferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutUserInput | OfferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServiceCreateWithoutUserInput, ServiceUncheckedCreateWithoutUserInput> | ServiceCreateWithoutUserInput[] | ServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutUserInput | ServiceCreateOrConnectWithoutUserInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutUserInput | ServiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServiceCreateManyUserInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutUserInput | ServiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutUserInput | ServiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OfferCreateWithoutUserInput, OfferUncheckedCreateWithoutUserInput> | OfferCreateWithoutUserInput[] | OfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutUserInput | OfferCreateOrConnectWithoutUserInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutUserInput | OfferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OfferCreateManyUserInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutUserInput | OfferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutUserInput | OfferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutServicesInput = {
    create?: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesInput
    connect?: UserWhereUniqueInput
  }

  export type OfferServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<OfferServiceCreateWithoutServiceInput, OfferServiceUncheckedCreateWithoutServiceInput> | OfferServiceCreateWithoutServiceInput[] | OfferServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OfferServiceCreateOrConnectWithoutServiceInput | OfferServiceCreateOrConnectWithoutServiceInput[]
    createMany?: OfferServiceCreateManyServiceInputEnvelope
    connect?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
  }

  export type OfferServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<OfferServiceCreateWithoutServiceInput, OfferServiceUncheckedCreateWithoutServiceInput> | OfferServiceCreateWithoutServiceInput[] | OfferServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OfferServiceCreateOrConnectWithoutServiceInput | OfferServiceCreateOrConnectWithoutServiceInput[]
    createMany?: OfferServiceCreateManyServiceInputEnvelope
    connect?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesInput
    upsert?: UserUpsertWithoutServicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServicesInput, UserUpdateWithoutServicesInput>, UserUncheckedUpdateWithoutServicesInput>
  }

  export type OfferServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<OfferServiceCreateWithoutServiceInput, OfferServiceUncheckedCreateWithoutServiceInput> | OfferServiceCreateWithoutServiceInput[] | OfferServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OfferServiceCreateOrConnectWithoutServiceInput | OfferServiceCreateOrConnectWithoutServiceInput[]
    upsert?: OfferServiceUpsertWithWhereUniqueWithoutServiceInput | OfferServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: OfferServiceCreateManyServiceInputEnvelope
    set?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    disconnect?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    delete?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    connect?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    update?: OfferServiceUpdateWithWhereUniqueWithoutServiceInput | OfferServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: OfferServiceUpdateManyWithWhereWithoutServiceInput | OfferServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: OfferServiceScalarWhereInput | OfferServiceScalarWhereInput[]
  }

  export type OfferServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<OfferServiceCreateWithoutServiceInput, OfferServiceUncheckedCreateWithoutServiceInput> | OfferServiceCreateWithoutServiceInput[] | OfferServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OfferServiceCreateOrConnectWithoutServiceInput | OfferServiceCreateOrConnectWithoutServiceInput[]
    upsert?: OfferServiceUpsertWithWhereUniqueWithoutServiceInput | OfferServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: OfferServiceCreateManyServiceInputEnvelope
    set?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    disconnect?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    delete?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    connect?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    update?: OfferServiceUpdateWithWhereUniqueWithoutServiceInput | OfferServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: OfferServiceUpdateManyWithWhereWithoutServiceInput | OfferServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: OfferServiceScalarWhereInput | OfferServiceScalarWhereInput[]
  }

  export type OfferServiceCreateNestedManyWithoutOfferInput = {
    create?: XOR<OfferServiceCreateWithoutOfferInput, OfferServiceUncheckedCreateWithoutOfferInput> | OfferServiceCreateWithoutOfferInput[] | OfferServiceUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferServiceCreateOrConnectWithoutOfferInput | OfferServiceCreateOrConnectWithoutOfferInput[]
    createMany?: OfferServiceCreateManyOfferInputEnvelope
    connect?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutOffersInput = {
    create?: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffersInput
    connect?: UserWhereUniqueInput
  }

  export type OfferServiceUncheckedCreateNestedManyWithoutOfferInput = {
    create?: XOR<OfferServiceCreateWithoutOfferInput, OfferServiceUncheckedCreateWithoutOfferInput> | OfferServiceCreateWithoutOfferInput[] | OfferServiceUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferServiceCreateOrConnectWithoutOfferInput | OfferServiceCreateOrConnectWithoutOfferInput[]
    createMany?: OfferServiceCreateManyOfferInputEnvelope
    connect?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OfferServiceUpdateManyWithoutOfferNestedInput = {
    create?: XOR<OfferServiceCreateWithoutOfferInput, OfferServiceUncheckedCreateWithoutOfferInput> | OfferServiceCreateWithoutOfferInput[] | OfferServiceUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferServiceCreateOrConnectWithoutOfferInput | OfferServiceCreateOrConnectWithoutOfferInput[]
    upsert?: OfferServiceUpsertWithWhereUniqueWithoutOfferInput | OfferServiceUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: OfferServiceCreateManyOfferInputEnvelope
    set?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    disconnect?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    delete?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    connect?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    update?: OfferServiceUpdateWithWhereUniqueWithoutOfferInput | OfferServiceUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: OfferServiceUpdateManyWithWhereWithoutOfferInput | OfferServiceUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: OfferServiceScalarWhereInput | OfferServiceScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffersInput
    upsert?: UserUpsertWithoutOffersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOffersInput, UserUpdateWithoutOffersInput>, UserUncheckedUpdateWithoutOffersInput>
  }

  export type OfferServiceUncheckedUpdateManyWithoutOfferNestedInput = {
    create?: XOR<OfferServiceCreateWithoutOfferInput, OfferServiceUncheckedCreateWithoutOfferInput> | OfferServiceCreateWithoutOfferInput[] | OfferServiceUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferServiceCreateOrConnectWithoutOfferInput | OfferServiceCreateOrConnectWithoutOfferInput[]
    upsert?: OfferServiceUpsertWithWhereUniqueWithoutOfferInput | OfferServiceUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: OfferServiceCreateManyOfferInputEnvelope
    set?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    disconnect?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    delete?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    connect?: OfferServiceWhereUniqueInput | OfferServiceWhereUniqueInput[]
    update?: OfferServiceUpdateWithWhereUniqueWithoutOfferInput | OfferServiceUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: OfferServiceUpdateManyWithWhereWithoutOfferInput | OfferServiceUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: OfferServiceScalarWhereInput | OfferServiceScalarWhereInput[]
  }

  export type OfferCreateNestedOneWithoutServicesInput = {
    create?: XOR<OfferCreateWithoutServicesInput, OfferUncheckedCreateWithoutServicesInput>
    connectOrCreate?: OfferCreateOrConnectWithoutServicesInput
    connect?: OfferWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutOfferServicesInput = {
    create?: XOR<ServiceCreateWithoutOfferServicesInput, ServiceUncheckedCreateWithoutOfferServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutOfferServicesInput
    connect?: ServiceWhereUniqueInput
  }

  export type OfferUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<OfferCreateWithoutServicesInput, OfferUncheckedCreateWithoutServicesInput>
    connectOrCreate?: OfferCreateOrConnectWithoutServicesInput
    upsert?: OfferUpsertWithoutServicesInput
    connect?: OfferWhereUniqueInput
    update?: XOR<XOR<OfferUpdateToOneWithWhereWithoutServicesInput, OfferUpdateWithoutServicesInput>, OfferUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutOfferServicesNestedInput = {
    create?: XOR<ServiceCreateWithoutOfferServicesInput, ServiceUncheckedCreateWithoutOfferServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutOfferServicesInput
    upsert?: ServiceUpsertWithoutOfferServicesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutOfferServicesInput, ServiceUpdateWithoutOfferServicesInput>, ServiceUncheckedUpdateWithoutOfferServicesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ServiceCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discount?: number | null
    estimatedTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offerServices?: OfferServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discount?: number | null
    estimatedTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offerServices?: OfferServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutUserInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutUserInput, ServiceUncheckedCreateWithoutUserInput>
  }

  export type ServiceCreateManyUserInputEnvelope = {
    data: ServiceCreateManyUserInput | ServiceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OfferCreateWithoutUserInput = {
    id?: string
    title: string
    details?: string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    services?: OfferServiceCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    details?: string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    services?: OfferServiceUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutUserInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutUserInput, OfferUncheckedCreateWithoutUserInput>
  }

  export type OfferCreateManyUserInputEnvelope = {
    data: OfferCreateManyUserInput | OfferCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutUserInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutUserInput, ServiceUncheckedUpdateWithoutUserInput>
    create: XOR<ServiceCreateWithoutUserInput, ServiceUncheckedCreateWithoutUserInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutUserInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutUserInput, ServiceUncheckedUpdateWithoutUserInput>
  }

  export type ServiceUpdateManyWithWhereWithoutUserInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutUserInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: FloatFilter<"Service"> | number
    discount?: FloatNullableFilter<"Service"> | number | null
    estimatedTime?: IntNullableFilter<"Service"> | number | null
    userId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type OfferUpsertWithWhereUniqueWithoutUserInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutUserInput, OfferUncheckedUpdateWithoutUserInput>
    create: XOR<OfferCreateWithoutUserInput, OfferUncheckedCreateWithoutUserInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutUserInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutUserInput, OfferUncheckedUpdateWithoutUserInput>
  }

  export type OfferUpdateManyWithWhereWithoutUserInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutUserInput>
  }

  export type OfferScalarWhereInput = {
    AND?: OfferScalarWhereInput | OfferScalarWhereInput[]
    OR?: OfferScalarWhereInput[]
    NOT?: OfferScalarWhereInput | OfferScalarWhereInput[]
    id?: StringFilter<"Offer"> | string
    title?: StringFilter<"Offer"> | string
    details?: StringNullableFilter<"Offer"> | string | null
    validUntil?: DateTimeNullableFilter<"Offer"> | Date | string | null
    userId?: StringFilter<"Offer"> | string
    createdAt?: DateTimeFilter<"Offer"> | Date | string
  }

  export type UserCreateWithoutServicesInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    offers?: OfferCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutServicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
  }

  export type OfferServiceCreateWithoutServiceInput = {
    id?: string
    offer: OfferCreateNestedOneWithoutServicesInput
  }

  export type OfferServiceUncheckedCreateWithoutServiceInput = {
    id?: string
    offerId: string
  }

  export type OfferServiceCreateOrConnectWithoutServiceInput = {
    where: OfferServiceWhereUniqueInput
    create: XOR<OfferServiceCreateWithoutServiceInput, OfferServiceUncheckedCreateWithoutServiceInput>
  }

  export type OfferServiceCreateManyServiceInputEnvelope = {
    data: OfferServiceCreateManyServiceInput | OfferServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutServicesInput = {
    update: XOR<UserUpdateWithoutServicesInput, UserUncheckedUpdateWithoutServicesInput>
    create: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServicesInput, UserUncheckedUpdateWithoutServicesInput>
  }

  export type UserUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OfferServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: OfferServiceWhereUniqueInput
    update: XOR<OfferServiceUpdateWithoutServiceInput, OfferServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<OfferServiceCreateWithoutServiceInput, OfferServiceUncheckedCreateWithoutServiceInput>
  }

  export type OfferServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: OfferServiceWhereUniqueInput
    data: XOR<OfferServiceUpdateWithoutServiceInput, OfferServiceUncheckedUpdateWithoutServiceInput>
  }

  export type OfferServiceUpdateManyWithWhereWithoutServiceInput = {
    where: OfferServiceScalarWhereInput
    data: XOR<OfferServiceUpdateManyMutationInput, OfferServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type OfferServiceScalarWhereInput = {
    AND?: OfferServiceScalarWhereInput | OfferServiceScalarWhereInput[]
    OR?: OfferServiceScalarWhereInput[]
    NOT?: OfferServiceScalarWhereInput | OfferServiceScalarWhereInput[]
    id?: StringFilter<"OfferService"> | string
    offerId?: StringFilter<"OfferService"> | string
    serviceId?: StringFilter<"OfferService"> | string
  }

  export type OfferServiceCreateWithoutOfferInput = {
    id?: string
    service: ServiceCreateNestedOneWithoutOfferServicesInput
  }

  export type OfferServiceUncheckedCreateWithoutOfferInput = {
    id?: string
    serviceId: string
  }

  export type OfferServiceCreateOrConnectWithoutOfferInput = {
    where: OfferServiceWhereUniqueInput
    create: XOR<OfferServiceCreateWithoutOfferInput, OfferServiceUncheckedCreateWithoutOfferInput>
  }

  export type OfferServiceCreateManyOfferInputEnvelope = {
    data: OfferServiceCreateManyOfferInput | OfferServiceCreateManyOfferInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOffersInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    services?: ServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOffersInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOffersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
  }

  export type OfferServiceUpsertWithWhereUniqueWithoutOfferInput = {
    where: OfferServiceWhereUniqueInput
    update: XOR<OfferServiceUpdateWithoutOfferInput, OfferServiceUncheckedUpdateWithoutOfferInput>
    create: XOR<OfferServiceCreateWithoutOfferInput, OfferServiceUncheckedCreateWithoutOfferInput>
  }

  export type OfferServiceUpdateWithWhereUniqueWithoutOfferInput = {
    where: OfferServiceWhereUniqueInput
    data: XOR<OfferServiceUpdateWithoutOfferInput, OfferServiceUncheckedUpdateWithoutOfferInput>
  }

  export type OfferServiceUpdateManyWithWhereWithoutOfferInput = {
    where: OfferServiceScalarWhereInput
    data: XOR<OfferServiceUpdateManyMutationInput, OfferServiceUncheckedUpdateManyWithoutOfferInput>
  }

  export type UserUpsertWithoutOffersInput = {
    update: XOR<UserUpdateWithoutOffersInput, UserUncheckedUpdateWithoutOffersInput>
    create: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOffersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOffersInput, UserUncheckedUpdateWithoutOffersInput>
  }

  export type UserUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OfferCreateWithoutServicesInput = {
    id?: string
    title: string
    details?: string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateWithoutServicesInput = {
    id?: string
    title: string
    details?: string | null
    validUntil?: Date | string | null
    userId: string
    createdAt?: Date | string
  }

  export type OfferCreateOrConnectWithoutServicesInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutServicesInput, OfferUncheckedCreateWithoutServicesInput>
  }

  export type ServiceCreateWithoutOfferServicesInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discount?: number | null
    estimatedTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutOfferServicesInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discount?: number | null
    estimatedTime?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCreateOrConnectWithoutOfferServicesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutOfferServicesInput, ServiceUncheckedCreateWithoutOfferServicesInput>
  }

  export type OfferUpsertWithoutServicesInput = {
    update: XOR<OfferUpdateWithoutServicesInput, OfferUncheckedUpdateWithoutServicesInput>
    create: XOR<OfferCreateWithoutServicesInput, OfferUncheckedCreateWithoutServicesInput>
    where?: OfferWhereInput
  }

  export type OfferUpdateToOneWithWhereWithoutServicesInput = {
    where?: OfferWhereInput
    data: XOR<OfferUpdateWithoutServicesInput, OfferUncheckedUpdateWithoutServicesInput>
  }

  export type OfferUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpsertWithoutOfferServicesInput = {
    update: XOR<ServiceUpdateWithoutOfferServicesInput, ServiceUncheckedUpdateWithoutOfferServicesInput>
    create: XOR<ServiceCreateWithoutOfferServicesInput, ServiceUncheckedCreateWithoutOfferServicesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutOfferServicesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutOfferServicesInput, ServiceUncheckedUpdateWithoutOfferServicesInput>
  }

  export type ServiceUpdateWithoutOfferServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutOfferServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    discount?: number | null
    estimatedTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfferCreateManyUserInput = {
    id?: string
    title: string
    details?: string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type ServiceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offerServices?: OfferServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offerServices?: OfferServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: OfferServiceUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: OfferServiceUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferServiceCreateManyServiceInput = {
    id?: string
    offerId: string
  }

  export type OfferServiceUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    offer?: OfferUpdateOneRequiredWithoutServicesNestedInput
  }

  export type OfferServiceUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferServiceUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferServiceCreateManyOfferInput = {
    id?: string
    serviceId: string
  }

  export type OfferServiceUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: ServiceUpdateOneRequiredWithoutOfferServicesNestedInput
  }

  export type OfferServiceUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferServiceUncheckedUpdateManyWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}