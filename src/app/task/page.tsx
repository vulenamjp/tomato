import { createClient } from "@/utils/supabase/server";

interface Tasks {
  id: number;
  content: string;
  start_time: string;
  end_time: string;
  completed: boolean;
}

function formatTimeToHHMM(timeString: string): string {
  const [hours, minutes] = timeString.split(":");
  const formattedHours = hours.padStart(2, "0"); // Ensure 2-digit format
  const formattedMinutes = minutes.padStart(2, "0"); // Ensure 2-digit format
  return `${formattedHours}:${formattedMinutes}`;
}

const fetchTasks = async (): Promise<Tasks[]> => {
  const supabase = createClient();
  const { data: tasks, error } = await supabase.from("tasks").select();
  if (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
  return tasks || [];
};
export default async function Task() {
  const tasks = await fetchTasks();
  return (
    <>
      {tasks.map((task) => (
        <div className="task bg-pikachu" key={task.id}>
          <div className="time">
            <span className="time-span">{formatTimeToHHMM(task.start_time)}</span>-
            <span className="time-span">{formatTimeToHHMM(task.end_time)}</span>
          </div>
          <div className="content">{task.content}</div>
          <div className="switch">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      ))}
    </>
  );
}
