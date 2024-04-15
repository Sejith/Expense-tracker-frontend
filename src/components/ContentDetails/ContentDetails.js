import React from "react";

import { useNavigate } from "react-router-dom";

import navigate from "../../utils/navigate";
import useDateFormatter from "../../hooks/useDateFormatter";

const ContentDetails = ({ item, dataType }) => {
  const history = useNavigate();

  const handleViewExpenses = () => {
    navigate("/edit");
  };
  return (
    <>
      <tr className="align-middle text-dark">
        {!dataType && (
          <th className="p-6" scope="row">
            {item?.user?.firstname} {item?.user?.lastname}
          </th>
        )}
        <td className="p-6">{item?.title}</td>
        <td className="p-6">{item?.description}</td>
        <td className="p-6">{item?.amount}</td>
        <td className="p-6">{useDateFormatter(item?.createdAt)}</td>
        <td className="p-6">
          
        </td>
      </tr>
    </>
  );
};

export default ContentDetails;
