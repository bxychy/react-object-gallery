import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// 获取图片相关的数据
let imageDatas = require('./data/imageDatas.json');


// 利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = imageDatas.map((item) => {
	item.imageURL = 'images/' + item.fileName
	return item;
});

var ImgFigure=React.createClass({
	render:function(){
		return(
			<figure className='img-figure'>
				<img src={this.props.data.imageURL} alt={this.props.data.title}/>
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
					<div className="img-back" onClick={this.handleClick}>
						<p>
							{this.props.data.desc}
						</p>
					</div>
				</figcaption>
			</figure>
		)
	}
});

class App extends Component{
	Constant:{
		centerPos:{
			left: 0,
			top: 0
		},
		hPosRange: { // 左右两部分的取值范围
			leftSecX: [0, 0],
			rightSecX: [0, 0],
			y: [0, 0]
		},
		vPosRange: { // 上部分的取值范围
			x: [0, 0],
			topY: [0, 0]
		}
	}
	
	//组件加载以后，为每张图片计算其位置范围
	componentDidMount(){
//		获取舞台大小
		let stageDOM = ReactDOM.findDOMNode(this.refs.stage);
		let stageW = stageDOM.scrollWidth;
		let stageH = stageDOM.scrollHeight;
		let halfStageW = Math.floor(stageW / 2);
		let halfStageH = Math.floor(stageH / 2);
		
		
		
	}
  render() {
  	let controllerUnits = [], // 定义导航点数组			
				imgFigures = []; // 定义图片数组，遍历图片信息，把图片信息增加到数组里
			
		imageDatas.forEach(function(item,index){
			console.log(item,index);
			imgFigures.push(
				<ImgFigure data={item} key={index} ref={'imgFigure' + index}/>
			)
		})
			
    return(
      	<section className="stage" ref="stage">
	        <section className="img-sec">
	        	{imgFigures}
	        </section>
	        <nav className="controller-nav">
	        	{controllerUnits}
	        </nav>
      	</section>
    );
  }
}

export default App;
