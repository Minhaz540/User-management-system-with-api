const CUSTOM_URL = "https://user-management-sys-api.herokuapp.com/";
const root = document.getElementById("root");

function getData() {
	axios
		.get(CUSTOM_URL)
		.then((response) => {
			root.innerHTML = JSON.stringify(response.data);
		})
		.catch((err) => {
			alert(err);
		});
}

function showSingleUser(userId) {
	axios
		.get(CUSTOM_URL + "user/" + userId)
		.then((response) => {
			root.innerHTML = JSON.stringify(response.data);
		})
		.catch((err) => {
			alert(err);
		});
}

function addData(user) {
	axios
		.post(CUSTOM_URL + "user/add", user)
		.then((response) => {
			getData();
		})
		.catch((err) => {
			alert(err);
		});
}

function updateData(userId, user) {
	axios
		.put(CUSTOM_URL + "user/update/" + userId, user)
		.then((response) => {
			getData();
		})
		.catch((err) => {
			alert(err);
		});
}

function deleteData(userId) {
	axios
		.delete(CUSTOM_URL + "user/delete/" + userId)
		.then((response) => {
			getData();
		})
		.catch((err) => {
			alert(err);
		});
}

// handle input form
const deleteDataForm = document.getElementById("deleteData");
const singleUserForm = document.getElementById("singleUser");
const addUserForm = document.getElementById("addUser");
const updateUserForm = document.getElementById("updateUser");

const handleSingleView = (event) => {
	event.preventDefault();
	showSingleUser(singleUserForm[0].value);
	event.target.reset();
};

const handleAdd = (event) => {
	event.preventDefault();
	let user = {
		username: addUserForm[0].value,
		email: addUserForm[1].value,
	};
	addData(user);
	event.target.reset();
};

const handleUpdate = (event) => {
	event.preventDefault();
	let user = {
		username: updateUserForm[1].value,
		email: updateUserForm[2].value,
	};
	updateData(updateUserForm[0].value, user);
	event.target.reset();
};

const handleDelete = (event) => {
	event.preventDefault();
	deleteData(deleteDataForm[0].value);
	event.target.reset();
};

// handle delete event
deleteDataForm.addEventListener("submit", handleDelete);
singleUserForm.addEventListener("submit", handleSingleView);
addUserForm.addEventListener("submit", handleAdd);
updateUserForm.addEventListener("submit", handleUpdate);
