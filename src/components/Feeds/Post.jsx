import {
    Card,
    CardHeader,
    CardMedia,
    CardActions,
    CardContent,
    IconButton,
    Checkbox,
    Avatar,
} from '@mui/material'
import {
    Share,Favorite,FavoriteBorder,MoreVert
}from '@mui/icons-material'


const Post = (props) => {
    return ( 
        <div className="Post">
             <Card sx={{margin:'1vw'}}>
                <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor:'blue'}}>{props.avatar}</Avatar>
                }
                action={
                    <IconButton><MoreVert/></IconButton>
                }
                title={props.title}
                subheader="lorem ipsum dolor sit amet"
                />
                <CardMedia 
                component='img'
                 src={props.img}
                 alt='random'
                 height="200"  />
                <CardContent>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde minima doloribus tenetur possimus veritatis vel 
                    magni 
                    quam commodi architecto iusto adipisci praesentium, assumenda tempore fugit nobis pariatur id suscipit error!
                </CardContent>
                <CardActions>
                    <IconButton aria-label='share'>
                        <Share/>
                    </IconButton>
                    <IconButton>
                        <Checkbox icon={<FavoriteBorder/>}checkedIcon={<Favorite/>}/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
     );
}
 
export default Post;