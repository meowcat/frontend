import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: Record<string, any>;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Status = {
  __typename?: 'Status';
  kind: Scalars['String'];
  date: Scalars['String'];
  user?: Maybe<User>;
};

export type StatusInput = {
  kind: Scalars['String'];
  date?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
};

export type Pagination = {
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  experiment?: Maybe<Experiment>;
  experiments?: Maybe<ExperimentPage>;
  file?: Maybe<File>;
  files?: Maybe<Array<File>>;
  measurement?: Maybe<Measurement>;
  measurements: MeasurementPage;
  project?: Maybe<Project>;
  projects?: Maybe<ProjectPage>;
  projectsByOwner?: Maybe<Array<Project>>;
  sample?: Maybe<Sample>;
  samples: SamplePage;
  user?: Maybe<User>;
  users: UserPage;
  signin?: Maybe<AuthUser>;
};

export type QueryExperimentArgs = {
  _id: Scalars['String'];
};

export type QueryExperimentsArgs = {
  page: Scalars['Int'];
  filters: ExperimentFilters;
};

export type QueryFileArgs = {
  _id: Scalars['String'];
};

export type QueryFilesArgs = {
  page: Scalars['Int'];
  filters: FileFilters;
};

export type QueryMeasurementArgs = {
  _id: Scalars['String'];
};

export type QueryMeasurementsArgs = {
  page: Scalars['Int'];
  filters: MeasurementFilters;
};

export type QueryProjectArgs = {
  _id: Scalars['String'];
};

export type QueryProjectsArgs = {
  page: Scalars['Int'];
  filters: ProjectFilters;
};

export type QueryProjectsByOwnerArgs = {
  ownerId: Scalars['String'];
};

export type QuerySampleArgs = {
  _id: Scalars['String'];
};

export type QuerySamplesArgs = {
  page: Scalars['Int'];
  filters: SampleFilters;
};

export type QueryUserArgs = {
  _id: Scalars['String'];
};

export type QueryUsersArgs = {
  page: Scalars['Int'];
  filters: UserFilters;
};

export type QuerySigninArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  createExperiment?: Maybe<Experiment>;
  updateExperiment?: Maybe<Experiment>;
  appendExperimentInput?: Maybe<Experiment>;
  appendExperimentOutput?: Maybe<Experiment>;
  createFile?: Maybe<File>;
  createMeasurement?: Maybe<Measurement>;
  updateMeasurement?: Maybe<Measurement>;
  appendMeasurementAttachment?: Maybe<File>;
  createProject?: Maybe<Project>;
  updateProject?: Maybe<Project>;
  createSample?: Maybe<Sample>;
  updateSample?: Maybe<Sample>;
  appendSampleAttachment?: Maybe<File>;
  appendSampleMeasurement?: Maybe<Measurement>;
  createUser: AuthUser;
  updateUser: User;
  appendUserGroup: User;
};

export type MutationCreateExperimentArgs = {
  experiment: ExperimentInput;
};

export type MutationUpdateExperimentArgs = {
  _id: Scalars['String'];
  experiment: ExperimentInput;
};

export type MutationAppendExperimentInputArgs = {
  sampleId: Scalars['String'];
  experimentId: Scalars['String'];
};

export type MutationAppendExperimentOutputArgs = {
  sampleId: Scalars['String'];
  experimentId: Scalars['String'];
};

export type MutationCreateFileArgs = {
  file: FileInput;
};

export type MutationCreateMeasurementArgs = {
  measurement: MeasurementInput;
};

export type MutationUpdateMeasurementArgs = {
  _id: Scalars['String'];
  measurement: MeasurementInput;
};

export type MutationAppendMeasurementAttachmentArgs = {
  fileId: Scalars['String'];
  measurementId: Scalars['String'];
};

export type MutationCreateProjectArgs = {
  project: ProjectInput;
};

export type MutationUpdateProjectArgs = {
  _id: Scalars['String'];
  project: ProjectInput;
};

export type MutationCreateSampleArgs = {
  sample: SampleInput;
};

export type MutationUpdateSampleArgs = {
  _id: Scalars['String'];
  sample: SampleInput;
};

export type MutationAppendSampleAttachmentArgs = {
  fileId: Scalars['String'];
  sampleId: Scalars['String'];
};

export type MutationAppendSampleMeasurementArgs = {
  measurementId: Scalars['String'];
  sampleId: Scalars['String'];
};

export type MutationCreateUserArgs = {
  user: UserInput;
};

export type MutationUpdateUserArgs = {
  _id: Scalars['String'];
  user: UserInput;
};

export type MutationAppendUserGroupArgs = {
  _id: Scalars['String'];
  group: Scalars['String'];
};

export type Experiment = {
  __typename?: 'Experiment';
  _id: Scalars['String'];
  codeId: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Array<Status>>;
  meta?: Maybe<Scalars['JSON']>;
  input?: Maybe<Array<Sample>>;
  output?: Maybe<Array<Sample>>;
  attachments?: Maybe<Array<File>>;
};

export type ExperimentInput = {
  codeId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<StatusInput>;
  meta?: Maybe<Scalars['JSON']>;
};

export type ExperimentFilters = {
  codeId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  statusDate?: Maybe<Scalars['String']>;
};

export type ExperimentPage = Pagination & {
  __typename?: 'ExperimentPage';
  result?: Maybe<Array<Experiment>>;
  totalCount: Scalars['Int'];
};

export type File = {
  __typename?: 'File';
  _id: Scalars['String'];
  filename: Scalars['String'];
  hashname: Scalars['String'];
  mimetype: Scalars['String'];
  creationDate: Scalars['String'];
  signedUrl: Scalars['String'];
  parent?: Maybe<Scalars['String']>;
};

export type FileInput = {
  filename: Scalars['String'];
  hashname: Scalars['String'];
  mimetype: Scalars['String'];
};

export type FileFilters = {
  filename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
};

export type Measurement = {
  __typename?: 'Measurement';
  _id: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Array<Status>>;
  content?: Maybe<Scalars['JSON']>;
  attachement?: Maybe<Array<File>>;
  sample?: Maybe<Scalars['String']>;
};

export type MeasurementInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<StatusInput>;
  content?: Maybe<Scalars['JSON']>;
};

export type MeasurementFilters = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  statusDate?: Maybe<Scalars['String']>;
};

export type MeasurementPage = Pagination & {
  __typename?: 'MeasurementPage';
  result?: Maybe<Array<Measurement>>;
  totalCount: Scalars['Int'];
};

export type Project = {
  __typename?: 'Project';
  _id: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  owners?: Maybe<Array<User>>;
  tags?: Maybe<Array<Scalars['String']>>;
  status?: Maybe<Array<Status>>;
  meta?: Maybe<Scalars['JSON']>;
};

export type ProjectInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  status?: Maybe<StatusInput>;
  meta?: Maybe<Scalars['JSON']>;
};

export type ProjectFilters = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  status?: Maybe<Scalars['String']>;
  statusDate?: Maybe<Scalars['String']>;
};

export type ProjectPage = Pagination & {
  __typename?: 'ProjectPage';
  result?: Maybe<Array<Project>>;
  totalCount: Scalars['Int'];
};

export type SampleComment = {
  __typename?: 'SampleComment';
  date?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description: Scalars['String'];
  user: Scalars['String'];
};

export type SampleCommentInput = {
  date?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description: Scalars['String'];
  user: Scalars['String'];
};

export type SampleSummary = {
  __typename?: 'SampleSummary';
  name: Scalars['String'];
  value: Scalars['String'];
  units: Scalars['String'];
};

export type SampleSummaryInput = {
  name: Scalars['String'];
  value: Scalars['String'];
  units: Scalars['String'];
};

export type Sample = {
  __typename?: 'Sample';
  _id: Scalars['String'];
  codeId: Scalars['String'];
  title: Scalars['String'];
  status?: Maybe<Array<Status>>;
  description?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<SampleComment>>;
  summary?: Maybe<Array<SampleSummary>>;
  attachements?: Maybe<Array<File>>;
  measurements?: Maybe<Array<Measurement>>;
};

export type SampleInput = {
  codeId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  status?: Maybe<StatusInput>;
  description?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<SampleCommentInput>>;
  summary?: Maybe<Array<SampleSummaryInput>>;
};

export type SampleFilters = {
  codeId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  statusDate?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type SamplePage = Pagination & {
  __typename?: 'SamplePage';
  result?: Maybe<Array<Sample>>;
  totalCount: Scalars['Int'];
};

export enum Role {
  Admin = 'ADMIN',
  GroupAdmin = 'GROUP_ADMIN',
  Member = 'MEMBER',
}

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  role: Role;
  salt?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Scalars['String']>>;
};

export type AuthUser = {
  __typename?: 'AuthUser';
  token: Scalars['String'];
  user: User;
};

export type UserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type UserFilters = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type UserPage = Pagination & {
  __typename?: 'UserPage';
  result?: Maybe<Array<User>>;
  totalCount: Scalars['Int'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type FileFieldsFragment = { __typename?: 'File' } & Pick<
  File,
  '_id' | 'filename' | 'hashname' | 'mimetype' | 'creationDate' | 'signedUrl'
>;

export type FileQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type FileQuery = { __typename?: 'Query' } & {
  file?: Maybe<{ __typename?: 'File' } & FileFieldsFragment>;
};

export type CreateFileMutationVariables = Exact<{
  file: FileInput;
}>;

export type CreateFileMutation = { __typename?: 'Mutation' } & {
  createFile?: Maybe<{ __typename?: 'File' } & FileFieldsFragment>;
};

export type ExperimentFieldsFragment = { __typename?: 'Experiment' } & Pick<
  Experiment,
  '_id' | 'codeId' | 'title' | 'description'
> & {
    status?: Maybe<
      Array<
        { __typename?: 'Status' } & Pick<Status, 'kind' | 'date'> & {
            user?: Maybe<{ __typename?: 'User' } & Pick<User, '_id' | 'name'>>;
          }
      >
    >;
  };

export type ExperimentsQueryVariables = Exact<{
  page: Scalars['Int'];
  filters: ExperimentFilters;
}>;

export type ExperimentsQuery = { __typename?: 'Query' } & {
  experiments?: Maybe<
    { __typename?: 'ExperimentPage' } & Pick<ExperimentPage, 'totalCount'> & {
        result?: Maybe<
          Array<{ __typename?: 'Experiment' } & ExperimentFieldsFragment>
        >;
      }
  >;
};

export type CreateExperimentMutationVariables = Exact<{
  experiment: ExperimentInput;
}>;

export type CreateExperimentMutation = { __typename?: 'Mutation' } & {
  createExperiment?: Maybe<
    { __typename?: 'Experiment' } & ExperimentFieldsFragment
  >;
};

export type ViewQueryVariables = Exact<{
  projectId: Scalars['String'];
}>;

export type ViewQuery = { __typename?: 'Query' } & {
  project?: Maybe<
    { __typename?: 'Project' } & Pick<Project, '_id' | 'title' | 'view'> & {
        experiments?: Maybe<
          Array<
            { __typename?: 'Experiment' } & Pick<Experiment, '_id' | 'codeId'>
          >
        >;
        samples?: Maybe<
          Array<
            { __typename?: 'Sample' } & Pick<Sample, '_id' | 'codeId'> & {
                attachments?: Maybe<
                  Array<
                    { __typename?: 'File' } & Pick<
                      File,
                      '_id' | 'filename' | 'signedUrl'
                    >
                  >
                >;
              }
          >
        >;
      }
  >;
};

export type ProjectFieldsFragment = { __typename?: 'Project' } & Pick<
  Project,
  '_id' | 'title' | 'description' | 'tags'
> & {
    owners?: Maybe<Array<{ __typename?: 'User' } & Pick<User, '_id' | 'name'>>>;
    status?: Maybe<
      Array<
        { __typename?: 'Status' } & Pick<Status, 'kind' | 'date'> & {
            user?: Maybe<{ __typename?: 'User' } & Pick<User, '_id' | 'name'>>;
          }
      >
    >;
  };

export type ProjectsQueryVariables = Exact<{
  page: Scalars['Int'];
  filters: ProjectFilters;
}>;

export type ProjectsQuery = { __typename?: 'Query' } & {
  projects?: Maybe<
    { __typename?: 'ProjectPage' } & Pick<ProjectPage, 'totalCount'> & {
        result?: Maybe<
          Array<{ __typename?: 'Project' } & ProjectFieldsFragment>
        >;
      }
  >;
};

export type ProjectsByOwnerQueryVariables = Exact<{
  ownerId: Scalars['String'];
}>;

export type ProjectsByOwnerQuery = { __typename?: 'Query' } & {
  projectsByOwner?: Maybe<
    Array<{ __typename?: 'Project' } & ProjectFieldsFragment>
  >;
};

export type CreateProjectMutationVariables = Exact<{
  project: ProjectInput;
}>;

export type CreateProjectMutation = { __typename?: 'Mutation' } & {
  createProject?: Maybe<{ __typename?: 'Project' } & ProjectFieldsFragment>;
};

export type SampleFieldsFragment = { __typename?: 'Sample' } & Pick<
  Sample,
  '_id' | 'codeId' | 'title' | 'description'
> & {
    status?: Maybe<
      Array<
        { __typename?: 'Status' } & Pick<Status, 'kind' | 'date'> & {
            user?: Maybe<{ __typename?: 'User' } & Pick<User, '_id' | 'name'>>;
          }
      >
    >;
  };

export type SamplesQueryVariables = Exact<{
  page: Scalars['Int'];
  filters: SampleFilters;
}>;

export type SamplesQuery = { __typename?: 'Query' } & {
  samples: { __typename?: 'SamplePage' } & Pick<SamplePage, 'totalCount'> & {
      result?: Maybe<Array<{ __typename?: 'Sample' } & SampleFieldsFragment>>;
    };
};

export type CreateSampleMutationVariables = Exact<{
  sample: SampleInput;
}>;

export type CreateSampleMutation = { __typename?: 'Mutation' } & {
  createSample?: Maybe<{ __typename?: 'Sample' } & SampleFieldsFragment>;
};

export type UserFieldsFragment = { __typename?: 'User' } & Pick<
  User,
  '_id' | 'name' | 'email' | 'role'
>;

export type SigninQueryVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type SigninQuery = { __typename?: 'Query' } & {
  signin?: Maybe<
    { __typename?: 'AuthUser' } & Pick<AuthUser, 'token'> & {
        user: { __typename?: 'User' } & UserFieldsFragment;
      }
  >;
};

export type CreateUserMutationVariables = Exact<{
  user: UserInput;
}>;

export type CreateUserMutation = { __typename?: 'Mutation' } & {
  createUser: { __typename?: 'AuthUser' } & Pick<AuthUser, 'token'> & {
      user: { __typename?: 'User' } & UserFieldsFragment;
    };
};

export const FileFieldsFragmentDoc = gql`
  fragment FileFields on File {
    _id
    filename
    hashname
    mimetype
    creationDate
    signedUrl
  }
`;
export const ExperimentFieldsFragmentDoc = gql`
  fragment ExperimentFields on Experiment {
    _id
    codeId
    title
    description
    status {
      kind
      date
      user {
        _id
        name
      }
    }
  }
`;
export const ProjectFieldsFragmentDoc = gql`
  fragment ProjectFields on Project {
    _id
    title
    description
    owners {
      _id
      name
    }
    tags
    status {
      kind
      date
      user {
        _id
        name
      }
    }
  }
`;
export const SampleFieldsFragmentDoc = gql`
  fragment SampleFields on Sample {
    _id
    codeId
    title
    description
    status {
      kind
      date
      user {
        _id
        name
      }
    }
  }
`;
export const UserFieldsFragmentDoc = gql`
  fragment UserFields on User {
    _id
    name
    email
    role
  }
`;
export const FileDocument = gql`
  query file($id: String!) {
    file(_id: $id) {
      ...FileFields
    }
  }
  ${FileFieldsFragmentDoc}
`;

/**
 * __useFileQuery__
 *
 * To run a query within a React component, call `useFileQuery` and pass it any options that fit your needs.
 * When your component renders, `useFileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFileQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FileQuery,
    FileQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<FileQuery, FileQueryVariables>(
    FileDocument,
    baseOptions,
  );
}
export function useFileLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FileQuery,
    FileQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<FileQuery, FileQueryVariables>(
    FileDocument,
    baseOptions,
  );
}
export type FileQueryHookResult = ReturnType<typeof useFileQuery>;
export type FileLazyQueryHookResult = ReturnType<typeof useFileLazyQuery>;
export type FileQueryResult = ApolloReactCommon.QueryResult<
  FileQuery,
  FileQueryVariables
>;
export function refetchFileQuery(variables?: FileQueryVariables) {
  return { query: FileDocument, variables: variables };
}
export const CreateFileDocument = gql`
  mutation createFile($file: FileInput!) {
    createFile(file: $file) {
      ...FileFields
    }
  }
  ${FileFieldsFragmentDoc}
`;
export type CreateFileMutationFn = ApolloReactCommon.MutationFunction<
  CreateFileMutation,
  CreateFileMutationVariables
>;

/**
 * __useCreateFileMutation__
 *
 * To run a mutation, you first call `useCreateFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFileMutation, { data, loading, error }] = useCreateFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useCreateFileMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateFileMutation,
    CreateFileMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    CreateFileMutation,
    CreateFileMutationVariables
  >(CreateFileDocument, baseOptions);
}
export type CreateFileMutationHookResult = ReturnType<
  typeof useCreateFileMutation
>;
export type CreateFileMutationResult = ApolloReactCommon.MutationResult<
  CreateFileMutation
>;
export type CreateFileMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateFileMutation,
  CreateFileMutationVariables
>;
export const ExperimentsDocument = gql`
  query experiments($page: Int!, $filters: ExperimentFilters!) {
    experiments(page: $page, filters: $filters) {
      result {
        ...ExperimentFields
      }
      totalCount
    }
  }
  ${ExperimentFieldsFragmentDoc}
`;

/**
 * __useExperimentsQuery__
 *
 * To run a query within a React component, call `useExperimentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExperimentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExperimentsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useExperimentsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ExperimentsQuery,
    ExperimentsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<ExperimentsQuery, ExperimentsQueryVariables>(
    ExperimentsDocument,
    baseOptions,
  );
}
export function useExperimentsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ExperimentsQuery,
    ExperimentsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    ExperimentsQuery,
    ExperimentsQueryVariables
  >(ExperimentsDocument, baseOptions);
}
export type ExperimentsQueryHookResult = ReturnType<typeof useExperimentsQuery>;
export type ExperimentsLazyQueryHookResult = ReturnType<
  typeof useExperimentsLazyQuery
>;
export type ExperimentsQueryResult = ApolloReactCommon.QueryResult<
  ExperimentsQuery,
  ExperimentsQueryVariables
>;
export function refetchExperimentsQuery(variables?: ExperimentsQueryVariables) {
  return { query: ExperimentsDocument, variables: variables };
}
export const CreateExperimentDocument = gql`
  mutation createExperiment($experiment: ExperimentInput!) {
    createExperiment(experiment: $experiment) {
      ...ExperimentFields
    }
  }
  ${ExperimentFieldsFragmentDoc}
`;
export type CreateExperimentMutationFn = ApolloReactCommon.MutationFunction<
  CreateExperimentMutation,
  CreateExperimentMutationVariables
>;

/**
 * __useCreateExperimentMutation__
 *
 * To run a mutation, you first call `useCreateExperimentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExperimentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExperimentMutation, { data, loading, error }] = useCreateExperimentMutation({
 *   variables: {
 *      experiment: // value for 'experiment'
 *   },
 * });
 */
export function useCreateExperimentMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateExperimentMutation,
    CreateExperimentMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    CreateExperimentMutation,
    CreateExperimentMutationVariables
  >(CreateExperimentDocument, baseOptions);
}
export type CreateExperimentMutationHookResult = ReturnType<
  typeof useCreateExperimentMutation
>;
export type CreateExperimentMutationResult = ApolloReactCommon.MutationResult<
  CreateExperimentMutation
>;
export type CreateExperimentMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateExperimentMutation,
  CreateExperimentMutationVariables
>;
export const ViewDocument = gql`
  query view($projectId: String!) {
    project(_id: $projectId) {
      _id
      title
      experiments {
        _id
        codeId
      }
      samples {
        _id
        codeId
        attachments {
          _id
          filename
          signedUrl
        }
      }
      view
    }
  }
`;

/**
 * __useViewQuery__
 *
 * To run a query within a React component, call `useViewQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useViewQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ViewQuery,
    ViewQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<ViewQuery, ViewQueryVariables>(
    ViewDocument,
    baseOptions,
  );
}
export function useViewLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ViewQuery,
    ViewQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<ViewQuery, ViewQueryVariables>(
    ViewDocument,
    baseOptions,
  );
}
export type ViewQueryHookResult = ReturnType<typeof useViewQuery>;
export type ViewLazyQueryHookResult = ReturnType<typeof useViewLazyQuery>;
export type ViewQueryResult = ApolloReactCommon.QueryResult<
  ViewQuery,
  ViewQueryVariables
>;
export function refetchViewQuery(variables?: ViewQueryVariables) {
  return { query: ViewDocument, variables: variables };
}
export const ProjectsDocument = gql`
  query projects($page: Int!, $filters: ProjectFilters!) {
    projects(page: $page, filters: $filters) {
      result {
        ...ProjectFields
      }
      totalCount
    }
  }
  ${ProjectFieldsFragmentDoc}
`;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useProjectsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ProjectsQuery,
    ProjectsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<ProjectsQuery, ProjectsQueryVariables>(
    ProjectsDocument,
    baseOptions,
  );
}
export function useProjectsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ProjectsQuery,
    ProjectsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(
    ProjectsDocument,
    baseOptions,
  );
}
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<
  typeof useProjectsLazyQuery
>;
export type ProjectsQueryResult = ApolloReactCommon.QueryResult<
  ProjectsQuery,
  ProjectsQueryVariables
>;
export function refetchProjectsQuery(variables?: ProjectsQueryVariables) {
  return { query: ProjectsDocument, variables: variables };
}
export const ProjectsByOwnerDocument = gql`
  query projectsByOwner($ownerId: String!) {
    projectsByOwner(ownerId: $ownerId) {
      ...ProjectFields
    }
  }
  ${ProjectFieldsFragmentDoc}
`;

/**
 * __useProjectsByOwnerQuery__
 *
 * To run a query within a React component, call `useProjectsByOwnerQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsByOwnerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsByOwnerQuery({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *   },
 * });
 */
export function useProjectsByOwnerQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ProjectsByOwnerQuery,
    ProjectsByOwnerQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    ProjectsByOwnerQuery,
    ProjectsByOwnerQueryVariables
  >(ProjectsByOwnerDocument, baseOptions);
}
export function useProjectsByOwnerLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ProjectsByOwnerQuery,
    ProjectsByOwnerQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    ProjectsByOwnerQuery,
    ProjectsByOwnerQueryVariables
  >(ProjectsByOwnerDocument, baseOptions);
}
export type ProjectsByOwnerQueryHookResult = ReturnType<
  typeof useProjectsByOwnerQuery
>;
export type ProjectsByOwnerLazyQueryHookResult = ReturnType<
  typeof useProjectsByOwnerLazyQuery
>;
export type ProjectsByOwnerQueryResult = ApolloReactCommon.QueryResult<
  ProjectsByOwnerQuery,
  ProjectsByOwnerQueryVariables
>;
export function refetchProjectsByOwnerQuery(
  variables?: ProjectsByOwnerQueryVariables,
) {
  return { query: ProjectsByOwnerDocument, variables: variables };
}
export const CreateProjectDocument = gql`
  mutation createProject($project: ProjectInput!) {
    createProject(project: $project) {
      ...ProjectFields
    }
  }
  ${ProjectFieldsFragmentDoc}
`;
export type CreateProjectMutationFn = ApolloReactCommon.MutationFunction<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      project: // value for 'project'
 *   },
 * });
 */
export function useCreateProjectMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >(CreateProjectDocument, baseOptions);
}
export type CreateProjectMutationHookResult = ReturnType<
  typeof useCreateProjectMutation
>;
export type CreateProjectMutationResult = ApolloReactCommon.MutationResult<
  CreateProjectMutation
>;
export type CreateProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;
export const SamplesDocument = gql`
  query samples($page: Int!, $filters: SampleFilters!) {
    samples(page: $page, filters: $filters) {
      result {
        ...SampleFields
      }
      totalCount
    }
  }
  ${SampleFieldsFragmentDoc}
`;

/**
 * __useSamplesQuery__
 *
 * To run a query within a React component, call `useSamplesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSamplesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSamplesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useSamplesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    SamplesQuery,
    SamplesQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<SamplesQuery, SamplesQueryVariables>(
    SamplesDocument,
    baseOptions,
  );
}
export function useSamplesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    SamplesQuery,
    SamplesQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<SamplesQuery, SamplesQueryVariables>(
    SamplesDocument,
    baseOptions,
  );
}
export type SamplesQueryHookResult = ReturnType<typeof useSamplesQuery>;
export type SamplesLazyQueryHookResult = ReturnType<typeof useSamplesLazyQuery>;
export type SamplesQueryResult = ApolloReactCommon.QueryResult<
  SamplesQuery,
  SamplesQueryVariables
>;
export function refetchSamplesQuery(variables?: SamplesQueryVariables) {
  return { query: SamplesDocument, variables: variables };
}
export const CreateSampleDocument = gql`
  mutation createSample($sample: SampleInput!) {
    createSample(sample: $sample) {
      ...SampleFields
    }
  }
  ${SampleFieldsFragmentDoc}
`;
export type CreateSampleMutationFn = ApolloReactCommon.MutationFunction<
  CreateSampleMutation,
  CreateSampleMutationVariables
>;

/**
 * __useCreateSampleMutation__
 *
 * To run a mutation, you first call `useCreateSampleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSampleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSampleMutation, { data, loading, error }] = useCreateSampleMutation({
 *   variables: {
 *      sample: // value for 'sample'
 *   },
 * });
 */
export function useCreateSampleMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateSampleMutation,
    CreateSampleMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    CreateSampleMutation,
    CreateSampleMutationVariables
  >(CreateSampleDocument, baseOptions);
}
export type CreateSampleMutationHookResult = ReturnType<
  typeof useCreateSampleMutation
>;
export type CreateSampleMutationResult = ApolloReactCommon.MutationResult<
  CreateSampleMutation
>;
export type CreateSampleMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateSampleMutation,
  CreateSampleMutationVariables
>;
export const SigninDocument = gql`
  query signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        ...UserFields
      }
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useSigninQuery__
 *
 * To run a query within a React component, call `useSigninQuery` and pass it any options that fit your needs.
 * When your component renders, `useSigninQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSigninQuery({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSigninQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    SigninQuery,
    SigninQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<SigninQuery, SigninQueryVariables>(
    SigninDocument,
    baseOptions,
  );
}
export function useSigninLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    SigninQuery,
    SigninQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<SigninQuery, SigninQueryVariables>(
    SigninDocument,
    baseOptions,
  );
}
export type SigninQueryHookResult = ReturnType<typeof useSigninQuery>;
export type SigninLazyQueryHookResult = ReturnType<typeof useSigninLazyQuery>;
export type SigninQueryResult = ApolloReactCommon.QueryResult<
  SigninQuery,
  SigninQueryVariables
>;
export function refetchSigninQuery(variables?: SigninQueryVariables) {
  return { query: SigninDocument, variables: variables };
}
export const CreateUserDocument = gql`
  mutation createUser($user: UserInput!) {
    createUser(user: $user) {
      token
      user {
        ...UserFields
      }
    }
  }
  ${UserFieldsFragmentDoc}
`;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CreateUserDocument, baseOptions);
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<
  CreateUserMutation
>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
