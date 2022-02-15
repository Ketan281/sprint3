import React from 'react'

export const Input = ({ data, handleData, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
			<div>
				<label>title</label>
				<br/>
				<input
					type="text"
					placeholder="Title"
					name="title"
					value={data.title}
					onChange={handleData}
				/>
			</div>
			<div>
				<label>cost</label>
				<br/>
				<input
					placeholder="Cost"
					name="cost"
					value={data.cost}
					onChange={handleData}
				/>
			</div>
			<div>
				<label>image</label>
				<br/>
				<input
					type="text"
					placeholder="img url"
					name="image"
					value={data.image}
					onChange={handleData}
				/>
			</div>
			<div>
				<label>category</label>
				<br/>
				<select
					name="category"
					value={data.category}
					onChange={handleData}
				>
					<option value="">select</option>
					<option value="vegetables">vegetables</option>
					<option value="fruits">fruits</option>
					<option value="provisions">provisions</option>
				</select>
			</div>
			<div>
				<button>submit</button>
			</div>
			</div>
		</form>
	);
};