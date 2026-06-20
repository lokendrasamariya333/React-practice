# Work Item 2 — React Fundamentals

**Prerequisite:** Completed Work Item 1. Comfortable with JavaScript, TypeScript, modules, arrays, objects, pure functions, and `Promise` / `async` / `await`.

All React UI code is `.tsx` (TypeScript + JSX). Shared types, data, hooks, and utilities can be `.ts`.

---

## What you will build

A Vite React project with typed components, local sample data, controlled form inputs, derived UI state, and one simulated async load flow. No backend, no real API calls, no routing, no global state library.

**Final file tree:**

```text
frontend-intern-practice/
  react-practice/
    src/
      main.tsx
      App.tsx
      styles.css
      types/
        student.ts
        task.ts
        user.ts
        api.ts
      data/
        sampleStudents.ts
        sampleTasks.ts
        sampleUsers.ts
      utils/
        studentProgress.ts
        taskFilters.ts
        userFilters.ts
      hooks/
        useSimulatedUser.ts
      components/
        StudentSummary.tsx
        TaskBoard.tsx
        TaskItem.tsx
        UserDirectory.tsx
        UserCard.tsx
        SimulatedUserLoader.tsx
```

| Folder        | Contents |
| ------------- | -------- |
| `types/`      | `type` / `interface` definitions only — no logic |
| `data/`       | Hardcoded sample arrays/objects, exported |
| `utils/`      | Pure functions: input in, new value out |
| `hooks/`      | Custom React hooks only |
| `components/` | Reusable UI components with typed props |
| `App.tsx`     | Page composition and top-level demo layout |
| `main.tsx`    | React app entry point only |

---

## Project setup

1. Install [Node.js LTS](https://nodejs.org/), [VS Code](https://code.visualstudio.com/), [Git](https://git-scm.com/).
2. Create the project:

```bash
npm create vite@latest react-practice -- --template react-ts
cd react-practice
npm install
```

3. Create folders under `src/`: `types`, `data`, `utils`, `hooks`, `components`.
4. Run `npm run dev`. Open the URL shown in the terminal.

**Exports / imports (use in every file):**

```tsx
// types/task.ts
export type Task = { id: number; title: string; status: "pending" | "in_progress" | "done" };

// data/sampleTasks.ts
import type { Task } from "../types/task";
export const sampleTasks: Task[] = [ /* ... */ ];

// components/TaskItem.tsx
import type { Task } from "../types/task";

type TaskItemProps = {
  task: Task;
};

export function TaskItem({ task }: TaskItemProps) {
  return <li>{task.title}</li>;
}

// App.tsx
import { sampleTasks } from "./data/sampleTasks";
import { TaskItem } from "./components/TaskItem";
```

Use `import type { ... }` when importing only types.

---

## Step 1 — Learn React

Complete before deliverables. Read each link, type examples in `.tsx` files, fix errors until `npm run dev` compiles.

| Topic | What to learn |
| ----- | ------------- |
| Components | Functions that return JSX |
| JSX | HTML-like syntax inside TypeScript |
| Props | Typed inputs passed from parent to child |
| Rendering lists | `.map(...)` and stable `key` values |
| Conditional rendering | `condition ? a : b`, `condition && value` |
| Events | `onClick`, `onChange`, typed event handlers |
| State | `useState` for values that change after render |
| Derived state | Compute from props/state instead of duplicating |
| Controlled inputs | `value` + `onChange` for search/filter fields |
| Effects | `useEffect` for async loading or external side effects |
| Cleanup | Return a cleanup function from effects with timers/subscriptions |
| Component composition | Small reusable components combined by a parent |

| Read |
| ---- |
| [React — Your First Component](https://react.dev/learn/your-first-component) |
| [React — Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) |
| [React — Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component) |
| [React — Conditional Rendering](https://react.dev/learn/conditional-rendering) |
| [React — Rendering Lists](https://react.dev/learn/rendering-lists) |
| [React — Responding to Events](https://react.dev/learn/responding-to-events) |
| [React — State: A Component's Memory](https://react.dev/learn/state-a-components-memory) |
| [React — Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects) |
| [React — You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) |

**Rule for all deliverables:** Do not mutate arrays or objects stored in state or received through props. Create new arrays/objects when updating.

---

## Step 2 — Learn React with TypeScript

Read each link, add types to your components and hooks, fix compiler errors in VS Code and terminal.

| Topic | What to write |
| ----- | ------------- |
| Component props | `type CardProps = { title: string }` |
| Optional props | `emptyText?: string` |
| Children | `children: React.ReactNode` |
| State type inference | `const [query, setQuery] = useState("")` |
| Explicit state unions | `useState<"idle" \| "loading" \| "success" \| "error">("idle")` |
| Event types | `React.ChangeEvent<HTMLInputElement>` |
| Button events | `React.MouseEvent<HTMLButtonElement>` |
| Arrays in props | `tasks: Task[]` |
| Callback props | `onStatusChange: (id: number, status: TaskStatus) => void` |
| Custom hook return type | `function useThing(): { value: string }` |
| `import type` | Import types only, no runtime import |

| Read |
| ---- |
| [React TypeScript Cheatsheet — Function Components](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/) |
| [React TypeScript Cheatsheet — Hooks](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/) |
| [React TypeScript Cheatsheet — Forms and Events](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/) |
| [TypeScript — Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) |
| [TypeScript — Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) |

Do not use `any`.

React renders again when state changes. Do not manually edit the DOM with `document.querySelector`, `innerHTML`, or direct DOM mutation.

---

## Step 3 — Checkpoint

After Step 1 and Step 2. Mentor sign-off required before Step 4.

Answer without notes:

1. What is the difference between props and state?
2. Why does a list need a stable `key`?
3. What is a controlled input?
4. When should you compute derived state instead of storing it?
5. Why should state updates avoid mutation?
6. When is `useEffect` appropriate?
7. What goes in `types/`, `data/`, `utils/`, `hooks/`, `components/`, `App.tsx`, `main.tsx`?

Live task: create a `TaskItem` component that receives one typed `Task` prop and renders its title and status. Do not use `any`.

---

## Step 4 — Deliverables

Root path: `frontend-intern-practice/react-practice/src/`.

Global rules: `.tsx` for components; `.ts` for types, data, utilities, and hooks; no `any`; no `fetch`; typed props for every component; explicit parameter and return types on every utility and hook; do not mutate inputs, props, or state.

Work in this order: **1 → 2 → 3 → 4**. After each section, render the component from `App.tsx`, confirm the UI works, and confirm no TS errors.

---

### Deliverable 1 — Student summary component

**`types/student.ts`**

```ts
export type Student = {
  id: number;
  name: string;
  marks: number;
};
```

**`data/sampleStudents.ts`**

- Import `Student`.
- Export `sampleStudents: Student[]`.
- At least 5 students.
- Include marks above and below **40** (40 = pass).

**`utils/studentProgress.ts`**

```ts
import type { Student } from "../types/student";

export type StudentProgressResult = {
  passCount: number;
  failCount: number;
  averageMarks: number;
  topper: Student | null;
  failedStudents: Student[];
};

export function analyzeStudentProgress(
  students: Student[],
): StudentProgressResult;
```

Implementation requirements:

| Field | Rule |
| ----- | ---- |
| `passCount` | `marks >= 40` |
| `failCount` | `marks < 40` |
| `averageMarks` | Mean of all marks (0 if empty list) |
| `topper` | Student with highest `marks`; `null` if empty; any one winner on tie |
| `failedStudents` | New array of students with `marks < 40` |

**`components/StudentSummary.tsx`**

```tsx
import type { Student } from "../types/student";

type StudentSummaryProps = {
  students: Student[];
};

export function StudentSummary({ students }: StudentSummaryProps) {
  return null;
}
```

UI requirements:

| UI | Rule |
| -- | ---- |
| Summary counts | Show pass count, fail count, and average marks |
| Topper | Show topper name and marks; show `No students` if list is empty |
| Failed students | Render a list of failed student names; show `No failed students` if none |
| Data source | Use `analyzeStudentProgress(students)` inside the component |

**`App.tsx`:** render `<StudentSummary students={sampleStudents} />`.

---

### Deliverable 2 — Task board with filters

**`types/task.ts`**

```ts
export type TaskStatus = "pending" | "in_progress" | "done";

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
};
```

**`data/sampleTasks.ts`**

- Export `sampleTasks: Task[]`, at least 5 tasks, mixed `status` values.

**`utils/taskFilters.ts`**

```ts
import type { Task, TaskStatus } from "../types/task";

export type TaskStatusFilter = "all" | TaskStatus;

export function filterTasksByStatus(
  tasks: Task[],
  status: TaskStatusFilter,
): Task[];

export function updateTaskStatus(
  tasks: Task[],
  taskId: number,
  status: TaskStatus,
): Task[];
```

| Function | Behavior |
| -------- | -------- |
| `filterTasksByStatus` | If `status === "all"`, return a new copy of all tasks; otherwise return tasks matching the status |
| `updateTaskStatus` | Return a new task array; update only the matching task; keep all other tasks unchanged |

Do not mutate `tasks` or any task object.

**`components/TaskItem.tsx`**

```tsx
import type { Task, TaskStatus } from "../types/task";

type TaskItemProps = {
  task: Task;
  onStatusChange: (taskId: number, status: TaskStatus) => void;
};

export function TaskItem({ task, onStatusChange }: TaskItemProps) {
  return null;
}
```

UI requirements:

| UI | Rule |
| -- | ---- |
| Title | Show task title |
| Status | Show current status |
| Status control | Render a `<select>` with `pending`, `in_progress`, `done` |
| Change behavior | On select change, call `onStatusChange(task.id, newStatus)` |

**`components/TaskBoard.tsx`**

```tsx
import type { Task } from "../types/task";

type TaskBoardProps = {
  initialTasks: Task[];
};

export function TaskBoard({ initialTasks }: TaskBoardProps) {
  return null;
}
```

UI requirements:

| UI | Rule |
| -- | ---- |
| Local state | Store tasks in `useState(initialTasks)` |
| Filter state | Store selected filter in state: `all`, `pending`, `in_progress`, `done` |
| Filter buttons | Render one button per filter |
| Task list | Render filtered tasks using `TaskItem` |
| Empty state | Show `No tasks match this filter` if filtered list is empty |
| Status update | Use `updateTaskStatus` to update task state |

**`App.tsx`:** render `<TaskBoard initialTasks={sampleTasks} />`.

---

### Deliverable 3 — User directory with controlled inputs

**`types/user.ts`**

```ts
export type UserRole = "admin" | "annotator" | "verifier";

export type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
};
```

**`data/sampleUsers.ts`**

- Export `sampleUsers: User[]`, at least 6 users.
- Mix of `role` values and `isActive` true/false.
- Include names and emails with different casing.

**`utils/userFilters.ts`**

```ts
import type { User, UserRole } from "../types/user";

export type UserRoleFilter = "all" | UserRole;

export function filterUsers(
  users: User[],
  query: string,
  role: UserRoleFilter,
  activeOnly: boolean,
): User[];
```

| Filter | Rule |
| ------ | ---- |
| `query` | Case-insensitive match against `name` or `email`; empty string matches all |
| `role` | `all` matches all roles; otherwise match exact role |
| `activeOnly` | If true, include only users where `isActive === true` |

Return a new array. Do not mutate `users`.

**`components/UserCard.tsx`**

```tsx
import type { User } from "../types/user";

type UserCardProps = {
  user: User;
};

export function UserCard({ user }: UserCardProps) {
  return null;
}
```

UI requirements:

| UI | Rule |
| -- | ---- |
| Name | Show user name |
| Email | Show user email |
| Role | Show user role |
| Status | Show `Active` or `Inactive` based on `isActive` |

**`components/UserDirectory.tsx`**

```tsx
import type { User } from "../types/user";

type UserDirectoryProps = {
  users: User[];
};

export function UserDirectory({ users }: UserDirectoryProps) {
  return null;
}
```

UI requirements:

| UI | Rule |
| -- | ---- |
| Search input | Controlled text input for `query` |
| Role filter | Controlled `<select>` for `all`, `admin`, `annotator`, `verifier` |
| Active filter | Controlled checkbox for active users only |
| Results count | Show number of matching users |
| User list | Render matching users using `UserCard` |
| Empty state | Show `No users found` if none match |
| Data source | Use `filterUsers(users, query, role, activeOnly)` |

**`App.tsx`:** render `<UserDirectory users={sampleUsers} />`.

---

### Deliverable 4 — Simulated async user loader

**`types/api.ts`**

```ts
export type LoadState = "idle" | "loading" | "success" | "error";

export type SimulatedUser = {
  id: number;
  name: string;
};
```

**`hooks/useSimulatedUser.ts`**

```ts
import type { LoadState, SimulatedUser } from "../types/api";

export function useSimulatedUser(): {
  state: LoadState;
  user: SimulatedUser | null;
  errorMessage: string | null;
  loadSuccess: () => Promise<void>;
  loadFailure: () => Promise<void>;
  reset: () => void;
};
```

Implementation requirements:

| Function / state | Behavior |
| ---------------- | -------- |
| `state` | Starts as `idle` |
| `user` | Starts as `null` |
| `errorMessage` | Starts as `null` |
| `loadSuccess` | Set `loading`; wait 500ms; set `success`; set user `{ id: 1, name: "Demo User" }`; clear error |
| `loadFailure` | Set `loading`; wait 500ms; set `error`; clear user; set error message `Simulated network error` |
| `reset` | Return to `idle`, `null` user, `null` error |

Use a local `delay(ms: number): Promise<void>` helper inside this file or export it from this file. No `fetch`.

**`components/SimulatedUserLoader.tsx`**

```tsx
export function SimulatedUserLoader() {
  return null;
}
```

UI requirements:

| UI | Rule |
| -- | ---- |
| Buttons | Render `Load success`, `Load failure`, and `Reset` buttons |
| Loading state | Disable load buttons while `state === "loading"` |
| Success state | Show loaded user name |
| Error state | Show error message |
| Idle state | Show `No user loaded` |
| Data source | Use `useSimulatedUser()` |

**`App.tsx`:** render `<SimulatedUserLoader />`.

---

## Rules

- No `any`.
- No `fetch`.
- No routing.
- No global state library.
- No direct DOM manipulation (`document.querySelector`, `innerHTML`, manual element updates).
- `types/` — types only.
- `data/` — exported sample data.
- `utils/` — exported pure functions; no React hooks; no `console.log`.
- `hooks/` — custom hooks; may use React hooks; no JSX.
- `components/` — typed props and JSX.
- Do not mutate function inputs, props, or state.
- Keep components small enough to understand. If a component grows too large, split a child component.

---

## Pass

- `npm run dev` runs with zero TypeScript errors.
- All files in the file tree exist and are used.
- Every component has typed props unless it takes no props.
- Every utility and hook has typed parameters and return type.
- `StudentSummary` renders correct summary values from the sample data.
- `TaskBoard` filters tasks and updates task status without mutation.
- `UserDirectory` search, role filter, and active-only checkbox work together.
- `SimulatedUserLoader` shows idle, loading, success, error, and reset states.
- No `any`, no `fetch`, no direct DOM manipulation.
- Mentor confirms checkpoint answers.

---

## References

- [React Learn](https://react.dev/learn)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Vite React Guide](https://vite.dev/guide/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
