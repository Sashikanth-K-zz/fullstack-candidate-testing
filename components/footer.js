export default function Footer() {
  return (
    <div className="flex flex-row  flex-wrap justify-around bg-white p-4 ">

      <div className="flex-2 flex flex-col flex-wrap content-start p-4">
        <p className="text-2xl font-semibold">About us</p>
        <p>
          We are a team of nurses, doctors, technologists and executives
          dedicated to help nurses find jobs that they love.
        </p>
        <p>All copyrights reserved @ -2020 Health Explore</p>
      </div>
      <div className=" flex-1 flex flex-col content-start p-4">
        <p className="text-2xl font-semibold">Sitemap</p>
        <p>Nurses</p>
        <p>Employers</p>
        <p>Social Networking</p>
        <p>Jobs</p>
      </div>

      <div className=" flex-1 flex flex-col content-start p-4">
        <p className="text-2xl font-semibold">privacy</p>
        <p>Terms of use</p>
        <p>Privacy policy</p>
        <p>Cookie policy</p>
      </div>
    </div>
  );
}
