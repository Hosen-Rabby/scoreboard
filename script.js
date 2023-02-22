

// select dom elements
const totalRunEl = document.getElementById("total_run");
const matchNum = document.getElementById("matchNum");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
let increInpVal;
let decreInpVal;

// set initial total run

const initialState = {
  run: 0,
  match: 1,
};

// action identifires
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADDMATCH = 'addMatch'

const matchDiv = document.querySelector(".match");

// action creators
const incremenet = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decremenet = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
const addMatchFunc = () => {
  return {
    type: ADDMATCH,
  };
};

// create reducer function
function runReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      run: state.run + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      run: state.run - action.payload,
    };
  } else if (action.type === ADDMATCH) {
    return {
      ...state,
      match: state.match + 1,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(runReducer);

const render = () => {
  const state = store.getState();
  // matchNum.innerText = state.match;
  if (state.run < 0) {
    state.run = 0;
    totalRunEl.innerText = state.run;
  } else {
    totalRunEl.innerText = state.run;
  }
};

render();
store.subscribe(render);

// take input value
incrementEl.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    increInpVal = parseInt(event.target.value);
    store.dispatch(incremenet(increInpVal));
    event.preventDefault();
    event.target.value = "";
  }
});

decrementEl.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    decreInpVal = event.target.value;
    store.dispatch(decremenet(decreInpVal));
    event.preventDefault();
    event.target.value = "";
  }
});

// reset button functionality
resetBtn.addEventListener("click", () => {
  const state = store.getState();
  state.run = 0;
  totalRunEl.innerText = state.run;
});




// adding new match
// select elements & assign them to variables

let newMatch = document.querySelector(".all-matches");
let match = document.querySelector(".match");
let addMatchBtn = document.getElementById("addMatchbtn");

// let createMatch = function () {
//   let matchDiv = document.createElement("div");
//   matchDiv.className = "match";
//   let wrapperDiv = document.createElement("div");
//   wrapperDiv.className = "wrapper";
//   let deleteBtn = document.createElement("button");
//   deleteBtn.className = "lws-delete";
//   let imgEl = document.createElement("img");
//   let hEl = document.createElement("h3");
//   hEl.className = "lws-matchName";

//   hEl.innerText = "Match";
//   imgEl.src = "/image/delete.svg";

//   deleteBtn.appendChild(imgEl);

//   wrapperDiv.appendChild(deleteBtn);
//   wrapperDiv.appendChild(hEl);
//   matchDiv.appendChild(wrapperDiv);

//   return matchDiv;
// };

let addMatch = function () {
  // match left
  let matchDiv = document.createElement("div");
  matchDiv.className = "match";
  let wrapperDiv = document.createElement("div");
  wrapperDiv.className = "wrapper";
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "lws-delete";
  let imgEl = document.createElement("img");
  let hEl = document.createElement("h3");
  hEl.className = "lws-matchName";
  hEl.setAttribute('id', 'matchNum');

  hEl.innerText = "Match";
  imgEl.src = "/image/delete.svg";

  deleteBtn.appendChild(imgEl);

  wrapperDiv.appendChild(deleteBtn);
  wrapperDiv.appendChild(hEl);
  matchDiv.appendChild(wrapperDiv);

  // create inc-dec
  let incdecDiv = document.createElement("div");
  incdecDiv.className = "inc-dec";

  let incForm = document.createElement("form");
  incForm.className = "incrementForm";
  let incH = document.createElement("h4");
  incH.innerText = "Incremenet";
  incInp = document.createElement("input");
  incInp.className = "lws-increment";
  incInp.setAttribute("type", "number");
  incInp.setAttribute("name", "increment");
  incInp.setAttribute("id", "increment");

  incForm.appendChild(incH);
  incForm.appendChild(incInp);

  let decForm = document.createElement("form");
  decForm.className = "decrementForm";
  let decH = document.createElement("h4");
  decH.innerText = "Decrement";
  decInp = document.createElement("input");
  decInp.className = "lws-decrement";
  decInp.setAttribute("type", "number");
  decInp.setAttribute("name", "decrement");
  decInp.setAttribute("id", "decrement");

  // number/ runs

  let runDiv = document.createElement("div");
  runDiv.className = "numbers";
  let runH = document.createElement("h2");
  runH.setAttribute("class", "lws-singleResult");
  runH.setAttribute("id", "total_run");

  runDiv.appendChild(runH);

  decForm.appendChild(decH);
  decForm.appendChild(decInp);

  incdecDiv.appendChild(incForm);
  incdecDiv.appendChild(decForm);

  matchDiv.appendChild(incdecDiv);
  matchDiv.appendChild(runDiv);

  newMatch.appendChild(matchDiv);
};

addMatchBtn.addEventListener("click", addMatch);
