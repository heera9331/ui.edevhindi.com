import React from "react";

function TableCode() {
  return (
    <div className="relative overflow-x-auto">
      <table className="border w-full table-auto">
        <thead className="bg-muted/40">
          <tr className="table-row border-b hover:bg-muted/40 transition-all delay-100">
            <th scope="col" className="px-4 py-2 text-left">
              S.No.
            </th>
            <th scope="col" className="px-4 py-2 text-left">
              Name
            </th>
            <th scope="col" className="px-4 py-2 text-left">
              Brach
            </th>
            <th scope="col" className="px-4 py-2 text-left">
              Semester
            </th>
            <th scope="col" className="px-4 py-2 text-left">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row border-b hover:bg-muted/40 transition-all delay-100">
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Heera Singh</td>
            <td className="px-4 py-2">Computer Science</td>
            <td className="px-4 py-2">8th</td>
            <td className="px-4 py-2">04-07-2024</td>
          </tr>
          <tr className="table-row border-b hover:bg-muted/40 transition-all delay-100">
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Heera Singh</td>
            <td className="px-4 py-2">Computer Science</td>
            <td className="px-4 py-2">8th</td>
            <td className="px-4 py-2">04-07-2024</td>
          </tr>
          <tr className="table-row border-b hover:bg-muted/40 transition-all delay-100">
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Heera Singh</td>
            <td className="px-4 py-2">Computer Science</td>
            <td className="px-4 py-2">8th</td>
            <td className="px-4 py-2">04-07-2024</td>
          </tr>
          <tr className="table-row border-b hover:bg-muted/40 transition-all delay-100">
            <td className="px-4">1</td>
            <td className="px-4 py-2">Heera Singh</td>
            <td className="px-4 py-2">Computer Science</td>
            <td className="px-4 py-2">8th</td>
            <td className="px-4 py-2">04-07-2024</td>
          </tr>
          <tr className="table-row border-b hover:bg-muted/40 transition-all delay-100">
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Heera Singh</td>
            <td className="px-4 py-2">Computer Science</td>
            <td className="px-4 py-2">8th</td>
            <td className="px-4 py-2">04-07-2024</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default TableCode;
