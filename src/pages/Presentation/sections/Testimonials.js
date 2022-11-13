/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
// import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
// import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
// import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
// import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
// import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">
            Trusted by over{" "}
            <MKTypography variant="h2" color="info" textGradient mb={2}>
              80,000+ sinh vien
            </MKTypography>{" "}
          </MKTypography>

          <MKTypography variant="body1" color="text" mb={2}>
            Hơn 10,000 sinh viên đã tìm được chổ ở thông qua dịch vụ tìm nhà trọ của C-HOME
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Lài"
              date="1 day ago"
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem, perspiciatis nesciunt fugiat aut unde assumenda ea aliquid. Reiciendis a alias, consequatur rem repellendus voluptate. Hic veniam deserunt ullam fuga."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="My"
              date="1 week ago"
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem, perspiciatis nesciunt fugiat aut unde assumenda ea aliquid. Reiciendis a alias, consequatur rem repellendus voluptate. Hic veniam deserunt ullam fuga."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem, perspiciatis nesciunt fugiat aut unde assumenda ea aliquid. Reiciendis a alias, consequatur rem repellendus voluptate. Hic veniam deserunt ullam fuga."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
