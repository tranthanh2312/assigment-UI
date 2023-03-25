import { Pagination, Table } from "@mantine/core";

const elements = [
  {
    position: 1,
    name: "Hydrogen",
    symbol: "H",
    mass: 1.0079,
  },
  {
    position: 2,
    name: "Helium",
    symbol: "He",
    mass: 4.0026,
  },
  {
    position: 3,
    name: "Lithium",
    symbol: "Li",
    mass: 6.941,
  },
  {
    position: 4,
    name: "Beryllium",
    symbol: "Be",
    mass: 9.0122,
  },
  // {
  //   position: 5,
  //   name: "Boron",
  //   symbol: "B",
  //   mass: 10.811,
  // },
  // {
  //   position: 6,
  //   name: "Carbon",
  //   symbol: "C",
  //   mass: 12.0107,
  // },
];

export const TableDemo = () => {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "100%",
        border: "1px #000",
        borderRadius: "15px",
        padding: "2vh",
      }}
    >
      <Table>
        <thead>
          <tr>
            <th>Element position</th>
            <th>Element name</th>
            <th>Symbol</th>
            <th>Atomic mass</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>

      <br />
      <Pagination position="right" size="sm" total={5}/>
    </div>
  );
};
