import React from "react";
import { Link } from "react-router-dom";
import './viewdetail.scss';
import { connect } from 'react-redux';
import { State } from "../../redux/reducers/rootReducer"

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const mapStateToProps = (state: State) => {
    return {
        blogData: state.productData
    }
}
 type TblogDatas ={
    id:String,
    title: String,
    description: String,
    images: Array<string>
}
 interface ImatchParams{
    match:ImatchParams,
    blogData:Array<object> | TblogDatas
    params:ImatchParamsId 
}
interface ImatchParamsId{
    id:string 
}
class Viewdetail extends React.Component<ImatchParams>{
    public readonly state = ({
        id: "",
        title: "",
        description: "",
        images: []

    })
    componentDidMount(){
        const blogs:any=this.props.blogData
        blogs.map((blog: TblogDatas) => {
            if (blog.id == this.props.match.params.id) {
                this.setState({
                    id: blog.id,
                    title: blog.title,
                    description: blog.description,
                    images: blog.images
                })
            }
        })
    }
    render(){
        return(
            <div className="mainView">
                <div className="headView">
                    <div className="backArrow">
                    <Link to='/'>  <ArrowBackIcon className="icon-view" /></Link>
                    </div>
                    <div className="title"><p>{this.state.title}</p></div>
                </div>
                <div className="bodyView">
                    <div className="imgView">
                        <img src={`../images/${this.state.images[0]}`}/>
                    </div>
                    <div className="descView">
                        <p>   {this.state.description}</p>
                        
                     
                    </div>
                </div>

            </div>
        )
    }

}
export default connect(mapStateToProps)(Viewdetail);