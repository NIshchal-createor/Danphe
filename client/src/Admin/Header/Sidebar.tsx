import {
  faBook,
  faCalendarCheck,
  faExchangeAlt,
  faInstitution,
  faListSquares,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Assets/images";
import { adminLogOut } from "../../Services/helpers";
const Sidebar = () => {
  return (
    <>
      <div className="-z-10 flex h-[95vh] min-w-[15rem] max-w-[20rem] flex-col items-center justify-start rounded-lg bg-transparent px-5 py-2"></div>
      <div className="fixed my-auto flex h-[95vh] w-[15rem] max-w-[20rem] flex-col items-center justify-center rounded-lg px-5 py-2">
        <div className="my-5 flex w-full flex-col items-center gap-2 justify-center">
          <div className="flex h-24 w-24 items-center justify-start overflow-hidden rounded-full">
            <img src={Logo} alt="logo" className="h-full w-full object-cover" />
          </div>
          <h1 className="mx-2 text-lg font-bold text-black text-center">
            Danphe International Consultancy Pvt. Ltd.
          </h1>
        </div>
        <hr className="" />
        <div className="my-5 flex h-full w-full flex-col gap-3 text-black">
          <Link
            to="/admin/dashboard"
            className="flex h-fit w-fit items-center justify-start gap-3"
          >
            <FontAwesomeIcon icon={faListSquares} className="h-5 w-5" />
            <h2 className="text-lg">Dashboard</h2>
          </Link>
          <Link
            to="/admin/dailyaccount"
            className="flex h-fit w-fit items-center justify-start gap-3"
          >
            <FontAwesomeIcon icon={faBook} className="h-5 w-5" />
            <h2 className="text-lg">Daily Account</h2>
          </Link>
          <Link
            to="/admin/appointment"
            className="flex h-fit w-fit items-center justify-start gap-3"
          >
            <FontAwesomeIcon icon={faCalendarCheck} className="h-5 w-5" />
            <h2 className="text-lg">Appointment</h2>
          </Link>
          <Link
            to="/admin/insurance"
            className="flex h-fit w-fit items-center justify-start gap-3"
          >
            <FontAwesomeIcon icon={faInstitution} className="h-5 w-5" />
            <h2 className="text-lg">Insurance</h2>
          </Link>
          <Link
            to="/admin/translation"
            className="flex h-fit w-fit items-center justify-start gap-3"
          >
            <FontAwesomeIcon icon={faExchangeAlt} className="h-5 w-5" />
            <h2 className="text-lg">Translation</h2>
          </Link>
          <Link
            to="/admin/officeexpense"
            className="flex h-fit w-fit items-center justify-start gap-3"
          >
            <FontAwesomeIcon icon={faStore} className="h-5 w-5" />
            <h2 className="text-lg">Office Expense</h2>
          </Link>
        </div>
        <div className="m-auto mb-10 flex flex-col items-center justify-end">
          <button
            type="submit"
            className="rounded-lg bg-white px-3 py-1 text-lg text-black font-semibold"
            onClick={adminLogOut}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
