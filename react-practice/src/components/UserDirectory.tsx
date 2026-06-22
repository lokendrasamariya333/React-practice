import { useState } from "react";

import type { User } from "../types/user";

import {
  filterUsers,
  type UserRoleFilter,
} from "../utils/userFilters";

import { UserCard } from "./UserCard";

type UserDirectoryProps = {
  users: User[];
};

export function UserDirectory({
  users,
}: UserDirectoryProps) {
  const [query, setQuery] =
    useState("");

  const [role, setRole] =
    useState<UserRoleFilter>("all");

  const [activeOnly, setActiveOnly] =
    useState(false);

  const filteredUsers =
    filterUsers(
      users,
      query,
      role,
      activeOnly,
    );

  return (
    <div>
      <h2>User Directory</h2>

      <input
        type="text"
        placeholder="Search user..."
        value={query}
        onChange={(event) =>
          setQuery(event.target.value)
        }
      />

      <br />
      <br />

      <select
        value={role}
        onChange={(event) =>
          setRole(
            event.target
              .value as UserRoleFilter,
          )
        }
      >
        <option value="all">
          All Roles
        </option>

        <option value="admin">
          Admin
        </option>

        <option value="annotator">
          Annotator
        </option>

        <option value="verifier">
          Verifier
        </option>
      </select>

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={activeOnly}
          onChange={(event) =>
            setActiveOnly(
              event.target.checked,
            )
          }
        />
        Active Users Only
      </label>

      <p>
        Results Found:
        {" "}
        {filteredUsers.length}
      </p>

      {filteredUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))
      )}
    </div>
  );
}