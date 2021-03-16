import Accordoin from "./Accordoin";

function timeSince(str) {
  var date = new Date(str);
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
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
    <div className="flex flex-row">
      <div className=" flex-1 flex flex-col">
        <h2 className="text-base ">{props.job.job_title}</h2>
        <div className="flex flex-row font-light text-sm space-x-2 divide-x">
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

      <div className="flex font-thin text-xs">
        <h5>{timeSince(props.job.created) + " ago"}</h5>
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
          <button className="bg-blue-500 text-white rounded-md  uppercase p-3 focus:outline-none">job details</button>
          <button className="  rounded-md  p-3 focus:outline-none border-2 border-blue-500">Save Job</button>
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
