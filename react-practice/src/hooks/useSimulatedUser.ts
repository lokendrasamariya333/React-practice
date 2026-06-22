import { useState } from "react";

import type {
  LoadState,
  SimulatedUser,
} from "../types/api";

function delay(
  ms: number,
): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function useSimulatedUser(): {
  state: LoadState;
  user: SimulatedUser | null;
  errorMessage: string | null;
  loadSuccess: () => Promise<void>;
  loadFailure: () => Promise<void>;
  reset: () => void;
} {
  const [state, setState] =
    useState<LoadState>("idle");

  const [user, setUser] =
    useState<SimulatedUser | null>(
      null,
    );

  const [
    errorMessage,
    setErrorMessage,
  ] = useState<string | null>(
    null,
  );

  async function loadSuccess(): Promise<void> {
    setState("loading");

    await delay(500);

    setState("success");

    setUser({
      id: 1,
      name: "Demo User",
    });

    setErrorMessage(null);
  }

  async function loadFailure(): Promise<void> {
    setState("loading");

    await delay(500);

    setState("error");

    setUser(null);

    setErrorMessage(
      "Simulated network error",
    );
  }

  function reset(): void {
    setState("idle");

    setUser(null);

    setErrorMessage(null);
  }

  return {
    state,
    user,
    errorMessage,
    loadSuccess,
    loadFailure,
    reset,
  };
}