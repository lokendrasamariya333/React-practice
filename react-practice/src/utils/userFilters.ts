import type {
  User,
  UserRole,
} from "../types/user";

export type UserRoleFilter =
  | "all"
  | UserRole;

export function filterUsers(
  users: User[],
  query: string,
  role: UserRoleFilter,
  activeOnly: boolean,
): User[] {
  return users.filter((user) => {
    const matchesQuery =
      query.trim() === ""
        ? true
        : user.name
            .toLowerCase()
            .includes(
              query.toLowerCase(),
            ) ||
          user.email
            .toLowerCase()
            .includes(
              query.toLowerCase(),
            );

    const matchesRole =
      role === "all"
        ? true
        : user.role === role;

    const matchesActive =
      activeOnly
        ? user.isActive
        : true;

    return (
      matchesQuery &&
      matchesRole &&
      matchesActive
    );
  });
}