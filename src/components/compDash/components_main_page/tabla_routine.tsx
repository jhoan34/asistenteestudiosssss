"use client";
import { useState } from "react";

const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const inicialFilas: string[][] = [
  ["5:00", " ", " ", " ", " ", " ", " ", " "],
  ["6:00", " ", " ", " ", " ", " ", " ", " "],
  ["7:00", " ", " ", " ", " ", " ", " ", " "],
  ["8:00", " ", " ", " ", " ", " ", " ", " "],
  ["9:00", " ", " ", " ", " ", " ", " ", " "],
  ["10:00", " ", " ", " ", " ", " ", " ", " "],
  ["11:00", " ", " ", " ", " ", " ", " ", " "],
  ["12:00", " ", " ", " ", " ", " ", " ", " "],
  ["13:00", " ", " ", " ", " ", " ", " ", " "],
  ["14:00", " ", " ", " ", " ", " ", " ", " "],
  ["15:00", " ", " ", " ", " ", " ", " ", " "],
  ["16:00", " ", " ", " ", " ", " ", " ", " "],
  ["17:00", " ", " ", " ", " ", " ", " ", " "],
  ["18:00", " ", " ", " ", " ", " ", " ", " "],
  ["19:00", " ", " ", " ", " ", " ", " ", " "],
  ["20:00", " ", " ", " ", " ", " ", " ", " "],
  ["21:00", " ", " ", " ", " ", " ", " ", " "],
  ["22:00", " ", " ", " ", " ", " ", " ", " "],
  ["23:00", " ", " ", " ", " ", " ", " ", " "],
  ["24:00", " ", " ", " ", " ", " ", " ", " "],
  ["00:00", " ", " ", " ", " ", " ", " ", " "],
  ["01:00", " ", " ", " ", " ", " ", " ", " "],
  ["02:00", " ", " ", " ", " ", " ", " ", " "],
  ["03:00", " ", " ", " ", " ", " ", " ", " "],
  ["04:00", " ", " ", " ", " ", " ", " ", " "],
];

export function TablaRoutine() {
  const [filas, setFilas] = useState<string[][]>(inicialFilas);
  const [open, setOpen] = useState<{
    state: boolean;
    row: number;
    col: number;
  }>({
    state: false,
    row: -1,
    col: -1,
  });

  const blur = () => {
    setOpen({ state: false, row: -1, col: -1 });
  };

  const handleChange = (i: number, i2: number, value: string) => {
    const nuevasFilas = filas.map((fila, rowIdx) =>
      fila.map((col, colIdx) => (rowIdx === i && colIdx === i2 ? value : col))
    );
    setFilas(nuevasFilas);
  };

  return (
    <div className="w-[70%] h-full bg-white rounded-lg p-4">
      <table className="w-full h-full">
        <thead className="bg-blue-200">
          <tr>
            <th className="border border-black">Horas</th>
            {days.map((ele, i) => (
              <th className="border border-black" key={i}>
                {ele}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((ele, i) => (
            <tr key={i}>
              {ele.map((ele2, i2) => (
                <td key={i2} className="border border-black p-0">
                  {open.state && open.row === i && open.col === i2 ? (
                    <input
                      className="text-black w-full h-full text-center outline-none border-none"
                      type="text"
                      autoFocus
                      onBlur={blur}
                      value={ele2}
                      onChange={(e) => handleChange(i, i2, e.target.value)}
                    />
                  ) : (
                    <div
                      onClick={() => setOpen({ state: true, row: i, col: i2 })}
                      className="w-full h-full text-center cursor-text"
                    >
                      {ele2}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
