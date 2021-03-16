import jobs from "../../data/jobs";

export default async (req, res) => {
  let jobsData = JSON.parse(JSON.stringify(jobs));
  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests

  // filterinng data
  let filters = req.body.filters;
  console.log(req.body);
  jobsData = filteredData(jobsData, filters);

  // keyword search
  let keyword = req.body.keyword;
  jobsData = searchData(jobsData, keyword.toLowerCase());

  // sort the data
  let sortBy = req.body.sortBy;
  jobsData =  sortData(jobsData, sortBy);




  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  res.json({ jobs: jobsData });
};

function filteredData(data, filters) {
  if (!filters || Object.keys(filters).length == 0) {
    return data;
  }

  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    element.items = element.items.filter((job) => {
      let final = false;

      for (const filt in filters) {
        if (Object.hasOwnProperty.call(filters, filt)) {
          const f = filters[filt];
          if (filt == "department") {
          } else {
            if (f.includes(job[filt])) {
              final = true;
            }
          }
        }
      }

      return final;
    });
  }

  data = data.filter((i) => {
    return i.items.length > 0;
  });

  return data;
}




function searchData(data, keyword) {
  if (!keyword || keyword == "") {
    return data;
  }

  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    element.items = element.items.filter((job) => {
      let final = false;

      if(job.job_title.toLowerCase().includes(keyword)){
        final = true;
      }

      if(job.name.toLowerCase().includes(keyword)){
        final = true;
      }

      if(job.type.toLowerCase().includes(keyword)){
        final = true;
      }

      if(job.description.toLowerCase().includes(keyword)){
        final = true;
      }

      return final;
    });
  }

  data = data.filter((i) => {
    return i.items.length > 0;
  });

  return data;
}


function sortData(jobsData, sortBy) {
  // to do sort by 
  return jobsData
}
