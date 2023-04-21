import { S3 } from 'aws-sdk';

interface ExistenceCheckData {
  bucket: string;
  path: string;
}
export type GetObjectResult = { body: S3.Body; expiresAt: Date | null } | null;

export class S3ClientConfig {
  readonly signatureVersion?: string;

  readonly accessKeyId?: string;

  readonly secretAccessKey?: string;

  readonly endpoint?: string;

  readonly s3BucketEndpoint?: boolean;

  readonly s3ForcePathStyle?: boolean;
}

export interface SignObjectData {
  bucket: string;
  path: string;
  expirationTime?: number;
  operation?: string;
  overrideFileName?: string;
}

export interface ListObjectsData {
  bucket: string;
  prefix?: string;
  returnRootFolder?: string;
}

export interface ListObjectsResponse {
  path: string;
  objects: Array<{ path: string; lastModified: Date | null }>;
}

interface GetObjectData {
  bucket: string;
  path: string;
}

export default function createS3Client(config: S3ClientConfig) {
  const s3 = new S3(config);
  return Object.freeze({
    listObjects({
      bucket,
      prefix = '',
      returnRootFolder,
    }: ListObjectsData): Promise<ListObjectsResponse> {
      return s3
        .listObjectsV2({
          Prefix: prefix,
          Bucket: bucket,
        })
        .promise()
        .then(({ Contents = [], Prefix = '' }) => {
          const objects = returnRootFolder
            ? Contents
            : Contents.filter((o) => o.Key !== `${prefix}/`);
          return {
            path: Prefix,
            objects: objects.map((o) => ({
              path: o.Key || '',
              lastModified: o.LastModified || null,
            })),
          };
        });
    },

    checkObjectExistence({
      bucket,
      path,
    }: ExistenceCheckData): Promise<boolean> {
      return s3
        .headObject({ Bucket: bucket, Key: path })
        .promise()
        .then(() => true)
        .catch(() => false);
    },

    getObject({ bucket, path }: GetObjectData): Promise<GetObjectResult> {
      return s3
        .getObject({
          Key: path,
          Bucket: bucket,
        })
        .promise()
        .then(({ Body: body = null, Expires: expiresAt = null }) => {
          if (!body) {
            return null;
          }
          return { body, expiresAt };
        });
    },

    async getObjectStream({ bucket, path }: GetObjectData) {
      const objectExists = await this.checkObjectExistence({ bucket, path });
      if (!objectExists) {
        throw new Error(`Object ${bucket}/${path} does not exist`);
      }

      return s3.getObject({ Key: path, Bucket: bucket }).createReadStream();
    },
  });
}
export type S3Client = ReturnType<typeof createS3Client>;
