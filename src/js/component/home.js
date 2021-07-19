import React from "react";
import { useState, useEffect } from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export function Home() {
	const [variable, setVariable] = useState([
		"Do Homework",
		"Do Laundry",
		"Walk the Dog"
	]);

	let todo = variable.map((item, i) => {
		return (
			<div className="repeating" key={i}>
				<li>{item}</li>
				<button onClick={() => removeItem(i)}>X</button>
			</div>
		);
	});

	const removeItem = index => {
		console.log(index);
		const newArray = variable.filter((item, i) => i != index);
		setVariable(newArray);
	};

	const newTodo = onKeyDownEvent => {
		console.log(onKeyDownEvent);
		if (onKeyDownEvent.keyCode === 13) {
			let userInput = onKeyDownEvent.target.value;
			const newTodo = [...variable, userInput];
			setVariable(newTodo);
			onKeyDownEvent.target.value = "";
		}
	};

	return (
		<div className="box">
			<h1 className="text-center">todos</h1>
			<input
				onKeyDown={newTodo}
				type="text"
				id="fname"
				placeholder="What needs to be done?"
				name="fname"></input>
			<div>
				<ul>{todo}</ul>
				<div>
					<ul>{todo.length} item left</ul>
				</div>
			</div>
		</div>
	);
}
