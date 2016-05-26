import React from 'react';


export default class TodosListHeader extends React.Component {
	render() {
		return(
			<thead>	
				<tr>
					<th>Tasks</th>
					<th>Actions</th>
				</tr>
			</thead>
		);
	}
}