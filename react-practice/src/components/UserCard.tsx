import type { User } from "../types/user";

type UserCardProps = {
  user: User;
};

export function UserCard({
  user,
}: UserCardProps) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h4>{user.name}</h4>

      <p>{user.email}</p>

      <p>Role: {user.role}</p>

      <p>
        Status:{" "}
        {user.isActive
          ? "Active"
          : "Inactive"}
      </p>
    </div>
  );
}