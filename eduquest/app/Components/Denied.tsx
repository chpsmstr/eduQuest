import React from "react";
import Link from "next/link";

type Params = {
  params: {
    role: string;
    notSignedInAsAnything: boolean;
  };
};

export default function Denied({ params }: Params) {
  return (
    <div>
      <h1>ACCESS DENIED</h1>
      {params.notSignedInAsAnything ? (
        <p> You are not signed in as anything.</p>
      ) : null}
      <p> You need the {params.role} role to access this page.</p>
    </div>
  );
}
