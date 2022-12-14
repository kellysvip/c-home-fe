import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fCurrency } from "../utils";
import { width } from "@mui/system";

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ border: "1px solid #657786", width: "900px", maxHeight: "250px" }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <CardActionArea>
        <Stack flex="0" direction="row">
          <CardMedia
            component="img"
            image={product.imageLink}
            alt="cHomePic"
            sx={{position:'relative',top:'-13px', width: "250px", height: "240px", minWidth: "250px" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ height: "80px", overflowY: "hidden" }}
            >
              {product.title} 
            </Typography>
            <Stack direction="column" spacing={0.5} justifyContent="flex-start">
              <Typography
                variant="subtitle1"
                sx={{ color: "#657786", overflow: "hidden" }}
              >
                {product.location} 
              </Typography>
              <Typography variant="subtitle2">
                {product.squareInArea}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "#0499a8", fontWeight: "700", fontSize: "20px" }}
              >
                {product.price}
              </Typography>

              <Typography variant="subtitle1">{product.postTime}</Typography>
            </Stack>
          </CardContent>
        </Stack>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
