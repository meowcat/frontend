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

export type Pagination = {
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  component?: Maybe<Component>;
  components: ComponentPage;
  experiment?: Maybe<Experiment>;
  experiments?: Maybe<ExperimentPage>;
  file?: Maybe<File>;
  files?: Maybe<Array<File>>;
  kind?: Maybe<Kind>;
  kinds: KindPage;
  measurement?: Maybe<Measurement>;
  measurements: MeasurementPage;
  sample?: Maybe<Sample>;
  samples: SamplePage;
  user?: Maybe<User>;
  users: UserPage;
  signin?: Maybe<AuthUser>;
};

export type QueryComponentArgs = {
  _id: Scalars['String'];
};

export type QueryComponentsArgs = {
  page: Scalars['Int'];
  filters: ComponentFilters;
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

export type QueryKindArgs = {
  _id: Scalars['String'];
};

export type QueryKindsArgs = {
  page: Scalars['Int'];
  filters: KindFilters;
};

export type QueryMeasurementArgs = {
  _id: Scalars['String'];
};

export type QueryMeasurementsArgs = {
  page: Scalars['Int'];
  filters: MeasurementFilters;
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
  createComponent?: Maybe<Component>;
  updateComponent?: Maybe<Component>;
  appendComponentInput?: Maybe<Component>;
  appendComponentOutput?: Maybe<Component>;
  removeComponentInput?: Maybe<Component>;
  removeComponentOutput?: Maybe<Component>;
  createExperiment?: Maybe<Experiment>;
  updateExperiment?: Maybe<Experiment>;
  appendExperimentInput?: Maybe<Experiment>;
  appendExperimentOutput?: Maybe<Experiment>;
  appendExperimentComponent?: Maybe<Component>;
  createFile?: Maybe<File>;
  createKind: Kind;
  updateKind: Kind;
  createMeasurement?: Maybe<Measurement>;
  updateMeasurement?: Maybe<Measurement>;
  appendMeasurementComponent?: Maybe<Component>;
  createSample?: Maybe<Sample>;
  updateSample?: Maybe<Sample>;
  appendSampleComponent?: Maybe<Component>;
  appendSampleMeasurement?: Maybe<Measurement>;
  createUser: AuthUser;
  updateUser: User;
};

export type MutationCreateComponentArgs = {
  component: ComponentInput;
};

export type MutationUpdateComponentArgs = {
  _id: Scalars['String'];
  component: ComponentInput;
};

export type MutationAppendComponentInputArgs = {
  parentId: Scalars['String'];
  childId: Scalars['String'];
};

export type MutationAppendComponentOutputArgs = {
  parentId: Scalars['String'];
  childId: Scalars['String'];
};

export type MutationRemoveComponentInputArgs = {
  parentId: Scalars['String'];
  childId: Scalars['String'];
};

export type MutationRemoveComponentOutputArgs = {
  parentId: Scalars['String'];
  childId: Scalars['String'];
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

export type MutationAppendExperimentComponentArgs = {
  componentId: Scalars['String'];
  experimentId: Scalars['String'];
};

export type MutationCreateFileArgs = {
  file: FileInput;
};

export type MutationCreateKindArgs = {
  kind: KindInput;
};

export type MutationUpdateKindArgs = {
  _id: Scalars['String'];
  kind: KindInput;
};

export type MutationCreateMeasurementArgs = {
  measurement: MeasurementInput;
};

export type MutationUpdateMeasurementArgs = {
  _id: Scalars['String'];
  measurement: MeasurementInput;
};

export type MutationAppendMeasurementComponentArgs = {
  componentId: Scalars['String'];
  measurementId: Scalars['String'];
};

export type MutationCreateSampleArgs = {
  sample: SampleInput;
};

export type MutationUpdateSampleArgs = {
  _id: Scalars['String'];
  sample: SampleInput;
};

export type MutationAppendSampleComponentArgs = {
  componentId: Scalars['String'];
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

export type Component = {
  __typename?: 'Component';
  _id: Scalars['String'];
  kind?: Maybe<Kind>;
  parent?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  input?: Maybe<Array<Component>>;
  output?: Maybe<Array<Component>>;
};

export type ComponentInput = {
  parent?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
};

export type ComponentFilters = {
  kind: Scalars['String'];
  content?: Maybe<Scalars['JSON']>;
};

export type ComponentPage = Pagination & {
  __typename?: 'ComponentPage';
  result?: Maybe<Array<Component>>;
  totalCount: Scalars['Int'];
};

export type Status = {
  __typename?: 'Status';
  kind: Scalars['String'];
  date?: Maybe<Scalars['String']>;
};

export type StatusInput = {
  kind: Scalars['String'];
  date: Scalars['String'];
};

export type Experiment = {
  __typename?: 'Experiment';
  _id: Scalars['String'];
  codeId: Scalars['String'];
  owners?: Maybe<Array<Scalars['String']>>;
  tags?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  creationDate: Scalars['String'];
  lastModificationDate?: Maybe<Scalars['String']>;
  status?: Maybe<Array<Status>>;
  meta?: Maybe<Scalars['JSON']>;
  input?: Maybe<Array<Sample>>;
  output?: Maybe<Array<Sample>>;
  components?: Maybe<Array<Component>>;
};

export type ExperimentInput = {
  codeId?: Maybe<Scalars['String']>;
  owners?: Maybe<Array<Scalars['String']>>;
  tags?: Maybe<Array<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  creationDate?: Maybe<Scalars['String']>;
  lastModificationDate?: Maybe<Scalars['String']>;
  status?: Maybe<StatusInput>;
  meta?: Maybe<Scalars['JSON']>;
};

export type ExperimentFilters = {
  owners?: Maybe<Array<Scalars['String']>>;
  tags?: Maybe<Array<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  creationDate?: Maybe<Scalars['String']>;
  lastModificationDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
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

export type Kind = {
  __typename?: 'Kind';
  _id: Scalars['String'];
  name: Scalars['String'];
  path?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  schema?: Maybe<Scalars['JSON']>;
};

export type KindInput = {
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  schema?: Maybe<Scalars['JSON']>;
};

export type KindFilters = {
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type KindPage = Pagination & {
  __typename?: 'KindPage';
  result?: Maybe<Array<Kind>>;
  totalCount: Scalars['Int'];
};

export type Measurement = {
  __typename?: 'Measurement';
  _id: Scalars['String'];
  sample?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Array<Status>>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  components?: Maybe<Array<Component>>;
};

export type MeasurementInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<StatusInput>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
};

export type MeasurementFilters = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
};

export type MeasurementPage = Pagination & {
  __typename?: 'MeasurementPage';
  result?: Maybe<Array<Measurement>>;
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
  components?: Maybe<Array<Component>>;
  measurements?: Maybe<Array<Measurement>>;
};

export type SampleInput = {
  title?: Maybe<Scalars['String']>;
  status?: Maybe<StatusInput>;
  description?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<SampleCommentInput>>;
  summary?: Maybe<Array<SampleSummaryInput>>;
};

export type SampleFilters = {
  title?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
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
  | '_id'
  | 'owners'
  | 'tags'
  | 'title'
  | 'description'
  | 'creationDate'
  | 'lastModificationDate'
> & { status?: Maybe<Array<{ __typename?: 'Status' } & Pick<Status, 'kind'>>> };

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

export type SampleFieldsFragment = { __typename?: 'Sample' } & Pick<
  Sample,
  '_id' | 'codeId' | 'title' | 'description'
> & { status?: Maybe<Array<{ __typename?: 'Status' } & Pick<Status, 'kind'>>> };

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
    owners
    tags
    title
    description
    creationDate
    lastModificationDate
    status {
      kind
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
    }
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
