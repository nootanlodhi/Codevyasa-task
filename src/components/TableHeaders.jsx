import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { BsThreeDots } from "react-icons/bs";

const TableHeaders = () => {
  return (
    <tr>
      <th></th>
      <th><div>Sr No. <UnfoldMoreIcon /></div></th>
      <th><div>Heading 1 <UnfoldMoreIcon /></div></th>
      <th><div>Heading 2 <UnfoldMoreIcon /></div></th>
      <th><div>Heading 3 <UnfoldMoreIcon /></div></th>
      <th><div>Heading 4 <UnfoldMoreIcon /></div></th>
      <th><div>Heading 5 <UnfoldMoreIcon /></div>
      </th><th><div>Heading 6 <UnfoldMoreIcon /></div>
      </th><th><BsThreeDots/></th>
    </tr>
  );
};

export default TableHeaders;
