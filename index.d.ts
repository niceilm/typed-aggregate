/**
 * @link https://github.com/meteorhacks/meteor-aggregate
 * @example
 * import { Mongo } from 'meteor/mongo';
 */
declare module 'meteor/mongo' {
  namespace Mongo {
    interface Collection < T > {
      aggregate: (
        pipeline: any[], option?: {
          explain?: boolean;
          allowDiskUse?: boolean;
          cursor?: any;
          bypassDocumentValidation?: boolean;
          readConcern?: { level: 'local'|'majority'|'linearizable' ; };
          collation?: {
            locale?: string;
            caseLevel?: boolean;
            caseFirst?: string;
            strength?: number;
            numericOrdering?: boolean;
            alternate?: string;
            maxVariable?: string;
            backwards?: boolean;
          };
        }) => any;
    }
  }
}