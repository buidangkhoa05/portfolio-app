import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/lib/typography";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <TypographyH1 content={"Welcome to Our Shopping App"} />
      <Button color="primary">Shop Now</Button>
    </>
  );
};

export default HomePage;
