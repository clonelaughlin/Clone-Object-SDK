import { gql, GraphQLClient } from 'graphql-request';
import { CloneProfile } from './clone';

const client = new GraphQLClient('https://graphql-endpoint.com/graphql', {
  headers: {
    authorization: 'Bearer AUTH_TOKEN',  // Authentication?
  },
});

interface CreateCloneResponse {
  createClone: {
    id: string;
    name: string;
    personaSummary: string;
  };
}

export async function createClone(cloneProfile: CloneProfile) {
  const query = gql`
    mutation CreateClone($input: CloneInput!) {
      createClone(input: $input) {
        id
        name
        personaSummary
      }
    }
  `;

  const variables = {
    input: {
      name: cloneProfile.name,
      gender: cloneProfile.gender,
      age: cloneProfile.age,
      location: cloneProfile.location,
      occupation: cloneProfile.occupation,
      personaSummary: cloneProfile.personaSummary,
      coreValues: cloneProfile.coreValues,
    },
  };

  try {
    const response = await client.request<CreateCloneResponse>(query, variables);
    return response.createClone;
  } catch (error) {
    console.error('Error creating clone:', error);
    throw new Error('Failed to create clone');
  }
}
