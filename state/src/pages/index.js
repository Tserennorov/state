import { Button } from "@/component/Button";
import { Card } from "@/component/Card";
import { Input } from "@/component/Input";
import { Layout } from "@/component/Layout";
import { useState } from "react";

export default function Home() {
  // const mungu1 = "tugrug";
  // const mungu2 = "dollar";
  const [number, setNumber] = useState(0);

  const nemeh = () => {
    setNumber((prev) => prev + 1);
  };

  const hasah = () => {
    setNumber((prev) => prev - 1);
  };
  return (
    <div>
      <button onClick={nemeh}>nemeh</button>
      <div>{number}</div>
      <button onClick={hasah}>hasah</button>

      {/* <Card valyut1={mungu1} valyut2={mungu2} /> */}
      {/* <Layout>
        <Input />
        <Button />
        <Card />
      </Layout> */}
    </div>
  );
}
