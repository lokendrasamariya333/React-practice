import { sampleStudents } from "./data/sampleStudents";
import { StudentSummary } from "./components/StudentSummary";
import { sampleTasks } from "./data/sampleTasks";
import { TaskBoard } from "./components/TaskBoard";
import {sampleUsers} from './data/sampleUsers';
import { UserDirectory } from "./components/UserDirectory";
import { SimulatedUserLoader } from "./components/SimulatedUserLoader"; 
export function App() {
  return (
    <div>
      <h1>React Practice</h1>
      <h2>Deliverable-1</h2>
      <StudentSummary students={sampleStudents} />
      <h2>Deliverable-2</h2>
      <TaskBoard initialTasks={sampleTasks}/>
      <h2>Deliverable-3</h2>
      <UserDirectory users={sampleUsers} />
      <h2>Deliverable-4</h2>
      <SimulatedUserLoader />
    </div>
  );
}