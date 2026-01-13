import { useParams } from "react-router-dom";

function TaskDetails() {
  const params = useParams();

  return <h2>Task ID is {params.id}</h2>;
}

export default TaskDetails;
