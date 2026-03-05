import React, { useState } from 'react';
import { 
  BrainCircuit, Trophy, ArrowRight, RotateCcw, 
  Check, X, Home, Globe, 
  Database, Cpu, Code, BookOpen, ChevronLeft, AlertCircle,
  BarChart3, Sigma, PieChart
} from 'lucide-react';

const courseData = {
  web_tech: {
    id: 'web_tech',
    title: "Web Technology",
    description: "HTML Forms, CSS Layouts, Responsive Design & XML",
    icon: Globe,
    gradient: "from-cyan-500 to-blue-600",
    isCompleted: true,
    questions: [] 
  },
  database: {
    id: 'database',
    title: "Database",
    description: "Access, SQL, Relational Models & Normalization",
    icon: Database,
    gradient: "from-emerald-500 to-teal-600",
    isFolder: true,
    isCompleted: true,
    subModules: [
      { id: 'database_alison', title: "Alison MCQS", description: "Previous Access & Relational Design Questions", questions: [] },
      { id: 'database_i', title: "Database I", description: "ERM, ERD, Normalization", questions: [] }
    ]
  },
  comp_arch: {
    id: 'comp_arch',
    title: "Computer Architecture",
    description: "Instruction Cycle, Pipelining, Hazards, & Interrupts",
    icon: Cpu,
    gradient: "from-purple-500 to-indigo-600",
    isCompleted: true,
    questions: [] 
  },
  programming: {
    id: 'programming',
    title: "Programming and Problem Solving Analysis",
    description: "C++ Operators, Loops, & Control Structures",
    icon: Code,
    gradient: "from-orange-500 to-red-600",
    isFolder: true,
    subModules: [
      { id: 'prog_edube', title: "Edube", description: "Edube Platform Questions", questions: [] },
      { id: 'prog_pasco', title: "Pasco", description: "Past Questions and Exams", questions: [] }
    ]
  },
  stat_modeling: {
    id: 'stat_modeling',
    title: "Statistical Modeling",
    description: "Probability, Distributions, Regression & Analysis",
    icon: BarChart3,
    gradient: "from-amber-500 to-orange-600",
    isFolder: true,
    subModules: [
      {
        id: 'stat_section_one',
        title: "Section One",
        description: "Foundations & Statistical Methods (Scrambled)",
        icon: Sigma,
        gradient: "from-amber-400 to-amber-600",
        questions: [
          { type: "mcq", question: "If P(A)=0.81 and P(B)=0.27, find P(A∩B) assuming independence.", options: ["0.21", "0.22", "0.24", "0.30"], correctAnswer: "0.22" },
          { type: "mcq", question: "The additive rule of probability states P(A∪B) equals:", options: ["P(A)+P(B)", "P(A)P(B)", "P(A)+P(B)-P(A∩B)", "P(A)/P(B)"], correctAnswer: "P(A)+P(B)-P(A∩B)" },
          { type: "mcq", question: "Find the mean of the sample: -1 0 1 4 1 1", options: ["1", "1.5", "2", "3"], correctAnswer: "1" },
          { type: "mcq", question: "Probability of drawing a red queen from a standard deck:", options: ["1/13", "1/26", "2/52", "both B and C"], correctAnswer: "both B and C" },
          { type: "mcq", question: "If events A and B are mutually exclusive, find P(A|B).", options: ["0", "0.17", "0.32", "0.49"], correctAnswer: "0" },
          { type: "mcq", question: "For the sample data set {1,2,6}, find Σx².", options: ["41", "38", "35", "30"], correctAnswer: "41" },
          { type: "mcq", question: "The z-score formula is:", options: ["(x+s)/mean", "(x-mean)/s", "(x-mean)/n", "x/s"], correctAnswer: "(x-mean)/s" },
          { type: "mcq", question: "If 5 is added to every observation, the mean:", options: ["decreases", "increases by 5", "unchanged", "doubles"], correctAnswer: "increases by 5" },
          { type: "mcq", question: "Probability of rolling a number greater than 2 on a standard die:", options: ["1/3", "1/2", "2/3", "3/4"], correctAnswer: "2/3" },
          { type: "mcq", question: "Find the median of the sample: 3 3 4 4", options: ["3", "3.5", "4", "2"], correctAnswer: "3.5" },
          { type: "mcq", question: "A negative z-score indicates the observation is:", options: ["above the mean", "below the mean", "equal to mean", "maximum value"], correctAnswer: "below the mean" },
          { type: "mcq", question: "Find the mean of the sample represented by x=[1,2,7], f=[1,2,1].", options: ["2", "3", "3.5", "4"], correctAnswer: "3" },
          { type: "mcq", question: "The sample space for tossing a coin once is:", options: ["{1,2}", "{H,T}", "{HH,TT}", "{H}"], correctAnswer: "{H,T}" },
          { type: "mcq", question: "If P(A)=0.6, find P(A^c).", options: ["0.4", "0.6", "0.5", "0.3"], correctAnswer: "0.4" },
          { type: "mcq", question: "Number of suits in a standard deck of cards:", options: ["3", "4", "5", "6"], correctAnswer: "4" },
          { type: "mcq", question: "For the sample data set {1,2,6}, find Σx.", options: ["7", "8", "9", "10"], correctAnswer: "9" },
          { type: "mcq", question: "What is the probability of exactly one head in three tosses?", options: ["3/8", "4/8", "2/8", "1/8"], correctAnswer: "3/8" },
          { type: "mcq", question: "Find the range of the sample: 1 2 3 4", options: ["2", "3", "4", "5"], correctAnswer: "3" },
          { type: "mcq", question: "If x=14, mean=10, and s=2, find the z-score.", options: ["1", "2", "3", "4"], correctAnswer: "2" },
          { type: "mcq", question: "The median is also known as:", options: ["Q1", "Q2", "Q3", "IQR"], correctAnswer: "Q2" },
          { type: "mcq", question: "For the sample data set {1,2,6}, find Σ(x-3).", options: ["0", "1", "2", "3"], correctAnswer: "0" },
          { type: "mcq", question: "Probability of drawing a queen from a standard deck:", options: ["1/13", "1/4", "4/13", "1/52"], correctAnswer: "1/13" },
          { type: "mcq", question: "Which sample of size 3 has a mean greater than the median?", options: ["{1,2,3}", "{1,2,10}", "{3,3,3}", "{2,2,2}"], correctAnswer: "{1,2,10}" },
          { type: "mcq", question: "Two dice are rolled. The number of possible outcomes is:", options: ["12", "18", "36", "6"], correctAnswer: "36" },
          { type: "mcq", question: "The probability of rolling a six on a standard die is:", options: ["1/6", "1/2", "1/3", "1/4"], correctAnswer: "1/6" },
          { type: "mcq", question: "If P(A)=0.13, P(B)=0.09, and P(A∩B)=0.02, find P(A∪B).", options: ["0.20", "0.22", "0.24", "0.30"], correctAnswer: "0.20" },
          { type: "mcq", question: "Which sample of size 3 has a mean less than the median?", options: ["{1,5,5}", "{2,3,4}", "{1,2,3}", "{3,3,3}"], correctAnswer: "{1,5,5}" },
          { type: "mcq", question: "Find the mode of the sample: 2 1 2 7", options: ["1", "2", "7", "No mode"], correctAnswer: "2" },
          { type: "mcq", question: "Probability that at least one head occurs in five tosses is approx:", options: ["0.5", "0.75", "0.97", "0.25"], correctAnswer: "0.97" },
          { type: "mcq", question: "If z = 0, the observation equals the:", options: ["mean", "median", "mode", "variance"], correctAnswer: "mean" },
          { type: "mcq", question: "Probability of rolling an even number on a standard die:", options: ["1/6", "1/3", "1/2", "2/3"], correctAnswer: "1/2" },
          { type: "mcq", question: "What does the 90th percentile indicate?", options: ["90% of values are below it", "10% below it", "median value", "mean value"], correctAnswer: "90% of values are below it" },
          { type: "mcq", question: "Find the mean of the sample: 1 2 3 4", options: ["2", "2.25", "2.5", "3"], correctAnswer: "2.5" },
          { type: "mcq", question: "If Q1=3 and Q3=9, find the Interquartile Range (IQR).", options: ["3", "6", "9", "12"], correctAnswer: "6" },
          { type: "mcq", question: "The probability of rolling an even number given it is not a two:", options: ["1/4", "2/4", "2/5", "3/5"], correctAnswer: "2/5" },
          { type: "mcq", question: "The interquartile range equals:", options: ["Q1 − Q3", "Q3 − Q1", "Q2 − Q1", "Q3 − Q2"], correctAnswer: "Q3 − Q1" },
          { type: "mcq", question: "Find the range of the sample: 2 -3 6 0 3 1", options: ["6", "7", "8", "9"], correctAnswer: "9" },
          { type: "mcq", question: "If standard deviation is small, the data are:", options: ["widely spread", "tightly clustered", "negative", "unrelated"], correctAnswer: "tightly clustered" },
          { type: "mcq", question: "The variance of a dataset is equal to:", options: ["square root of mean", "square of standard deviation", "mean of squares", "median squared"], correctAnswer: "square of standard deviation" },
          { type: "mcq", question: "If P(A)=0.38, P(B)=0.62, and P(A∩B)=0, the events are:", options: ["independent", "mutually exclusive", "complements", "dependent"], correctAnswer: "complements" },
          { type: "mcq", question: "The 50th percentile is equal to the:", options: ["mean", "median", "mode", "range"], correctAnswer: "median" },
          { type: "mcq", question: "Two coins are tossed. The sample space is:", options: ["{H,T}", "{HH,HT,TH,TT}", "{HH,TT}", "{HT,TH}"], correctAnswer: "{HH,HT,TH,TT}" },
          { type: "mcq", question: "Probability of two heads when tossing two coins:", options: ["1/4", "1/2", "3/4", "1/3"], correctAnswer: "1/4" },
          { type: "mcq", question: "In probability, the term 'Intersection' means:", options: ["either event", "both events", "neither", "complement"], correctAnswer: "both events" },
          { type: "mcq", question: "If P(A)=0.73, P(B)=0.48, and P(A∩B)=0.29, find P(A|B).", options: ["0.60", "0.73", "0.48", "0.29"], correctAnswer: "0.60" },
          { type: "mcq", question: "Probability of drawing a red card from a standard deck:", options: ["1/2", "1/4", "1/13", "1/26"], correctAnswer: "1/2" },
          { type: "mcq", question: "The conditional probability formula P(A|B) is:", options: ["P(A)/P(B)", "P(A∩B)/P(B)", "P(A)+P(B)", "P(A)P(B)"], correctAnswer: "P(A∩B)/P(B)" },
          { type: "mcq", question: "Probability of at least one head in two tosses:", options: ["1/4", "1/2", "3/4", "1"], correctAnswer: "3/4" },
          { type: "mcq", question: "Probability of drawing a heart from a standard deck:", options: ["1/2", "1/4", "1/13", "4/13"], correctAnswer: "1/4" },
          { type: "mcq", question: "In probability, the term 'Union' means:", options: ["both events only", "either or both", "neither", "complement"], correctAnswer: "either or both" },
          { type: "mcq", question: "If P(A)=0.26, P(B)=0.37, and P(A∩B)=0.11, find P(B|A).", options: ["0.11", "0.42", "0.37", "0.26"], correctAnswer: "0.42" },
          { type: "mcq", question: "Probability of drawing a red card given it is a queen:", options: ["1/2", "1/4", "1/13", "2/13"], correctAnswer: "1/2" },
          { type: "mcq", question: "If P(A)=0.6, P(B)=0.5, and P(A∩B)=0.3, find P(A|B).", options: ["0.3", "0.4", "0.6", "0.8"], correctAnswer: "0.6" },
          { type: "mcq", question: "The sample space for rolling a standard die is:", options: ["{1,2,3,4}", "{1,2,3,4,5}", "{1,2,3,4,5,6}", "{2,4,6}"], correctAnswer: "{1,2,3,4,5,6}" },
          { type: "mcq", question: "Events A and B are independent if:", options: ["P(A∩B)=0", "P(A)=P(B)", "P(A∩B)=P(A)P(B)", "P(A∪B)=1"], correctAnswer: "P(A∩B)=P(A)P(B)" },
          { type: "mcq", question: "Probability second toss is heads given first toss is heads:", options: ["1/2", "1", "1/4", "3/4"], correctAnswer: "1/2" },
          { type: "mcq", question: "Mutually exclusive events satisfy:", options: ["P(A∩B)=0", "P(A)=P(B)", "P(A)=0", "P(B)=1"], correctAnswer: "P(A∩B)=0" },
          { type: "mcq", question: "Probability of no heads in two tosses:", options: ["1/4", "1/2", "3/4", "1"], correctAnswer: "1/4" },
          { type: "mcq", question: "What is the probability of rolling a heads in one toss?", options: ["1", "1/2", "1/3", "1/4"], correctAnswer: "1/2" },
          { type: "mcq", question: "Probability of no heads in four tosses:", options: ["1/8", "1/16", "1/4", "1/32"], correctAnswer: "1/16" }
        ]
      },
      {
        id: 'stat_section_two',
        title: "Section Two",
        description: "Hard Mock Exam (60 MCQs)",
        icon: PieChart,
        gradient: "from-orange-400 to-orange-600",
        questions: [
          { type: "mcq", question: "For the sample data set {2,4,6}, find Σx.", options: ["10", "11", "12", "14"], correctAnswer: "12" },
          { type: "mcq", question: "For the sample data set {2,4,6}, find Σx².", options: ["40", "44", "56", "52"], correctAnswer: "56" },
          { type: "mcq", question: "For the sample data set {2,4,6}, find Σ(x-4).", options: ["−2", "0", "2", "4"], correctAnswer: "0" },
          { type: "mcq", question: "For the sample data set {1,3,5}, find Σ(x-3)².", options: ["6", "8", "10", "12"], correctAnswer: "8" },
          { type: "mcq", question: "For the sample data set {3,5,7}, compute Σ(x-5)².", options: ["4", "8", "12", "16"], correctAnswer: "8" },
          { type: "mcq", question: "For the sample data set {1,4,7}, find Σx².", options: ["66", "62", "58", "54"], correctAnswer: "66" },
          { type: "mcq", question: "Find the mean of the sample: 3 4 5 8", options: ["4.5", "5", "5.5", "6"], correctAnswer: "5" },
          { type: "mcq", question: "Find the median of the sample: 1 4 6 9", options: ["4", "5", "6", "7"], correctAnswer: "5" },
          { type: "mcq", question: "Find the mode of the sample: 2 3 3 4 4 4", options: ["2", "3", "4", "none"], correctAnswer: "4" },
          { type: "mcq", question: "Find the mean of: 1 2 2 5", options: ["2.25", "2.5", "2.75", "3"], correctAnswer: "2.5" },
          { type: "mcq", question: "Find the mean of: 2 4 6 8 10", options: ["5", "6", "7", "8"], correctAnswer: "6" },
          { type: "mcq", question: "Find the median of: 5 7 8 9 12", options: ["7", "8", "9", "10"], correctAnswer: "8" },
          { type: "mcq", question: "Frequency Table: x=[1,3,5], f=[2,1,1]. Find the mean.", options: ["2.5", "2.75", "3", "3.25"], correctAnswer: "2.5" },
          { type: "mcq", question: "Frequency Table: x=[2,4,6], f=[1,3,2]. Find Σxf.", options: ["22", "24", "26", "28"], correctAnswer: "26" },
          { type: "mcq", question: "Frequency Table: x=[1,2,3], f=[3,2,1]. Find the mean.", options: ["1.5", "1.67", "2", "2.25"], correctAnswer: "1.67" },
          { type: "mcq", question: "Find the range: 4 7 10 12", options: ["6", "7", "8", "9"], correctAnswer: "8" },
          { type: "mcq", question: "If variance = 16, standard deviation equals:", options: ["2", "4", "8", "16"], correctAnswer: "4" },
          { type: "mcq", question: "If standard deviation = 5, variance equals:", options: ["10", "15", "20", "25"], correctAnswer: "25" },
          { type: "mcq", question: "Data: 2 4 6. Mean = ?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
          { type: "mcq", question: "If 3 is added to every observation, the standard deviation is:", options: ["increases by 3", "decreases", "unchanged", "doubles"], correctAnswer: "unchanged" },
          { type: "mcq", question: "Data: 1 2 3 4 5. Find Q2.", options: ["2", "3", "4", "5"], correctAnswer: "3" },
          { type: "mcq", question: "Data: 1 3 5 7 9. Find Q1.", options: ["2", "3", "4", "5"], correctAnswer: "2" },
          { type: "mcq", question: "Data: 2 4 6 8 10. Find Q3.", options: ["6", "7", "8", "9"], correctAnswer: "9" },
          { type: "mcq", question: "If Q1=4 and Q3=10, find IQR.", options: ["4", "5", "6", "7"], correctAnswer: "6" },
          { type: "mcq", question: "If x=12, mean=10, s=2. Find z.", options: ["1", "2", "3", "4"], correctAnswer: "1" },
          { type: "mcq", question: "If x=8, mean=10, s=2. z =", options: ["−1", "−2", "1", "2"], correctAnswer: "−1" },
          { type: "mcq", question: "If z = 1.5, the observation is:", options: ["below mean", "above mean", "equal to mean", "negative"], correctAnswer: "above mean" },
          { type: "mcq", question: "Two coins tossed. Number of outcomes =", options: ["2", "3", "4", "5"], correctAnswer: "4" },
          { type: "mcq", question: "Three coins tossed. Number of outcomes =", options: ["6", "8", "10", "12"], correctAnswer: "8" },
          { type: "mcq", question: "Two dice rolled. Number of outcomes =", options: ["12", "24", "36", "48"], correctAnswer: "36" },
          { type: "mcq", question: "Probability of rolling an odd number:", options: ["1/3", "1/2", "2/3", "1/4"], correctAnswer: "1/2" },
          { type: "mcq", question: "Probability of rolling number ≤4:", options: ["2/6", "3/6", "4/6", "5/6"], correctAnswer: "4/6" },
          { type: "mcq", question: "Probability of at least one head in two tosses:", options: ["1/2", "3/4", "1/4", "1"], correctAnswer: "3/4" },
          { type: "mcq", question: "Probability of exactly one head in two tosses:", options: ["1/4", "1/2", "3/4", "1"], correctAnswer: "1/2" },
          { type: "mcq", question: "If P(A)=0.35. Find P(A^c).", options: ["0.45", "0.55", "0.65", "0.75"], correctAnswer: "0.65" },
          { type: "mcq", question: "Probability of no heads in three tosses:", options: ["1/8", "1/4", "1/6", "1/3"], correctAnswer: "1/8" },
          { type: "mcq", question: "Probability of at least one head in three tosses:", options: ["5/8", "6/8", "7/8", "3/4"], correctAnswer: "7/8" },
          { type: "mcq", question: "Let E={2,4,6}, T={3,4,5,6}. Find E ∩ T.", options: ["{2,3}", "{4,6}", "{3,5}", "{2,6}"], correctAnswer: "{4,6}" },
          { type: "mcq", question: "Find E ∪ T.", options: ["{2,3,4,5,6}", "{4,6}", "{1,3,5}", "{3,4,5}"], correctAnswer: "{2,3,4,5,6}" },
          { type: "mcq", question: "If P(A)=0.6, P(B)=0.5, P(A∩B)=0.2. Find P(A∪B).", options: ["0.7", "0.8", "0.9", "1"], correctAnswer: "0.9" },
          { type: "mcq", question: "P(A)=0.5, P(B)=0.4, P(A∩B)=0.2. Find P(A|B).", options: ["0.3", "0.4", "0.5", "0.6"], correctAnswer: "0.5" },
          { type: "mcq", question: "Find P(B|A).", options: ["0.2", "0.3", "0.4", "0.5"], correctAnswer: "0.4" },
          { type: "mcq", question: "Events A and B independent if:", options: ["P(A∩B)=0", "P(A)=P(B)", "P(A∩B)=P(A)P(B)", "P(A∪B)=1"], correctAnswer: "P(A∩B)=P(A)P(B)" },
          { type: "mcq", question: "Probability of drawing a king:", options: ["1/13", "1/4", "4/13", "1/52"], correctAnswer: "1/13" },
          { type: "mcq", question: "Probability of drawing a red card:", options: ["1/2", "1/4", "1/13", "1/26"], correctAnswer: "1/2" },
          { type: "mcq", question: "Probability of drawing a heart:", options: ["1/2", "1/4", "1/13", "4/13"], correctAnswer: "1/4" },
          { type: "mcq", question: "Probability of drawing a red queen:", options: ["1/26", "1/13", "1/52", "2/52"], correctAnswer: "1/26" },
          { type: "mcq", question: "Probability of rolling an even number given it is greater than 3:", options: ["1/2", "2/3", "1/3", "3/4"], correctAnswer: "2/3" },
          { type: "mcq", question: "Two dice rolled. Probability sum = 7.", options: ["4/36", "5/36", "6/36", "7/36"], correctAnswer: "6/36" },
          { type: "mcq", question: "Two dice rolled. Probability sum = 10.", options: ["2/36", "3/36", "4/36", "5/36"], correctAnswer: "3/36" },
          { type: "mcq", question: "Two coins tossed. Probability both show same face.", options: ["1/4", "1/2", "3/4", "1"], correctAnswer: "1/2" },
          { type: "mcq", question: "Probability exactly two heads in three tosses.", options: ["3/8", "4/8", "2/8", "5/8"], correctAnswer: "3/8" },
          { type: "mcq", question: "Probability exactly one head in three tosses.", options: ["3/8", "4/8", "2/8", "1/8"], correctAnswer: "3/8" },
          { type: "mcq", question: "Probability no heads in four tosses.", options: ["1/8", "1/16", "1/4", "1/32"], correctAnswer: "1/16" },
          { type: "mcq", question: "Probability at least one head in four tosses.", options: ["15/16", "7/8", "3/4", "1/2"], correctAnswer: "15/16" },
          { type: "mcq", question: "Probability of drawing a black card.", options: ["1/2", "1/4", "1/13", "26/52"], correctAnswer: "1/2" },
          { type: "mcq", question: "Probability of drawing a spade:", options: ["1/4", "1/13", "1/2", "1/26"], correctAnswer: "1/4" },
          { type: "mcq", question: "Probability of drawing a face card:", options: ["12/52", "4/52", "13/52", "3/52"], correctAnswer: "12/52" },
          { type: "mcq", question: "Probability of drawing a card that is a king or queen:", options: ["6/52", "8/52", "12/52", "10/52"], correctAnswer: "8/52" },
          { type: "mcq", question: "Probability of drawing a red king:", options: ["2/52", "4/52", "1/13", "1/26"], correctAnswer: "2/52" }
        ]
      }
    ]
  }
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [activeCourseId, setActiveCourseId] = useState(null);
  const [activeSubModuleId, setActiveSubModuleId] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [warning, setWarning] = useState("");
  const [isGptModalOpen, setIsGptModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [showPromptModal, setShowPromptModal] = useState(false);

  // BUG FIX: Safer derived state for questions to prevent TypeError
  const activeCourse = activeCourseId ? courseData[activeCourseId] : null;
  const subModule = activeCourse?.isFolder && activeSubModuleId 
    ? activeCourse.subModules.find(m => m.id === activeSubModuleId)
    : null;
  const activeQuestions = subModule ? subModule.questions : (activeCourse?.questions || []);
  const currentQuestion = activeQuestions.length > 0 ? activeQuestions[currentQuestionIndex] : null;

  const handleCopy = (text, field) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000); 
    document.body.removeChild(textArea);
  };

  const resetQuizState = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswers([]);
    setIsAnswered(false);
    setWarning("");
  };

  const handleStartCourse = (courseId) => {
    const course = courseData[courseId];
    if (!course.isFolder && (!course.questions || course.questions.length === 0)) {
      setShowPromptModal(true);
      return;
    }
    if (course.isFolder) {
      setActiveCourseId(courseId);
      setCurrentScreen('sub_dashboard');
    } else {
      setActiveCourseId(courseId);
      setActiveSubModuleId(null);
      resetQuizState();
      setCurrentScreen('quiz');
    }
  };

  const handleStartSubModule = (subModule) => {
    if (!subModule.questions || subModule.questions.length === 0) {
      setShowPromptModal(true);
      return;
    }
    setActiveSubModuleId(subModule.id);
    resetQuizState();
    setCurrentScreen('quiz');
  };

  const handleOptionToggle = (option) => {
    if (isAnswered) return;
    setSelectedAnswers([option]);
    setWarning("");
  };

  const handleCheckAnswer = () => {
    if (selectedAnswers.length === 0) {
      setWarning("Please select an option.");
      return;
    }
    setIsAnswered(true);
    if (selectedAnswers[0] === currentQuestion.correctAnswer) setScore(score + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < activeQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswers([]);
      setIsAnswered(false);
    } else {
      setCurrentScreen('results');
    }
  };

  const handleBackNavigation = () => {
    if (currentScreen === 'sub_dashboard') {
      setActiveCourseId(null);
      setCurrentScreen('dashboard');
    } else if (currentScreen === 'quiz' || currentScreen === 'results') {
      if (activeCourse?.isFolder) setCurrentScreen('sub_dashboard');
      else {
        setActiveCourseId(null);
        setCurrentScreen('dashboard');
      }
    } else {
      setCurrentScreen('dashboard');
    }
  };

  const renderDashboard = () => (
    <div className="p-6 sm:p-8 animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Select a Course</h2>
        <p className="text-slate-400 text-sm">Pick a subject to test your knowledge</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {Object.values(courseData).map((course) => {
          const Icon = course.icon;
          return (
            <button
              key={course.id}
              onClick={() => handleStartCourse(course.id)}
              className="group text-left bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-500 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500`}></div>
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${course.gradient} mb-4 shadow-lg`}>
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-1">{course.title}</h3>
              <p className="text-slate-400 text-xs mb-4 line-clamp-2">{course.description}</p>
              <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300">
                {course.isFolder ? 'Explore Modules' : 'Start Session'} <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderSubDashboard = () => (
    <div className="p-6 sm:p-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{activeCourse.title}</h2>
        <p className="text-slate-400 text-sm">Choose a module to begin</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {activeCourse.subModules.map((sub) => {
          const Icon = sub.icon || activeCourse.icon;
          const gradient = sub.gradient || activeCourse.gradient;
          return (
            <button
              key={sub.id}
              onClick={() => handleStartSubModule(sub)}
              className="group text-left bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-500 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500`}></div>
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-4 shadow-lg`}>
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1">{sub.title}</h3>
              <p className="text-slate-400 text-xs mb-4">{sub.description}</p>
              <div className="text-sm font-semibold text-blue-400 flex items-center group-hover:text-blue-300">
                Enter Module <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderQuiz = () => {
    if (!currentQuestion) return null;
    const progress = ((currentQuestionIndex) / activeQuestions.length) * 100;
    return (
      <div className="animate-in slide-in-from-right-4 duration-300">
        <div className="h-1.5 w-full bg-slate-700">
          <div className={`h-full bg-gradient-to-r ${activeCourse.gradient} transition-all duration-500`} style={{ width: `${progress}%` }}></div>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-4 text-xs text-slate-400 font-bold uppercase tracking-widest">
            <span>Question {currentQuestionIndex + 1} / {activeQuestions.length}</span>
            <span>Score: {score}</span>
          </div>

          <p className="text-red-500/90 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-2 flex items-center gap-1.5 animate-pulse">
            <AlertCircle size={14} /> Questions are Ai generated do not depend fully on them
          </p>

          <h2 className="text-xl font-bold text-white mb-8 leading-relaxed">{currentQuestion.question}</h2>
          
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((opt, i) => {
              const isSelected = selectedAnswers.includes(opt);
              const isCorrect = isAnswered && opt === currentQuestion.correctAnswer;
              const isWrong = isAnswered && isSelected && opt !== currentQuestion.correctAnswer;
              let btnClass = "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-400";
              if (isSelected) btnClass = "bg-blue-600/20 border-blue-500 text-blue-100";
              if (isCorrect) btnClass = "bg-green-500/20 border-green-500 text-green-400";
              if (isWrong) btnClass = "bg-red-500/20 border-red-500 text-red-400";
              return (
                <button key={i} disabled={isAnswered} onClick={() => handleOptionToggle(opt)} className={`w-full p-4 rounded-xl border-2 text-left transition-all flex justify-between items-center ${btnClass}`}>
                  <span className="font-medium">{opt}</span>
                  {isCorrect && <Check size={18} />}
                  {isWrong && <X size={18} />}
                </button>
              );
            })}
          </div>
          {warning && <p className="text-red-400 text-xs mb-4 flex items-center gap-2"><AlertCircle size={14}/>{warning}</p>}
          <div className="flex justify-end">
            {!isAnswered ? (
              <button onClick={handleCheckAnswer} className="w-full sm:w-auto bg-slate-600 hover:bg-slate-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg">Check Answer</button>
            ) : (
              <button onClick={handleNextQuestion} className={`w-full sm:w-auto bg-gradient-to-r ${activeCourse.gradient} text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg`}>
                {currentQuestionIndex + 1 === activeQuestions.length ? 'Finish' : 'Next'} <ArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const total = activeQuestions.length;
    const pct = Math.round((score / total) * 100);
    return (
      <div className="p-10 text-center animate-in zoom-in-95 duration-500">
        <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${activeCourse.gradient} rounded-full flex items-center justify-center shadow-xl`}><Trophy size={40} className="text-white" /></div>
        <h2 className="text-3xl font-bold text-white mb-2">Well Done!</h2>
        <div className="bg-slate-700/30 rounded-2xl p-6 mb-8 border border-slate-600/50">
          <div className={`text-6xl font-black mb-1 bg-gradient-to-r ${activeCourse.gradient} bg-clip-text text-transparent`}>{pct}%</div>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{score} / {total} Correct</p>
        </div>
        <button onClick={handleBackNavigation} className={`w-full bg-gradient-to-r ${activeCourse.gradient} text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2`}><Home size={20} /> Back to Hub</button>
      </div>
    );
  };

  let headerTitle = "Student Portal";
  if (currentScreen === 'sub_dashboard') headerTitle = activeCourse?.title;
  else if (currentScreen === 'quiz' || currentScreen === 'results') {
    if (activeCourse?.isFolder && activeSubModuleId) {
      const sub = activeCourse.subModules.find(s => s.id === activeSubModuleId);
      headerTitle = sub?.title || activeCourse.title; // Safe title rendering
    } else headerTitle = activeCourse?.title;
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 font-sans text-slate-100">
      <div className="bg-slate-800 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-700 flex flex-col max-h-[90vh]">
        <div className="bg-slate-800/95 backdrop-blur-md p-3 sm:p-5 border-b border-slate-700/50 flex items-center justify-between sticky top-0 z-10">
          <div className="flex-1 flex justify-start min-w-0">
            {currentScreen !== 'dashboard' ? (
              <button onClick={handleBackNavigation} className="p-1.5 sm:p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-300 transition-colors shrink-0">
                <ChevronLeft size={20} />
              </button>
            ) : (
              <a href="https://www.canva.com/brand/join?token=kMt3BN0TaL2FRGUA5n6NBA&brandingVariant=edu&referrer=team-invite" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-200 text-xs sm:text-sm font-medium transition-all border border-purple-500/30 whitespace-nowrap">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                  <span className="text-purple-200 text-[9px] sm:text-[10px] font-bold">C</span>
                </div>
                <span className="hidden sm:inline">Canva Pro</span>
                <span className="sm:hidden">Canva</span>
              </a>
            )}
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-3 px-2 max-w-[55%] shrink-0">
            <div className={`p-1.5 sm:p-2 shrink-0 rounded-lg ${activeCourse ? `bg-gradient-to-br ${activeCourse.gradient}` : 'bg-blue-600'}`}>
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <h1 className="text-sm sm:text-xl font-bold text-white tracking-wide truncate">{headerTitle}</h1>
          </div>
          <div className="flex-1 flex justify-end min-w-0">
            {currentScreen === 'dashboard' && (
              <button onClick={() => setIsGptModalOpen(true)} className="group flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-200 text-xs sm:text-sm font-medium transition-all border border-teal-500/30 whitespace-nowrap">
                <BrainCircuit size={14} className="text-teal-400" />
                <span className="hidden sm:inline ml-1">ChatGPT Pro</span>
                <span className="sm:hidden ml-1">GPT</span>
              </button>
            )}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {currentScreen === 'dashboard' && renderDashboard()}
          {currentScreen === 'sub_dashboard' && renderSubDashboard()}
          {currentScreen === 'quiz' && renderQuiz()}
          {currentScreen === 'results' && renderResults()}
        </div>
      </div>
      <footer className="mt-6 flex items-center gap-3 text-slate-400">
        <img src="https://i.imgur.com/L86Fp4I.jpeg" alt="s_afful" className="w-8 h-8 rounded-full border border-slate-600 shadow-md object-cover" />
        <span className="font-semibold tracking-wider text-sm uppercase">s_afful</span>
      </footer>
      {showPromptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 w-full max-w-sm text-center shadow-2xl">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Course Ended</h3>
            <p className="text-slate-400 text-sm mb-8">You have completed all available modules for this session. Great job!</p>
            <button onClick={() => setShowPromptModal(false)} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all">Close</button>
          </div>
        </div>
      )}
      {isGptModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-sm shadow-2xl relative">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <BrainCircuit className="text-teal-400" size={24} />
                <h3 className="text-lg font-bold text-white">GPT Access</h3>
              </div>
              <button onClick={() => setIsGptModalOpen(false)} className="text-slate-400 hover:text-white p-1"><X size={20} /></button>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                <p className="text-[10px] text-slate-500 mb-1 uppercase font-bold tracking-widest">Email</p>
                <div className="flex justify-between items-center">
                  <code className="text-xs text-slate-200">premiumgpt1@outlook.com</code>
                  <button onClick={() => handleCopy("premiumgpt1@outlook.com", "email")} className="text-teal-500 text-xs font-bold">{copiedField === 'email' ? 'Copied' : 'Copy'}</button>
                </div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                <p className="text-[10px] text-slate-500 mb-1 uppercase font-bold tracking-widest">Password</p>
                <div className="flex justify-between items-center">
                  <code className="text-xs text-slate-200">SaffulmadeIt</code>
                  <button onClick={() => handleCopy("SaffulmadeIt", "password")} className="text-teal-500 text-xs font-bold">{copiedField === 'password' ? 'Copied' : 'Copy'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`.custom-scrollbar::-webkit-scrollbar { width: 4px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #475569; border-radius: 10px; }`}</style>
    </div>
  );
}