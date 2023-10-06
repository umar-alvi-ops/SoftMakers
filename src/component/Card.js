import React from "react"
import '../Pages/About.css'
import './Card.css'
import {makeStyles,useTheme} from "@material-ui/styles";
// import MobileStepper from '@material-ui/core/MobileStepper';
// import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
// import Button from "@material-ui/core/Button"
import Carousel from 'react-material-ui-carousel'
// import Grid from "@material-ui/core/Grid"


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const tutorialSteps = [
  {
    label: 'WEB DEVELOPMENT',
    imgPath:'https://www.arbitechsolutions.org/3.png'
      ,
    desc:"Tokenize your real WEB APPLICATION and offer fractional WEB APPLICATION for long term benefit, with advanced state-of-the-art blockchain technologies and high-end protections from our industry experts."
  },
  {
    label: 'SOFTWARE DEVELOPMENT',
    imgPath:
      '		https://www.arbitechsolutions.org/9.png',
    desc:"Tokenize your real SOFTWARE and offer fractional SOFTWARE for long term benefit, with advanced state-of-the-art blockchain technologies and high-end protections from our industry experts."
  },
  {
    label: 'MOBILE APP DEVELOPMENT',
    imgPath:
      '	https://www.infiniteblocktech.com/img/home/idea-segment.png',
    desc:"Tokenize your real Mobile and offer fractional MOBILE APP for long term benefit, with advanced state-of-the-art blockchain technologies and high-end protections from our industry experts."
  },
  {
    label: 'SEARCH ENGIN OPTIMIZATION',
    imgPath:
      'https://www.arbitechsolutions.org/12.png',
    desc:"Tokenize your real SEO and offer fractional SEO for long term benefit, with advanced state-of-the-art blockchain technologies and high-end protections from our industry experts."
  },
  {
    label: 'GAME DEVELOPMENT',
    imgPath:
      '	https://www.arbitechsolutions.org/15.png',
    desc:"Tokenize your real GAME and offer fractional GAME for long term benefit, with advanced state-of-the-art blockchain technologies and high-end protections from our industry experts."
  },
];


const useStyles = makeStyles({
  root:{
   display:"flex",
   flexDirection:"row", 
   justifyContent:'center',
  },
  header:{
    flexGrow:1,
  },
  media:{
    height:200
  },
  paper:{
    width:300
  },
  image:{
    width:"100%"
  },
  typo:{
    textAlign:"center"
  },
  mx:{
    margin:"6px 0px"
  },
  card:{
    width:300
  },
})

const Cards = ()=>{
  const classes = useStyles()
  return(
      <Carousel classeName={classes.root}>
          {
                tutorialSteps.map( (item, i) => <CardSwipeable key={i} item={item}/> )
            }
       </Carousel>
  )
}

function CardSwipeable(props)
{
   const classes = useStyles()
    return (
      <div className="main" classes={classes.root}>
         <Card className={`${classes.root} ${classes.card}`}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.item.imgPath}
              title="Contemplative Reptile" />
              <CardContent>
                <Typography className={classes.typo} gutterBottom variant="h6" component="h6" color="secondary">
                 
                </Typography>
                <Typography className={`${classes.typo} ${classes.mx}`} variant="h5" color="inherit" component="h3">
                  {props.item.label}
                </Typography>
                <Typography  className={classes.typo} color="textSecondary" component="p">
                  {props.item.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
      </Card>
     </div>
    )
}


export default Cards