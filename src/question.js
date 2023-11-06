 const questions = [
    {
      question: "Which of the following command is used to create react-js-app?",
      answers: [{ text: "npx create-react-app appname" , isCorrect: true }, { text: "npm install create-react-app" }, { text: "npx install create-react-app -g" },{text:" install -l create-react-app"}],
    },
    {
      question: "In React.js which one of the following is used to create a class for Inheritance ?",
      answers: [
        { text: "Create" },
        { text: "Extends", isCorrect: true },
        { text: "Inherits" },
        { text: "Delete" },
      ],
    },
    {
      question: "What is the default port number in which the application run ?",
      answers: [
        { text: "8080" },
        { text: "5000" },
        { text: "3080" },
        { text: "3000", isCorrect: true },
      ],
    },
    {
      question: "Which of the following function is true about changing the state in React.js?",
      answers: [
        { text: "this.State{}" },
        { text: "this.setState", isCorrect: true },
        { text: "this.setChangeState" },
        { text: "All of the above" },
      ],
    },
    {
      question: "Which of the following is true about key props?",
      answers: [
        { text: " Key prop is a way to identify the newly added element", isCorrect: true },
        { text: " Key props are used to look beauty" },
        { text: "It is one type of attribute of HTML" },
        { text: "It is not used in the array" },
      ],
    },
    {
      question: "What is JSX in React?",
      answers: [
        { text: " JavaScript XML", isCorrect: true },
        { text: "JavaScript External XML" },
        { text: "JavaScript Syntax Extension" },
      ],
    },

    {
      question: "How can you pass data from a parent component to a child component in React?",
      answers: [
        { text: "Using the setState method."},
        { text: "Using the render method." },
        { text: "Using the this.props object.", isCorrect: true  },
        {text:"Using the super keyword."}
      ],
    },
    {
      question: "What is a controlled component in React?",
      answers: [
        { text: "A component that is difficult to control"},
        { text: "A component that relies on external state management, such as Redux" },
        { text: "A component that manages its own state internally", isCorrect: true  },
        {text:" A component that relies on user input for state management"}
      ],
    },

    
  ]

  export default questions