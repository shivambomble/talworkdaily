import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:8080/v1/graphql",
    headers: {
      "x-hasura-admin-secret": "myadminsecret",
    },
  }),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
