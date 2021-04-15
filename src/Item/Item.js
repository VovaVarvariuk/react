import './Item.css'
import img from '../img/flowers.png'

function Item() {
	return (
		<div className = 'wrapper'>
			<div className = 'block'>
				<div className = 'titleWrapper'>
					<h1 className = 'title'>Some title</h1>
				</div>
				<div className = 'imageWrapper'>
					<img className = 'image' src = {img} alt = 'flowers'></img>
				</div>
				<div className = 'descriptionWrapper'>
					<p className = 'description'>Some description</p>
				</div>
			</div>
		</div>
	);
 }
 
 export default Item;