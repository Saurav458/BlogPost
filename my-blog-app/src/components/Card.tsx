import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers/rootReducer";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const blogs: Array<Object> = useSelector((state: State) => state.blogs);
  const product: Array<Object> = useSelector(
    (state: State) => state.productData
  );

  return (
    <>
      {product.map((data: any) => {
        console.log(data);
        const { title, description, images } = data;
        return (
          <div>
            <Link to={`/view/${data.id}`}>
              <Card className={classes.root}>
                <CardActionArea key={data.id}>
                  <CardMedia
                    component="img"
                    alt="Blog Info"
                    height="140"
                    image={`../images/${images[0]}`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
              </Card>
            </Link>
          </div>
        );
      })}
    </>
  );
}
