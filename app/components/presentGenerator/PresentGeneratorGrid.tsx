import { Container, Grid } from "@chakra-ui/react";
import { ICompany } from "@/app/models/ICompany";

interface PresentGeneratorGridProps {
  companies: ICompany[];
}

const PresentGeneratorGrid = ({ companies }: PresentGeneratorGridProps) => {
  return (
    <>
      <Container maxWidth="80%" display="flex" justifyContent="center">
        <Grid></Grid>
      </Container>
    </>
  );
};

export default PresentGeneratorGrid;
