import React from "react";
import { GraphQLError } from "graphql";
import { render, screen, wait } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";

import Experiments, { EXPERIMENTS } from "../Experiments";

it("Search for columns", () => {
  const mocks = [
    {
      request: { query: EXPERIMENTS },
      result: {
        data: {
          experimentByOwner: [
            {
              codeId: "A30",
              owners: ["me"],
              tags: ["hi"],
              title: "first test",
              creationDate: new Date(2019).toString(),
              lastModificationDate: new Date().toString(),
              status: "active",
            },
            {
              codeId: "A32",
              owners: ["me", "you"],
              tags: ["test", "testing"],
              title: "second test",
              description: "we are testing",
              creationDate: new Date(2019).toString(),
              lastModificationDate: new Date().toString(),
            },
          ],
        },
      },
    },
  ];

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Experiments />
    </MockedProvider>
  );
  const columns = [
    "Identifier",
    "Owners",
    "Tags",
    "Title",
    "Description",
    "Creation date",
    "Last modification date",
    "Status",
  ];
  for (const column of columns) {
    expect(screen.getByText(column)).toBeInTheDocument();
  }
});

it("Error display", async () => {
  const mocks = [
    {
      request: { query: EXPERIMENTS },
      result: {
        errors: [new GraphQLError("Error!")],
      },
    },
  ];

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Experiments />
    </MockedProvider>
  );
  await wait();
  expect(screen.getByText("GraphQL error: Error!")).toBeInTheDocument();
});
