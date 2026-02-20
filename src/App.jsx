import React, { useState } from 'react';

// Manually created SVG Icons to bypass lucide-react bundler issues
const IconWrapper = ({ size=24, className="", children }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);
const BrainCircuit = (p) => <IconWrapper {...p}><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"/><path d="M16 8V5c0-1.1.9-2 2-2"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/></IconWrapper>;
const Trophy = (p) => <IconWrapper {...p}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 1.1-.9 2-2 2H4"/><path d="M14 14.66V17c0 1.1.9 2 2 2h4"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></IconWrapper>;
const ArrowRight = (p) => <IconWrapper {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></IconWrapper>;
const RotateCcw = (p) => <IconWrapper {...p}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></IconWrapper>;
const Check = (p) => <IconWrapper {...p}><path d="M20 6 9 17l-5-5"/></IconWrapper>;
const X = (p) => <IconWrapper {...p}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></IconWrapper>;
const Home = (p) => <IconWrapper {...p}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></IconWrapper>;
const Globe = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></IconWrapper>;
const Database = (p) => <IconWrapper {...p}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></IconWrapper>;
const Cpu = (p) => <IconWrapper {...p}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></IconWrapper>;
const Code = (p) => <IconWrapper {...p}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></IconWrapper>;
const BookOpen = (p) => <IconWrapper {...p}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></IconWrapper>;
const ChevronLeft = (p) => <IconWrapper {...p}><path d="m15 18-6-6 6-6"/></IconWrapper>;
const AlertCircle = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></IconWrapper>;

// Data structure containing courses and their specific questions
const courseData = {
  web_tech: {
    id: 'web_tech',
    title: "Web Technology",
    description: "HTML, CSS, XML & Advanced Web Architecture",
    icon: Globe,
    gradient: "from-cyan-500 to-blue-600",
    questions: [
      {
        type: "mcq",
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
      },
      {
        type: "mcq",
        question: "Who is making the Web standards?",
        options: ["Mozilla", "Google", "The World Wide Web Consortium", "Microsoft"],
        correctAnswer: "The World Wide Web Consortium"
      },
      {
        type: "mcq",
        question: "Choose the correct HTML element for the largest heading:",
        options: ["<h6>", "<head>", "<heading>", "<h1>"],
        correctAnswer: "<h1>"
      },
      {
        type: "text",
        question: "Fill in the blank to insert a line break: <____>",
        correctAnswer: ["br", "br/", "br /"]
      },
      {
        type: "mcq",
        question: "What is the correct HTML for adding a background color?",
        options: ["<background>yellow</background>", "<body bg=\"yellow\">", "<body style=\"background-color:yellow;\">", "<body style=\"bg-color:yellow;\">"],
        correctAnswer: "<body style=\"background-color:yellow;\">"
      },
      {
        type: "mcq",
        question: "Choose the correct HTML element to define important text.",
        options: ["<b>", "<i>", "<important>", "<strong>"],
        correctAnswer: "<strong>"
      },
      {
        type: "mcq",
        question: "Choose the correct HTML element to define emphasized text.",
        options: ["<em>", "<italic>", "<i>", "<strong>"],
        correctAnswer: "<em>"
      },
      {
        type: "mcq",
        question: "What is the correct HTML for creating a hyperlink?",
        options: ["<a href=\"http://www.w3schools.com\">W3Schools</a>", "<a name=\"http://www.w3schools.com\">W3Schools</a>", "<a url=\"http://www.w3schools.com\">W3Schools</a>", "<a>http://www.w3schools.com</a>"],
        correctAnswer: "<a href=\"http://www.w3schools.com\">W3Schools</a>"
      },
      {
        type: "text",
        question: "Fill in the blank to indicate an end tag: <____p>",
        correctAnswer: ["/", "\\"]
      },
      {
        type: "mcq",
        question: "How can you open a link in a new tab/browser window?",
        options: ["<a href=\"url\" new>", "<a href=\"url\" target=\"_blank\">", "<a href=\"url\" target=\"new\">", "<a href=\"url\" window=\"_blank\">"],
        correctAnswer: "<a href=\"url\" target=\"_blank\">"
      },
      {
        type: "mcq",
        question: "Which of these elements are all <table> elements?",
        options: ["<table><tr><tt>", "<table><tr><td>", "<table><head><tfoot>", "<thead><body><tr>"],
        correctAnswer: "<table><tr><td>"
      },
      {
        type: "mcq",
        question: "Inline elements are normally displayed without starting a new line.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        type: "mcq",
        question: "How can you make a numbered list?",
        options: ["<ol>", "<ul>", "<dl>", "<list>"],
        correctAnswer: "<ol>"
      },
      {
        type: "mcq",
        question: "How can you make a bulleted list?",
        options: ["<list>", "<ol>", "<ul>", "<dl>"],
        correctAnswer: "<ul>"
      },
      {
        type: "mcq",
        question: "What is the correct HTML for making a checkbox?",
        options: ["<checkbox>", "<input type=\"check\">", "<check>", "<input type=\"checkbox\">"],
        correctAnswer: "<input type=\"checkbox\">"
      },
      {
        type: "text",
        question: "Fill in the blank to define a text input field: <input type=\"____\">",
        correctAnswer: ["text", "TEXT"]
      },
      {
        type: "mcq",
        question: "What is the correct HTML for making a drop-down list?",
        options: ["<input type=\"list\">", "<list>", "<select>", "<input type=\"dropdown\">"],
        correctAnswer: "<select>"
      },
      {
        type: "mcq",
        question: "What is the correct HTML for making a text area?",
        options: ["<textarea>", "<input type=\"textbox\">", "<input type=\"textarea\">", "<text>"],
        correctAnswer: "<textarea>"
      },
      {
        type: "mcq",
        question: "What is the correct HTML for inserting an image?",
        options: ["<image src=\"image.gif\" alt=\"MyImage\">", "<img src=\"image.gif\" alt=\"MyImage\">", "<img alt=\"MyImage\">image.gif</img>", "<img href=\"image.gif\" alt=\"MyImage\">"],
        correctAnswer: "<img src=\"image.gif\" alt=\"MyImage\">"
      },
      {
        type: "mcq",
        question: "Which HTML5 element is used to specify a footer for a document or section?",
        options: ["<bottom>", "<footer>", "<section>", "<foot>"],
        correctAnswer: "<footer>"
      },
      {
        type: "mcq",
        question: "Which HTML element is used to play video files?",
        options: ["<media>", "<video>", "<movie>", "<audio>"],
        correctAnswer: "<video>"
      },
      {
        type: "mcq",
        question: "Which HTML element is used to play audio files?",
        options: ["<sound>", "<audio>", "<mp3>", "<music>"],
        correctAnswer: "<audio>"
      },
      {
        type: "text",
        question: "Fill in the blank. The HTML global attribute, \"content____\" is used to specify whether the content of an element should be editable.",
        correctAnswer: ["editable"]
      },
      {
        type: "mcq",
        question: "Graphics defined by SVG is in which format?",
        options: ["HTML", "XML", "CSS", "JSON"],
        correctAnswer: "XML"
      },
      {
        type: "text",
        question: "Fill in the blank. CSS stands for ________ Style Sheets.",
        correctAnswer: ["Cascading", "cascading"]
      },
      {
        type: "mcq",
        question: "What is the correct HTML for referring to an external style sheet?",
        options: ["<style src=\"mystyle.css\">", "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">", "<stylesheet>mystyle.css</stylesheet>", "<style href=\"mystyle.css\">"],
        correctAnswer: "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">"
      },
      {
        type: "mcq",
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        options: ["In the <body> section", "At the end of the document", "In the <head> section", "Before the <html> tag"],
        correctAnswer: "In the <head> section"
      },
      {
        type: "mcq",
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<script>", "<style>", "<css>", "<link>"],
        correctAnswer: "<style>"
      },
      {
        type: "mcq",
        question: "Which HTML attribute is used to define inline styles?",
        options: ["styles", "font", "style", "class"],
        correctAnswer: "style"
      },
      {
        type: "text",
        question: "Fill in the blank for the correct CSS syntax to change text color: body {____: black;}",
        correctAnswer: ["color", "Color"]
      },
      {
        type: "mcq",
        question: "How do you insert a comment in a CSS file?",
        options: ["// this is a comment", "/* this is a comment */", "' this is a comment", "<!-- this is a comment -->"],
        correctAnswer: "/* this is a comment */"
      },
      {
        type: "mcq",
        question: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "bg-color"],
        correctAnswer: "background-color"
      },
      {
        type: "text",
        question: "Fill in the blank to add a background color for all <h1> elements: h1 {____:#FFFFFF;}",
        correctAnswer: ["background-color", "background"]
      },
      {
        type: "mcq",
        question: "Which CSS property is used to change the text color of an element?",
        options: ["fgcolor", "color", "text-color", "font-color"],
        correctAnswer: "color"
      },
      {
        type: "mcq",
        question: "Which CSS property controls the text size?",
        options: ["text-style", "font-style", "text-size", "font-size"],
        correctAnswer: "font-size"
      },
      {
        type: "mcq",
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        options: ["p {text-size:bold;}", "p {font-weight:bold;}", "<p style=\"text-size:bold;\">", "p {font-style:bold;}"],
        correctAnswer: "p {font-weight:bold;}"
      },
      {
        type: "mcq",
        question: "How do you display hyperlinks without an underline?",
        options: ["a {text-decoration:none;}", "a {underline:none;}", "a {decoration:no-underline;}", "a {text-decoration:no-underline;}"],
        correctAnswer: "a {text-decoration:none;}"
      },
      {
        type: "mcq",
        question: "How do you make each word in a text start with a capital letter?",
        options: ["text-transform:capitalize", "text-style:capitalize", "transform:capitalize", "font-transform:capitalize"],
        correctAnswer: "text-transform:capitalize"
      },
      {
        type: "text",
        question: "Fill in the blank to change the font of an element: ____: Arial;",
        correctAnswer: ["font-family", "font family"]
      },
      {
        type: "mcq",
        question: "How do you make the text bold?",
        options: ["style:bold;", "font:bold;", "font-weight:bold;", "text-weight:bold;"],
        correctAnswer: "font-weight:bold;"
      },
      {
        type: "mcq",
        question: "How do you display a border like this: The top border = 10px, bottom = 5px, left = 20px, right = 1px?",
        options: ["border-width:10px 1px 5px 20px;", "border-width:10px 20px 5px 1px;", "border-width:5px 20px 10px 1px;", "border-width:10px 5px 20px 1px;"],
        correctAnswer: "border-width:10px 1px 5px 20px;"
      },
      {
        type: "mcq",
        question: "Which property is used to change the left margin of an element?",
        options: ["margin-left", "padding-left", "indent", "left-margin"],
        correctAnswer: "margin-left"
      },
      {
        type: "mcq",
        question: "When using the padding property; are you allowed to use negative values?",
        options: ["Yes", "No"],
        correctAnswer: "No"
      },
      {
        type: "mcq",
        question: "How do you make a list that lists its items with squares?",
        options: ["list: square;", "list-type: square;", "list-style-type: square;", "ul {square;}"],
        correctAnswer: "list-style-type: square;"
      },
      {
        type: "text",
        question: "Fill in the blank to select an element with id 'demo' in CSS: ____demo { color: red; }",
        correctAnswer: ["#"]
      },
      {
        type: "text",
        question: "Fill in the blank to select elements with class name 'test' in CSS: ____test { color: red; }",
        correctAnswer: ["."]
      },
      {
        type: "mcq",
        question: "How do you select all p elements inside a div element?",
        options: ["div + p", "div p", "div.p", "div>p"],
        correctAnswer: "div p"
      },
      {
        type: "mcq",
        question: "How do you group selectors?",
        options: ["Separate each selector with a space", "Separate each selector with a plus sign", "Separate each selector with a comma", "Separate each selector with a semi-colon"],
        correctAnswer: "Separate each selector with a comma"
      },
      {
        type: "text",
        question: "Fill in the blank. XML stands for ________ Markup Language.",
        correctAnswer: ["eXtensible", "Extensible"]
      },
      {
        type: "mcq",
        question: "There is a way of describing XML data, how?",
        options: ["XML uses a description node", "XML uses a DTD or XML Schema to describe the data", "XML uses XSLT to describe data", "XML uses CSS"],
        correctAnswer: "XML uses a DTD or XML Schema to describe the data"
      },
      {
        type: "mcq",
        question: "What does DTD stand for?",
        options: ["Direct Type Definition", "Document Type Definition", "Dynamic Type Definition", "Data Type Definition"],
        correctAnswer: "Document Type Definition"
      },
      {
        type: "mcq",
        question: "Which statement is true?",
        options: ["All XML elements must have a closing tag", "XML tags are not case sensitive", "XML documents must have a DTD", "All XML elements must be lower case"],
        correctAnswer: "All XML elements must have a closing tag"
      },
      {
        type: "mcq",
        question: "XML tags are case sensitive.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        type: "text",
        question: "Fill in the blank. In XML, what is the exact string used to begin a CDATA section? <![____[",
        correctAnswer: ["CDATA"]
      }
    ]
  },
  database: {
    id: 'database',
    title: "Database",
    description: "Access, SQL, Relational Models & Normalization",
    icon: Database,
    gradient: "from-emerald-500 to-teal-600",
    questions: [
      {
        question: "When using a mail merge between Word and Access, the merge fields come directly from Access data fields.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        question: "To properly design a relational database, which elements must be identified? (Select 3)",
        options: ["The purpose of the database", "The fields required", "The UI color scheme", "The queries to be generated"],
        correctAnswer: ["The purpose of the database", "The fields required", "The queries to be generated"]
      },
      {
        question: "What is required to establish a relationship between two tables?",
        options: ["A common field", "A matching macro", "A junction form", "A shared query"],
        correctAnswer: "A common field"
      },
      {
        question: "A field represents a category or type of data used to organize database information.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        question: "If two tables do not share a common key but must be connected, what should be created?",
        options: ["A query link", "A junction table", "An external relationship", "A split form"],
        correctAnswer: "A junction table"
      },
      {
        question: "Which option represents a valid type of query join?",
        options: ["Inner join", "Outer link", "Cross macro", "Table merge"],
        correctAnswer: "Inner join"
      },
      {
        question: "Which tab is used to import data from another Access database?",
        options: ["External Data", "Home", "Create", "Database Tools"],
        correctAnswer: "External Data"
      },
      {
        question: "Which formats can Microsoft Access export data to? (Select 4)",
        options: ["Microsoft Word Merge", "XML file", "Text file", "PowerPoint presentation", "Adobe Photoshop PSD file"],
        correctAnswer: ["Microsoft Word Merge", "XML file", "Text file", "PowerPoint presentation"]
      },
      {
        question: "Access allows the creation of Word mail merges using Access data.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        question: "Where do you go to further define data types or formatting for a field?",
        options: ["Properties", "Macros", "Relationships", "Forms"],
        correctAnswer: "Properties"
      },
      {
        question: "Which control is used to display fixed, unchanging text on a form or report?",
        options: ["Text box", "Label", "Button", "Combo box"],
        correctAnswer: "Label"
      },
      {
        question: "An inner join returns only records with matching values in both tables.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        question: "What are good sources of existing data for beginning database design? (Select 3)",
        options: ["A sketch of the final output", "Electronic documents", "A random number generator", "Paper documents"],
        correctAnswer: ["A sketch of the final output", "Electronic documents", "Paper documents"]
      },
      {
        question: "In a left outer join, excluded records come from the primary table.",
        options: ["True", "False"],
        correctAnswer: "False"
      },
      {
        question: "Which control should be used to display text that is expected to change?",
        options: ["Label", "Text box", "Image", "Line"],
        correctAnswer: "Text box"
      },
      {
        question: "A many-to-many relationship means one record links to many records in another table.",
        options: ["True", "False"],
        correctAnswer: "False"
      },
      {
        question: "Which three context-sensitive tabs appear in the Report Layout Tools? (Select 3)",
        options: ["Design", "Arrange", "Format", "Review"],
        correctAnswer: ["Design", "Arrange", "Format"]
      },
      {
        question: "Third Normal Form focuses on creating lookup data that is maintained in a separate table.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        question: "A query join exists only while the query is being executed.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        question: "Second Normal Form involves identifying composite keys that act as both primary and foreign keys.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        question: "Normalization aims to restructure tables to avoid data redundancy, not to allow multiple data types per field.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        question: "Where can you find the Group and Sort feature when grouping data in a report?",
        options: ["Design tab", "Home tab", "External Data tab", "Create tab"],
        correctAnswer: "Design tab"
      },
      {
        question: "The Join Properties dialog box defines how tables relate to each other in a query.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        question: "Which actions are valid options in the Get External Data Wizard? (Select 3)",
        options: ["Link to data by creating a linked table", "Import source data into a new table", "Delete the source file after import", "Append records to an existing table"],
        correctAnswer: ["Link to data by creating a linked table", "Import source data into a new table", "Append records to an existing table"]
      },
      {
        question: "Which type of control would you choose to present several pages as a single set?",
        options: ["Tab Control", "Label", "Text Box", "Combo Box"],
        correctAnswer: "Tab Control"
      },
      {
        question: "Which of the following can you place on a switchboard? (Choose 3)",
        options: ["Links to reports", "Links to other forms", "Control buttons", "Tables in Design View"],
        correctAnswer: ["Links to reports", "Links to other forms", "Control buttons"]
      },
      {
        question: "Where do you go for startup options on a current database?",
        options: ["Access Options", "Database Tools", "View Menu", "Create Tab"],
        correctAnswer: "Access Options"
      },
      {
        question: "A switchboard is a form that opens up when you open a database.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        question: "What is the name of the dialog box that allows you to add and remove switchboard pages?",
        options: ["Switchboard Manager", "Page Layout", "Form Designer", "Navigation Pane"],
        correctAnswer: "Switchboard Manager"
      },
      {
        question: "Which of the following views allow you to modify a switchboard?",
        options: ["Design View", "Datasheet View", "Layout View", "Print Preview"],
        correctAnswer: "Design View"
      },
      {
        question: "Which of the following are ways to implement security on a database? (Choose 3)",
        options: ["Implementing a database password", "Hiding database objects", "Use a switchboard upon start up", "Disabling the keyboard"],
        correctAnswer: ["Implementing a database password", "Hiding database objects", "Use a switchboard upon start up"]
      },
      {
        question: "A split database is when the tables are in one table, but the queries reside in another.",
        options: ["True", "False"],
        correctAnswer: "False"
      },
      {
        question: "Which of the following is the primary purpose of the message bar?",
        options: ["To tell you active content has been disabled", "To chat with other users", "To display error codes", "To show the current time"],
        correctAnswer: "To tell you active content has been disabled"
      },
      {
        question: "Which of the following reasons would make you set Trust Center options?",
        options: ["To set trusted locations and options for databases", "To encrypt the entire hard drive", "To manage user passwords", "To connect to the internet"],
        correctAnswer: "To set trusted locations and options for databases"
      },
      {
        question: "The ACCDE file format is used when you convert your database to an executable file.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        question: "The Database Documenter is an automated tool used to document every detail of your database schema.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        question: "What is the purpose of the Object Dependencies pane? (Choose 2)",
        options: ["To show objects that depend on you", "To show objects you depend on", "To delete unused tables", "To repair corrupted forms"],
        correctAnswer: ["To show objects that depend on you", "To show objects you depend on"]
      },
      {
        question: "Which of the following are valid types of external data sources? (Choose 3)",
        options: ["Excel", "Access", "Project", "Paint"],
        correctAnswer: ["Excel", "Access", "Project"]
      },
      {
        question: "Which of the following are valid database maintenance options?",
        options: ["Backup", "Defragment", "Compile", "Hibernate"],
        correctAnswer: "Backup"
      },
      {
        question: "Which of the following are valid modes used to open a database? (Choose 3)",
        options: ["Exclusive", "Exclusive Read-Only", "Open Read-Only", "Open Write-Only"],
        correctAnswer: ["Exclusive", "Exclusive Read-Only", "Open Read-Only"]
      },
      {
        question: "Which of the following are valid types of macro actions? (Choose 3)",
        options: ["Database objects", "Data entry operations", "System commands", "Hardware upgrades"],
        correctAnswer: ["Database objects", "Data entry operations", "System commands"]
      },
      {
        question: "When working in the Macro Builder window, what is the name of the command subset you choose from?",
        options: ["Action Catalog", "Command Palette", "Task Pane", "Property Sheet"],
        correctAnswer: "Action Catalog"
      },
      {
        question: "When creating macros, you must have a solid knowledge of which of the following?",
        options: ["VBA", "HTML", "Python", "C++"],
        correctAnswer: "VBA"
      },
      {
        question: "Macro code can be converted to ______.",
        options: ["VBA", "SQL", "XML", "Java"],
        correctAnswer: "VBA"
      },
      {
        question: "Macros cannot be used to restrict data entry.",
        options: ["True", "False"],
        correctAnswer: "False"
      },
      {
        question: "Which of the following are examples of an input mask? (Choose 3)",
        options: ["Phone Number", "Social Security Number", "Zip Code", "First Name"],
        correctAnswer: ["Phone Number", "Social Security Number", "Zip Code"]
      },
      {
        question: "Field ______ refers to using fields in the database table to constrain the data that is entered into them.",
        options: ["Validation", "Verification", "Masking", "Formatting"],
        correctAnswer: "Validation"
      },
      {
        question: "Record validation is when you use an expression to check data before it is saved to the database.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        question: "For a user to be prompted to enter a letter while creating an input mask, which of the following characters forces the user to enter a letter?",
        options: ["L", "A", "0", "9"],
        correctAnswer: "L"
      },
      {
        question: "In which of the following views can you see a field’s properties?",
        options: ["Design View", "Datasheet View", "Form View", "Layout View"],
        correctAnswer: "Design View"
      },
      {
        question: "Tab order is the order in which you navigate from field to field on a form during data entry.",
        options: ["True", "False"],
        correctAnswer: "True"
      },
      {
        question: "Which control is used to draw around other controls to allow content to stand out?",
        options: ["Rectangle", "Line", "Frame", "Border"],
        correctAnswer: "Rectangle"
      },
      {
        question: "Which of the following controls can display a Yes/No value? (Choose 3)",
        options: ["Check Box", "Toggle Button", "Option Button", "Command Button"],
        correctAnswer: ["Check Box", "Toggle Button", "Option Button"]
      },
      {
        question: "You can split the detail section into separate pages by using insert page break.",
        options: ["True", "False"],
        correctAnswer: "True"
      }
    ]
  },
  comp_arch: {
    id: 'comp_arch',
    title: "Computer Architecture",
    description: "Instruction Sets, Assembly, & Pipelining",
    icon: Cpu,
    gradient: "from-purple-500 to-indigo-600",
    questions: [
      {
        type: "text",
        question: "Fill in the blank. Computer Architecture refers to those attributes of a system visible to a ________.",
        correctAnswer: ["programmer", "Programmer"]
      },
      {
        type: "mcq",
        question: "Computer Organization is primarily concerned with:",
        options: ["Instruction set design", "Operational units and their interconnections", "Data representation", "Software development"],
        correctAnswer: "Operational units and their interconnections"
      },
      {
        type: "mcq",
        question: "The basic instruction cycle consists of which two main phases?",
        options: ["Fetch and Execute", "Read and Write", "Load and Store", "Encode and Decode"],
        correctAnswer: "Fetch and Execute"
      },
      {
        type: "text",
        question: "Fill in the blank. The ____ register contains the address of the next instruction to be fetched.",
        correctAnswer: ["PC", "Program Counter", "pc"]
      },
      {
        type: "mcq",
        question: "What does CPU stand for?",
        options: ["Computer Processing Unit", "Central Processing Unit", "Core Performance Unit", "Central Programming Unit"],
        correctAnswer: "Central Processing Unit"
      },
      {
        type: "text",
        question: "Fill in the blank. The MBR (Memory ________ Register) holds the data to be written into memory or the data most recently read.",
        correctAnswer: ["Buffer", "buffer"]
      },
      {
        type: "mcq",
        question: "Which component is responsible for performing arithmetic and logical operations?",
        options: ["Control Unit", "Registers", "ALU", "System Bus"],
        correctAnswer: "ALU"
      },
      {
        type: "mcq",
        question: "Which of the following is NOT one of the 4 main structural components of a computer?",
        options: ["CPU", "Main Memory", "I/O", "Operating System"],
        correctAnswer: "Operating System"
      },
      {
        type: "mcq",
        question: "An interrupt is a mechanism by which other modules may...",
        options: ["Halt the CPU forever", "Interrupt the normal sequencing of the processor", "Bypass memory", "Format the hard drive"],
        correctAnswer: "Interrupt the normal sequencing of the processor"
      },
      {
        type: "text",
        question: "Fill in the blank. The ____ bus carries data between the processor and memory.",
        correctAnswer: ["data", "Data"]
      },
      {
        type: "mcq",
        question: "In a top-level view of a computer, memory is typically divided into...",
        options: ["Sectors and tracks", "Words or bytes", "Packets", "Frames"],
        correctAnswer: "Words or bytes"
      },
      {
        type: "mcq",
        question: "What are the core elements of a machine instruction?",
        options: ["Opcode, Source operand ref, Result operand ref, Next instruction ref", "Registers, Cache, Memory, ALU", "Fetch, Decode, Execute, Store", "Syntax, Semantics, Logic, Grammar"],
        correctAnswer: "Opcode, Source operand ref, Result operand ref, Next instruction ref"
      },
      {
        type: "text",
        question: "Fill in the blank. The operation to be performed by an instruction is specified by the ________.",
        correctAnswer: ["opcode", "Opcode", "operation code"]
      },
      {
        type: "mcq",
        question: "Which of the following is a common type of operand?",
        options: ["Addresses", "Numbers", "Characters", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        type: "mcq",
        question: "In Intel x86 architecture, what is a 32-bit integer called?",
        options: ["Word", "Doubleword", "Quadword", "Byte"],
        correctAnswer: "Doubleword"
      },
      {
        type: "mcq",
        question: "ARM architecture primarily uses what kind of instruction set design?",
        options: ["CISC", "RISC", "VLIW", "EPIC"],
        correctAnswer: "RISC"
      },
      {
        type: "text",
        question: "Fill in the blank. In instruction characteristics, RISC stands for ________ Instruction Set Computer.",
        correctAnswer: ["Reduced", "reduced"]
      },
      {
        type: "mcq",
        question: "Which type of operation involves moving data from one location to another?",
        options: ["Arithmetic", "Logical", "Data transfer", "Control"],
        correctAnswer: "Data transfer"
      },
      {
        type: "mcq",
        question: "Operations that alter the sequence of execution are known as...",
        options: ["Logical operations", "Control transfer operations", "I/O operations", "System operations"],
        correctAnswer: "Control transfer operations"
      },
      {
        type: "text",
        question: "Fill in the blank. A ________ instruction transfers control unconditionally to another address.",
        correctAnswer: ["jump", "branch", "Jump", "Branch"]
      },
      {
        type: "mcq",
        question: "Packed decimal is a format used to represent...",
        options: ["Floating point numbers", "ASCII strings", "BCD digits", "Hexadecimal arrays"],
        correctAnswer: "BCD digits"
      },
      {
        type: "mcq",
        question: "SIMD stands for...",
        options: ["Single Instruction Multiple Data", "System Interrupt Memory Direct", "Synchronous Input Multiple Devices", "Single Integer Memory Data"],
        correctAnswer: "Single Instruction Multiple Data"
      },
      {
        type: "mcq",
        question: "Which addressing mode puts the operand explicitly in the instruction itself?",
        options: ["Direct", "Indirect", "Immediate", "Register"],
        correctAnswer: "Immediate"
      },
      {
        type: "text",
        question: "Fill in the blank. In ________ addressing, the address field contains the exact effective address of the operand in memory.",
        correctAnswer: ["Direct", "direct"]
      },
      {
        type: "mcq",
        question: "In Indirect Addressing, the address field refers to...",
        options: ["The actual value", "A register", "The address of a word in memory, which contains the full-length address of the operand", "An I/O port"],
        correctAnswer: "The address of a word in memory, which contains the full-length address of the operand"
      },
      {
        type: "mcq",
        question: "Register Addressing is similar to Direct Addressing, except...",
        options: ["It is much slower", "The address field refers to a register rather than a main memory address", "It uses two memory references", "It can only be used for addition"],
        correctAnswer: "The address field refers to a register rather than a main memory address"
      },
      {
        type: "text",
        question: "Fill in the blank. Displacement addressing combines the capabilities of direct addressing and register ________ addressing.",
        correctAnswer: ["indirect", "Indirect"]
      },
      {
        type: "mcq",
        question: "Which of the following is a variation of displacement addressing?",
        options: ["Relative addressing", "Base-register addressing", "Indexing", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        type: "mcq",
        question: "The length of an instruction format is typically determined by...",
        options: ["The speed of the CPU clock", "The size of the cache", "The number of bits needed to specify the opcode and operand addresses", "The operating system version"],
        correctAnswer: "The number of bits needed to specify the opcode and operand addresses"
      },
      {
        type: "text",
        question: "Fill in the blank. An instruction format must include an ________ and, implicitly or explicitly, zero or more operands.",
        correctAnswer: ["opcode", "Opcode"]
      },
      {
        type: "mcq",
        question: "ARM addressing modes generally rely heavily on...",
        options: ["A stack architecture", "A Load/Store architecture", "A memory-to-memory architecture", "Complex CISC decoding"],
        correctAnswer: "A Load/Store architecture"
      },
      {
        type: "mcq",
        question: "What is a main motivation for Assembly Language programming today?",
        options: ["It is easier to learn than Python", "To gain deeper control over hardware and execution speed", "It is required for web design", "To create graphical user interfaces easily"],
        correctAnswer: "To gain deeper control over hardware and execution speed"
      },
      {
        type: "mcq",
        question: "A symbolic representation of machine instructions is called...",
        options: ["Machine language", "Assembly language", "High-level language", "Microcode"],
        correctAnswer: "Assembly language"
      },
      {
        type: "text",
        question: "Fill in the blank. The program that translates assembly language into machine code is called an ________.",
        correctAnswer: ["assembler", "Assembler"]
      },
      {
        type: "mcq",
        question: "Which of the following is an element of a typical assembly language statement?",
        options: ["Label", "Mnemonic", "Operand", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        type: "text",
        question: "Fill in the blank. In assembly language, a ________ is a recognizable name representing a memory address.",
        correctAnswer: ["label", "Label"]
      },
      {
        type: "mcq",
        question: "Pseudo-instructions (or directives) in assembly language...",
        options: ["Are executed directly by the ALU", "Are instructions to the assembler, not translated into machine code", "Are syntax errors", "Slow down the processor"],
        correctAnswer: "Are instructions to the assembler, not translated into machine code"
      },
      {
        type: "mcq",
        question: "What is the function of a Linker?",
        options: ["Combines multiple object files into a single executable file", "Translates high-level code to assembly", "Executes the program in memory", "Debugs logical errors"],
        correctAnswer: "Combines multiple object files into a single executable file"
      },
      {
        type: "text",
        question: "Fill in the blank. A ________ places the executable program into main memory so it can be executed.",
        correctAnswer: ["loader", "Loader"]
      },
      {
        type: "mcq",
        question: "A One-Pass Assembler...",
        options: ["Requires two reads of the source code", "Reads the source code once and generates object code, resolving forward references immediately if possible", "Only works for 8-bit processors", "Is another name for a compiler"],
        correctAnswer: "Reads the source code once and generates object code, resolving forward references immediately if possible"
      },
      {
        type: "mcq",
        question: "The CPU component responsible for managing the execution of instructions is the...",
        options: ["ALU", "Control Unit", "Cache", "System Bus"],
        correctAnswer: "Control Unit"
      },
      {
        type: "mcq",
        question: "Registers that are accessible to the programmer are called...",
        options: ["Control registers", "Status registers", "User-visible registers", "Hidden registers"],
        correctAnswer: "User-visible registers"
      },
      {
        type: "text",
        question: "Fill in the blank. The ________ register contains the most recently fetched instruction.",
        correctAnswer: ["IR", "Instruction Register", "ir"]
      },
      {
        type: "mcq",
        question: "Condition Codes (or flags) are typically stored in the...",
        options: ["Accumulator", "Program Status Word (PSW)", "Instruction Register", "Program Counter"],
        correctAnswer: "Program Status Word (PSW)"
      },
      {
        type: "mcq",
        question: "The full instruction cycle generally includes which sub-cycles?",
        options: ["Fetch, Indirect, Execute, Interrupt", "Read, Write, Jump, Halt", "Input, Output, Process, Storage", "Add, Subtract, Multiply, Divide"],
        correctAnswer: "Fetch, Indirect, Execute, Interrupt"
      },
      {
        type: "text",
        question: "Fill in the blank. Pipelining improves processor performance by overlapping the ________ of multiple instructions.",
        correctAnswer: ["execution", "Execution", "processing"]
      },
      {
        type: "mcq",
        question: "A hazard in an instruction pipeline refers to...",
        options: ["A physical short circuit in the CPU", "A situation that prevents the next instruction from executing during its designated clock cycle", "A corrupted memory sector", "An infinite loop in the code"],
        correctAnswer: "A situation that prevents the next instruction from executing during its designated clock cycle"
      },
      {
        type: "mcq",
        question: "Which of the following is a type of pipeline hazard?",
        options: ["Data hazard", "Control hazard", "Structural hazard", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        type: "text",
        question: "Fill in the blank. A control hazard is also commonly known as a ________ hazard.",
        correctAnswer: ["branch", "Branch"]
      },
      {
        type: "mcq",
        question: "Branch Prediction is a technique used to minimize the penalty of...",
        options: ["Data hazards", "Control hazards", "Structural hazards", "Cache misses"],
        correctAnswer: "Control hazards"
      },
      {
        type: "mcq",
        question: "Which of the following pipeline stages involves reading operands from registers?",
        options: ["Instruction Fetch", "Decode / Register Fetch", "Execute", "Write Back"],
        correctAnswer: "Decode / Register Fetch"
      },
      {
        type: "text",
        question: "Fill in the blank. In a pipeline, stalling the pipeline to resolve a hazard is often called inserting a ________.",
        correctAnswer: ["bubble", "Bubble", "stall"]
      },
      {
        type: "mcq",
        question: "Processor organization for pipelining often involves splitting the cache into...",
        options: ["L1 and L2 caches", "Instruction cache and Data cache", "Read cache and Write cache", "SRAM and DRAM"],
        correctAnswer: "Instruction cache and Data cache"
      },
      {
        type: "mcq",
        question: "Multiple Issue processors (like Superscalar architectures) differ from basic pipelined processors because they...",
        options: ["Do not use clocks", "Can initiate the execution of multiple instructions in the same clock cycle", "Use vacuum tubes instead of transistors", "Run slower to save power"],
        correctAnswer: "Can initiate the execution of multiple instructions in the same clock cycle"
      }
    ]
  },
  programming: {
    id: 'programming',
    title: "Programming and Problem Solving Analysis",
    description: "C++ Operators, Loops, & Control Structures",
    icon: Code,
    gradient: "from-orange-500 to-red-600",
    questions: [
      {
        type: "mcq",
        question: "Which operator is used to compare two values for equality in C++?",
        options: ["=", "==", "===", "<>"],
        correctAnswer: "=="
      },
      {
        type: "text",
        question: "Fill in the blank to increase the value of the variable 'x' by 1: x____;",
        correctAnswer: ["++"]
      },
      {
        type: "mcq",
        question: "How do you write an \"else if\" statement in C++?",
        options: ["elseif", "else if", "elif", "if else"],
        correctAnswer: "else if"
      },
      {
        type: "text",
        question: "Fill in the blank to execute a block of code if 'x' is equal to 'y': if (x ____ y) { cout << \"Yes\"; }",
        correctAnswer: ["=="]
      },
      {
        type: "mcq",
        question: "Which statement is used to execute some code if there is no case match in a switch statement?",
        options: ["else", "default", "finally", "catch"],
        correctAnswer: "default"
      },
      {
        type: "text",
        question: "Fill in the blank to stop the execution of more cases inside a switch block: case 1: cout << \"One\"; ____;",
        correctAnswer: ["break"]
      },
      {
        type: "mcq",
        question: "Which C++ loop is guaranteed to execute at least one time, even if the condition is false?",
        options: ["for loop", "while loop", "do/while loop", "foreach loop"],
        correctAnswer: "do/while loop"
      },
      {
        type: "text",
        question: "Fill in the blank to create a standard while loop: ____ (i < 5) { cout << i; i++; }",
        correctAnswer: ["while", "while "]
      },
      {
        type: "mcq",
        question: "What is the correct syntax to create a for loop in C++ that loops 5 times?",
        options: ["for (int i = 0; i < 5; i++)", "for (i = 0; i <= 5)", "for int i = 1 to 5", "loop (5)"],
        correctAnswer: "for (int i = 0; i < 5; i++)"
      },
      {
        type: "text",
        question: "Fill in the blank to specify that a condition is true if x is NOT equal to y: if (x ____ y)",
        correctAnswer: ["!=", "not="]
      },
      {
        type: "mcq",
        question: "Which operator is used to multiply numbers in C++?",
        options: ["*", "%", "x", "#"],
        correctAnswer: "*"
      },
      {
        type: "text",
        question: "Fill in the blank to divide x by y: x ____ y;",
        correctAnswer: ["/"]
      },
      {
        type: "mcq",
        question: "Which operator is used to find the remainder of a division?",
        options: ["/", "%", "mod", "div"],
        correctAnswer: "%"
      },
      {
        type: "text",
        question: "Fill in the blank to assign the value 10 to variable x: x ____ 10;",
        correctAnswer: ["="]
      },
      {
        type: "mcq",
        question: "What is the logical AND operator in C++?",
        options: ["&&", "||", "!", "and"],
        correctAnswer: "&&"
      },
      {
        type: "text",
        question: "Fill in the blank to specify that a condition is true if x is greater than y: if (x ____ y)",
        correctAnswer: [">"]
      },
      {
        type: "mcq",
        question: "What is the logical OR operator in C++?",
        options: ["&&", "||", "!", "or"],
        correctAnswer: "||"
      },
      {
        type: "text",
        question: "Fill in the blank to add 5 to x using the addition assignment operator: x ____ 5;",
        correctAnswer: ["+="]
      },
      {
        type: "mcq",
        question: "Which operator is known as the ternary operator?",
        options: ["? :", "++", "::", "->"],
        correctAnswer: "? :"
      },
      {
        type: "text",
        question: "Fill in the blank for the logical NOT operator: ____(x == y)",
        correctAnswer: ["!"]
      },
      {
        type: "mcq",
        question: "How do you start an if statement in C++?",
        options: ["if (x > y)", "if x > y then", "if x > y", "if x > y:"],
        correctAnswer: "if (x > y)"
      },
      {
        type: "text",
        question: "Fill in the blank to execute code when an 'if' condition is false: ____ { cout << \"False\"; }",
        correctAnswer: ["else"]
      },
      {
        type: "mcq",
        question: "What is the correct way to start a switch block?",
        options: ["switch (x) {", "switch x {", "switch {x}", "switch [x] {"],
        correctAnswer: "switch (x) {"
      },
      {
        type: "text",
        question: "Fill in the blank to start a switch statement for a variable named 'day': ____ (day) { }",
        correctAnswer: ["switch"]
      },
      {
        type: "mcq",
        question: "Can you use a string variable as the direct expression in a C++ switch statement?",
        options: ["Yes", "No"],
        correctAnswer: "No"
      },
      {
        type: "text",
        question: "Fill in the blank: Each case in a switch statement should usually end with a ____ statement.",
        correctAnswer: ["break"]
      },
      {
        type: "mcq",
        question: "What happens if you omit the break statement in a C++ switch case?",
        options: ["Syntax error", "It stops executing", "It falls through to the next case", "Program crashes"],
        correctAnswer: "It falls through to the next case"
      },
      {
        type: "text",
        question: "Fill in the blank to check if x is less than or equal to y: if (x ____ y)",
        correctAnswer: ["<="]
      },
      {
        type: "mcq",
        question: "Short hand if...else is also known as:",
        options: ["Ternary Operator", "Elvis Operator", "Binary Operator", "Switch Operator"],
        correctAnswer: "Ternary Operator"
      },
      {
        type: "text",
        question: "Fill in the blank to define a case block for the value 1: ____ 1:",
        correctAnswer: ["case"]
      },
      {
        type: "mcq",
        question: "Which keyword is used to skip the current iteration of a loop and continue to the next one?",
        options: ["skip", "break", "continue", "next"],
        correctAnswer: "continue"
      },
      {
        type: "text",
        question: "Fill in the blank to stop a loop completely before its condition naturally becomes false: ____;",
        correctAnswer: ["break"]
      },
      {
        type: "mcq",
        question: "Which loop evaluates its condition at the very end of the loop body?",
        options: ["for", "while", "do...while", "foreach"],
        correctAnswer: "do...while"
      },
      {
        type: "text",
        question: "Fill in the blank. The syntax for a for loop is: for (statement 1; statement 2; statement 3). Which statement is executed every time AFTER the loop body runs? Statement ____",
        correctAnswer: ["3", "three"]
      },
      {
        type: "mcq",
        question: "What is the purpose of Statement 1 in a C++ for loop (e.g., for(int i=0; ...)?",
        options: ["Executes code after the loop", "Defines the loop condition", "Executed one time before the loop starts", "Increments the counter"],
        correctAnswer: "Executed one time before the loop starts"
      },
      {
        type: "text",
        question: "Fill in the blank. A loop inside of another loop is called a ____ loop.",
        correctAnswer: ["nested"]
      },
      {
        type: "mcq",
        question: "If the condition in a standard 'while' loop is false initially, how many times will the loop body execute?",
        options: ["1", "0", "Infinite", "Depends on the compiler"],
        correctAnswer: "0"
      },
      {
        type: "text",
        question: "Fill in the blank. To run a block of code a specific, known number of times, it is often best to use a ____ loop.",
        correctAnswer: ["for"]
      },
      {
        type: "mcq",
        question: "Which of the following creates an infinite loop in C++?",
        options: ["for(;;)", "while(true)", "Both of the above", "Neither"],
        correctAnswer: "Both of the above"
      },
      {
        type: "text",
        question: "Fill in the blank to decrement variable x by 1: x____;",
        correctAnswer: ["--"]
      },
      {
        type: "mcq",
        question: "What does the `<=` operator mean?",
        options: ["Less than", "Equal to", "Less than or equal to", "Greater than or equal to"],
        correctAnswer: "Less than or equal to"
      },
      {
        type: "text",
        question: "Fill in the blank to multiply variable x by 5 using assignment shorthand: x ____ 5;",
        correctAnswer: ["*="]
      },
      {
        type: "mcq",
        question: "Which of the following operators has the highest standard precedence?",
        options: ["+", "-", "*", "="],
        correctAnswer: "*"
      },
      {
        type: "text",
        question: "Fill in the blank. To explicitly override standard operator precedence, you use ____.",
        correctAnswer: ["parentheses", "()", "( )"]
      },
      {
        type: "mcq",
        question: "What will be the boolean result of `true && false`?",
        options: ["true", "false", "1", "-1"],
        correctAnswer: "false"
      },
      {
        type: "text",
        question: "Fill in the blank. The boolean result of `true || false` is ____.",
        correctAnswer: ["true", "1"]
      },
      {
        type: "mcq",
        question: "Can multiple variables be initialized in the first statement of a for loop?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
      },
      {
        type: "text",
        question: "Fill in the blank to check if x is greater than or equal to y: if (x ____ y)",
        correctAnswer: [">="]
      },
      {
        type: "mcq",
        question: "Which data type is returned by all relational and logical operators in C++?",
        options: ["int", "string", "bool", "char"],
        correctAnswer: "bool"
      },
      {
        type: "text",
        question: "Fill in the blank to divide x by 2 using assignment shorthand: x ____ 2;",
        correctAnswer: ["/="]
      },
      {
        type: "mcq",
        question: "What is the value of `x` after this code runs? `int x = 10; x += 5;`",
        options: ["5", "10", "15", "50"],
        correctAnswer: "15"
      },
      {
        type: "text",
        question: "Fill in the blank. In C++, any non-zero integer value evaluated in an if-statement condition is considered ____.",
        correctAnswer: ["true", "True"]
      },
      {
        type: "mcq",
        question: "What does the single equals sign '=' do in C++?",
        options: ["Checks for equality", "Assigns a value", "Compares types", "Divides values"],
        correctAnswer: "Assigns a value"
      },
      {
        type: "text",
        question: "Fill in the blank to start a do/while loop: ____ { cout << \"Hi\"; } while(x < 5);",
        correctAnswer: ["do"]
      }
    ]
  }
};

export default function App() {
  // Navigation State
  const [currentScreen, setCurrentScreen] = useState('dashboard'); // 'dashboard', 'quiz', 'results'
  const [activeCourseId, setActiveCourseId] = useState(null);
  
  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [warning, setWarning] = useState("");

  // Derived state for the active course and its questions
  const activeCourse = activeCourseId ? courseData[activeCourseId] : null;
  const currentQuestion = activeCourse ? activeCourse.questions[currentQuestionIndex] : null;

  // --- Actions ---

  const handleStartCourse = (courseId) => {
    setActiveCourseId(courseId);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswers([]);
    setIsAnswered(false);
    setWarning("");
    setCurrentScreen('quiz');
  };

  const handleOptionToggle = (option) => {
    if (isAnswered) return;
    setWarning(""); // Clear warning on interaction
    
    const isMulti = Array.isArray(currentQuestion.correctAnswer);
    
    if (isMulti) {
      const maxSelections = currentQuestion.correctAnswer.length;
      if (selectedAnswers.includes(option)) {
        // Deselect
        setSelectedAnswers(selectedAnswers.filter(a => a !== option));
      } else {
        // Select, but limit to max allowed
        if (selectedAnswers.length < maxSelections) {
          setSelectedAnswers([...selectedAnswers, option]);
        } else {
          setWarning(`You can only select ${maxSelections} options. Deselect one first.`);
        }
      }
    } else {
      // Single select replaces the current selection
      setSelectedAnswers([option]); 
    }
  };

  const handleCheckAnswer = () => {
    if (currentQuestion.type === 'text') {
      if (!selectedAnswers[0] || selectedAnswers[0].trim() === "") {
        setWarning("Please type an answer before checking.");
        return;
      }
    } else {
      const isMulti = Array.isArray(currentQuestion.correctAnswer);
      
      if (isMulti) {
        const requiredCount = currentQuestion.correctAnswer.length;
        if (selectedAnswers.length < requiredCount) {
          setWarning(`Please select all ${requiredCount} correct answers before checking.`);
          return;
        }
      }
    }
    
    setIsAnswered(true);
    
    // Grade the answer
    let isCorrect = false;
    if (currentQuestion.type === 'text') {
      const typed = selectedAnswers[0]?.toLowerCase().trim() || "";
      const acceptable = currentQuestion.correctAnswer.map(a => a.toLowerCase().trim());
      isCorrect = acceptable.includes(typed);
    } else {
      const isMulti = Array.isArray(currentQuestion.correctAnswer);
      if (isMulti) {
        // Sort to safely compare arrays regardless of selection order
        const sortedSelected = [...selectedAnswers].sort();
        const sortedCorrect = [...currentQuestion.correctAnswer].sort();
        isCorrect = sortedSelected.length === sortedCorrect.length && 
                    sortedSelected.every((val, i) => val === sortedCorrect[i]);
      } else {
        isCorrect = selectedAnswers[0] === currentQuestion.correctAnswer;
      }
    }
    
    if (isCorrect) setScore(score + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < activeCourse.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswers([]);
      setIsAnswered(false);
      setWarning("");
    } else {
      setCurrentScreen('results');
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswers([]);
    setIsAnswered(false);
    setWarning("");
    setCurrentScreen('quiz');
  };

  const handleReturnToDashboard = () => {
    setActiveCourseId(null);
    setCurrentScreen('dashboard');
  };

  // --- Render Functions ---

  const renderDashboard = () => (
    <div className="p-6 sm:p-8 animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Select a Course</h2>
        <p className="text-slate-400 text-sm sm:text-base">Choose a course to begin your quiz</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {Object.values(courseData).map((course) => {
          const Icon = course.icon;
          return (
            <button
              key={course.id}
              onClick={() => handleStartCourse(course.id)}
              className="group text-left bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-500 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500`}></div>
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${course.gradient} mb-4 shadow-lg`}>
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1">{course.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-4 line-clamp-2">{course.description}</p>
              
              <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                Start Quiz <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderQuiz = () => {
    const progress = ((currentQuestionIndex) / activeCourse.questions.length) * 100;

    return (
      <div className="animate-in slide-in-from-right-4 duration-300">
        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-slate-700">
          <div 
            className={`h-full bg-gradient-to-r ${activeCourse.gradient} transition-all duration-500 ease-out`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="p-5 sm:p-8">
          {/* Question Info */}
          <div className="flex justify-between items-center mb-6 text-xs sm:text-sm font-medium text-slate-400">
            <span className="bg-slate-700 px-3 py-1 rounded-full text-slate-200">
              Q {currentQuestionIndex + 1} of {activeCourse.questions.length}
            </span>
            <span className="bg-slate-700 px-3 py-1 rounded-full text-slate-200">
              Score: {score}
            </span>
          </div>

          {/* Question Text */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-white leading-relaxed">
              {currentQuestion.question}
            </h2>
            {currentQuestion.type !== 'text' && Array.isArray(currentQuestion.correctAnswer) && currentQuestion.correctAnswer.length > 1 && (
              <p className="text-blue-400 text-sm mt-2 font-medium">
                (Select {currentQuestion.correctAnswer.length} answers)
              </p>
            )}
          </div>

          {/* Warning Message */}
          {warning && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-2 text-red-400 text-sm animate-in fade-in slide-in-from-top-2">
              <AlertCircle size={16} />
              <span>{warning}</span>
            </div>
          )}

          {/* Options */}
          <div className="space-y-3 mb-6 sm:mb-8">
            {currentQuestion.type === 'text' ? (
              <div className="animate-in fade-in">
                <input
                  type="text"
                  value={selectedAnswers[0] || ""}
                  onChange={(e) => {
                    if (!isAnswered) {
                      setSelectedAnswers([e.target.value]);
                      setWarning("");
                    }
                  }}
                  disabled={isAnswered}
                  placeholder="Type your answer here..."
                  className={`w-full p-4 rounded-xl border-2 text-white bg-slate-700/50 focus:outline-none transition-all ${
                    isAnswered
                      ? (currentQuestion.correctAnswer.map(a=>a.toLowerCase().trim()).includes((selectedAnswers[0]||"").toLowerCase().trim())
                          ? "border-green-500 text-green-400 bg-green-500/10"
                          : "border-red-500 text-red-400 bg-red-500/10")
                      : "border-slate-600 focus:border-blue-500"
                  }`}
                />
                {isAnswered && (
                  <div className="mt-3 text-sm font-medium">
                    {currentQuestion.correctAnswer.map(a=>a.toLowerCase().trim()).includes((selectedAnswers[0]||"").toLowerCase().trim())
                      ? <div className="flex items-center gap-2 text-green-400"><Check size={18} /> Correct!</div>
                      : <div className="flex items-center gap-2 text-red-400"><X size={18} /> Incorrect. Acceptable answers: <span className="text-slate-300 font-semibold">{currentQuestion.correctAnswer.join(" OR ")}</span></div>
                    }
                  </div>
                )}
              </div>
            ) : (
              currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswers.includes(option);
                const isMulti = Array.isArray(currentQuestion.correctAnswer);
                const isCorrectAnswer = isMulti 
                  ? currentQuestion.correctAnswer.includes(option)
                  : currentQuestion.correctAnswer === option;
                
                let buttonStyle = "bg-slate-700/50 border-slate-600 text-slate-200";
                
                if (isAnswered) {
                  if (isCorrectAnswer) {
                    buttonStyle = "bg-green-500/10 border-green-500 text-green-400";
                  } else if (isSelected && !isCorrectAnswer) {
                    buttonStyle = "bg-red-500/10 border-red-500 text-red-400";
                  } else {
                    buttonStyle = "bg-slate-800 border-slate-700 text-slate-500 opacity-50";
                  }
                } else {
                  if (isSelected) {
                    buttonStyle = "bg-blue-600/20 border-blue-500 text-blue-100";
                  } else {
                    buttonStyle += " hover:bg-slate-700 hover:border-slate-400 hover:text-white cursor-pointer";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionToggle(option)}
                    disabled={isAnswered}
                    className={`w-full p-3 sm:p-4 rounded-xl border-2 text-left flex justify-between items-center font-medium transition-all duration-200 text-sm sm:text-base ${buttonStyle}`}
                  >
                    <span>{option}</span>
                    {isAnswered && isCorrectAnswer && <Check size={20} className="text-green-500 flex-shrink-0 ml-2 animate-in zoom-in" />}
                    {isAnswered && isSelected && !isCorrectAnswer && <X size={20} className="text-red-500 flex-shrink-0 ml-2 animate-in zoom-in" />}
                    {!isAnswered && isSelected && <Check size={20} className="text-blue-500 flex-shrink-0 ml-2 animate-in zoom-in" />}
                  </button>
                );
              })
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end animate-in fade-in duration-300">
            {!isAnswered && selectedAnswers.length > 0 && (
              <button
                onClick={handleCheckAnswer}
                className="flex items-center justify-center gap-2 bg-slate-600 hover:bg-slate-500 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg w-full sm:w-auto"
              >
                Check Answer
              </button>
            )}
            
            {isAnswered && (
              <button
                onClick={handleNextQuestion}
                className={`flex items-center justify-center gap-2 bg-gradient-to-r ${activeCourse.gradient} text-white px-6 py-3 rounded-xl font-semibold transition-all hover:opacity-90 shadow-lg w-full sm:w-auto`}
              >
                {currentQuestionIndex + 1 === activeCourse.questions.length ? 'Finish Course' : 'Next Question'}
                <ArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const totalQuestions = activeCourse.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    let message = "Good effort! Keep studying.";
    if (percentage === 100) message = "Perfect! You've mastered this subject.";
    else if (percentage >= 80) message = "Excellent work!";
    else if (percentage >= 60) message = "Solid performance. A little more review will help!";

    return (
      <div className="p-6 sm:p-10 text-center animate-in zoom-in-95 duration-500">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${activeCourse.gradient} blur-xl opacity-30 rounded-full animate-pulse`}></div>
            <div className={`bg-gradient-to-br ${activeCourse.gradient} p-5 rounded-full relative shadow-xl`}>
              <Trophy size={48} className="text-white" />
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{activeCourse.title} Complete!</h2>
        <p className="text-slate-400 mb-8">{message}</p>
        
        <div className="bg-slate-700/30 rounded-2xl p-6 mb-8 border border-slate-600/50 backdrop-blur-sm">
          <div className={`text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${activeCourse.gradient} mb-2`}>
            {score} <span className="text-2xl text-slate-500">/ {totalQuestions}</span>
          </div>
          <p className="text-slate-300 font-medium text-sm sm:text-base">
            You scored {percentage}%
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleRestartQuiz}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-5 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg border border-slate-600"
          >
            <RotateCcw size={18} />
            Retry Course
          </button>
          <button
            onClick={handleReturnToDashboard}
            className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${activeCourse.gradient} text-white px-5 py-3.5 rounded-xl font-semibold transition-all hover:opacity-90 shadow-lg`}
          >
            <Home size={18} />
            Dashboard
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 font-sans text-slate-100">
      <div className="bg-slate-800 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-700 flex flex-col max-h-[90vh]">
        
        {/* Dynamic Header */}
        <div className="bg-slate-800/95 backdrop-blur-md p-4 sm:p-5 text-center border-b border-slate-700/50 flex items-center justify-between sticky top-0 z-10">
          
          {/* Left: Back Button or Spacer */}
          <div className="w-10">
            {currentScreen !== 'dashboard' && (
              <button 
                onClick={handleReturnToDashboard}
                className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Back to Dashboard"
              >
                <ChevronLeft size={20} />
              </button>
            )}
          </div>
          
          {/* Center: Title & Icon */}
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${currentScreen !== 'dashboard' ? `bg-gradient-to-br ${activeCourse?.gradient || 'from-blue-500 to-blue-600'}` : 'bg-blue-600'}`}>
              <BookOpen size={20} className="text-white" />
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-white tracking-wide">
              {currentScreen === 'dashboard' ? 'Student Portal' : activeCourse?.title}
            </h1>
          </div>
          
          {/* Right: Spacer to maintain centering */}
          <div className="w-10"></div>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto custom-scrollbar">
          {currentScreen === 'dashboard' && renderDashboard()}
          {currentScreen === 'quiz' && renderQuiz()}
          {currentScreen === 'results' && renderResults()}
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-6 flex items-center gap-3 text-slate-400 animate-in fade-in duration-700 delay-300 fill-mode-both">
        <img 
          src="https://i.imgur.com/L86Fp4I.jpeg" 
          alt="s_afful" 
          className="w-8 h-8 rounded-full border border-slate-600 shadow-md object-cover"
        />
        <span className="font-semibold tracking-wider text-sm">s_afful</span>
      </footer>

    </div>
  );
}