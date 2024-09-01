import { FC } from "react";

interface NoDataRowProps {
  colSpan: number;
}

const NoDataRow: FC<NoDataRowProps> = ({ colSpan }) => {
  return (
    <tr>
      <td colSpan={colSpan} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
        <div className="flex flex-col items-center justify-center py-8">
          <h3 className="mt-2 text-sm font-medium text-gray-900">No users found</h3>
          <p className="mt-1 text-sm text-gray-500">It looks like there are no users in the system yet.</p>
        </div>
      </td>
    </tr>
  );
};

export default NoDataRow;
