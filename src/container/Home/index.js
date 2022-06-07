import React, { useState, useEffect } from "react";
import Table from "../../component/Table";

function Home() {
  const [rows, setRows] = React.useState([]);
  useEffect(() => {}, []);
  return <Table {...{ rows, setRows }} />;
}

export default Home;
