import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/react-hooks';

//TODO: move to env
const httpLink = new HttpLink({ uri: "http://localhost:9000/graphql" });

const authMiddleware = (authToken: string) =>
  new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    if (authToken) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
    }

    return forward(operation);
  });

export const apolloClient = new ApolloClient({
  // link: authMiddleware(getAccessToken()).concat(httpLink),
  link: httpLink,
  cache: new InMemoryCache({}),
});
