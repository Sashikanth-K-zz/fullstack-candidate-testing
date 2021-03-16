import Accordoin from "./Accordoin";

function time_ago(time) {
  switch (typeof time) {
    case "number":
      break;
    case "string":
      time = +new Date(time);
      break;
    case "object":
      if (time.constructor === Date) time = time.getTime();
      break;
    default:
      time = +new Date();
  }
  var time_formats = [
    [60, "seconds", 1], // 60
    [120, "1 minute ago", "1 minute from now"], // 60*2
    [3600, "minutes", 60], // 60*60, 60
    [7200, "1 hour ago", "1 hour from now"], // 60*60*2
    [86400, "hours", 3600], // 60*60*24, 60*60
    [172800, "Yesterday", "Tomorrow"], // 60*60*24*2
    [604800, "days", 86400], // 60*60*24*7, 60*60*24
    [1209600, "Last week", "Next week"], // 60*60*24*7*4*2
    [2419200, "weeks", 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, "Last month", "Next month"], // 60*60*24*7*4*2
    [29030400, "months", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, "Last year", "Next year"], // 60*60*24*7*4*12*2
    [2903040000, "years", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, "Last century", "Next century"], // 60*60*24*7*4*12*100*2
    [58060800000, "centuries", 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  var seconds = (+new Date() - time) / 1000,
    token = "ago",
    list_choice = 1;

  if (seconds == 0) {
    return "Just now";
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = "from now";
    list_choice = 2;
  }
  var i = 0,
    format;
  while ((format = time_formats[i++]))
    if (seconds < format[0]) {
      if (typeof format[2] == "string") return format[list_choice];
      else
        return Math.floor(seconds / format[2]) + " " + format[1] + " " + token;
    }
  return time;
}

const OrgHeader = (props) => {
  return (
    <div className="flex flex-row space-x-3">
      <div className="bg-gray-300 rounded-lg p-2">
        <p>{props.job.name.substring(0, 2).toUpperCase()}</p>
      </div>
      <h2 className="pt-2 pb-2 font-medium text-md">
        {props.job.items.length + " jobs for " + props.job.name}
      </h2>
    </div>
  );
};

const OrgContent = (props) => {
  return (
    <div className="pl-4 divide-y-2">
      {props.job.items.map((item) => {
        return (
          <Accordoin
            title={<JobHeader job={item} />}
            content={<JobContent job={item} />}
          />
        );
      })}
    </div>
  );
};

const JobHeader = (props) => {
  return (
    <div className="flex flex-row flex-wrap justify-between">
      <div className=" flex flex-col">
        <h2 className="text-base ">{props.job.job_title}</h2>
        <div className="flex flex-row  flex-wrap justify-start font-light text-sm sm:space-x-2 ">
          <h4 className="">{props.job.job_type + " | "}</h4>
          <h4>
            {"$" +
              props.job.salary_range[0] +
              " - " +
              "$" +
              props.job.salary_range[0] +
              " an hour | "}
          </h4>

          <h4>{props.job.city}</h4>
        </div>
      </div>

      <div className=" font-thin text-xs">
        <h5>{time_ago(props.job.created) + " ago"}</h5>
      </div>
    </div>
  );
};

const JobContent = (props) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <div className="sm:col-span-2">
        <div className="grid sm:grid-cols-2">
          <h2 className="font-semibold">Department</h2>
          <p>{props.job.department.join(",")}</p>
        </div>
      </div>
      <div className="place-self-center sm:row-span-3">
        <div className=" space-y-3 flex flex-col justify-items-center align-middle">
          <button className="bg-blue-500 text-white rounded-md  uppercase p-3 focus:outline-none">
            job details
          </button>
          <button className="  rounded-md  p-3 focus:outline-none border-2 border-blue-500">
            Save Job
          </button>
        </div>
      </div>

      <div className="sm:col-span-2">
        <div className="grid sm:grid-cols-2">
          <h2 className="font-semibold">Hours / shift</h2>
          <p>{props.job.hours[0] + " / " + props.job.work_schedule}</p>
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="grid sm:grid-cols-2">
          <h2 className="font-semibold">Summary</h2>
          <p>{props.job.description}</p>
        </div>
      </div>
    </div>
  );
};
export default function JobList(props) {
  return (
    <div className="flex flex-col">
      {props.jobs.map((item) => {
        return (
          <Accordoin
            title={<OrgHeader job={item} />}
            content={<OrgContent job={item} />}
          />
        );
      })}
    </div>
  );
}
