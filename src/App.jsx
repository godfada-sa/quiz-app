import React, { useState } from 'react';
import { 
  BrainCircuit, Trophy, ArrowRight, RotateCcw, 
  Check, X, Home, Globe, 
  Database, Cpu, Code, BookOpen, ChevronLeft, AlertCircle
} from 'lucide-react';

// Data structure containing courses and their specific questions
const courseData = {
  web_tech: {
    id: 'web_tech',
    title: "Web Technology",
    description: "HTML Forms, CSS Layouts, Responsive Design & XML",
    icon: Globe,
    gradient: "from-cyan-500 to-blue-600",
    isCompleted: true,
    questions: [
      {
        type: "mcq",
        question: "Which of the following best describes how the Internet fundamentally works?",
        options: ["A single massive central computer", "A global network of interconnected computer networks using TCP/IP", "A local software application for browsing", "A satellite broadcasting system"],
        correctAnswer: "A global network of interconnected computer networks using TCP/IP"
      },
      {
        type: "text",
        question: "Fill in the blank. HTTP stands for Hypertext Transfer ________.",
        correctAnswer: ["Protocol", "protocol"]
      },
      {
        type: "mcq",
        question: "What is the primary function of DNS (Domain Name System) on the internet?",
        options: ["To style web pages", "To translate human-readable domain names into IP addresses", "To encrypt passwords", "To run server-side scripts"],
        correctAnswer: "To translate human-readable domain names into IP addresses"
      },
      {
        type: "mcq",
        question: "Which of the following is a standard piece of software found in a Web Programmer's Toolbox?",
        options: ["Microsoft Word", "A code editor like VS Code", "Adobe Premiere Pro", "A 3D modeling engine"],
        correctAnswer: "A code editor like VS Code"
      },
      {
        type: "text",
        question: "Fill in the blank. A software application used to access and display websites is called a web ________.",
        correctAnswer: ["browser", "Browser"]
      },
      {
        type: "mcq",
        question: "In HTML forms, what does the 'action' attribute do?",
        options: ["Styles the form button", "Specifies where to send the form-data when a form is submitted", "Validates the user input", "Hides the form from the user"],
        correctAnswer: "Specifies where to send the form-data when a form is submitted"
      },
      {
        type: "mcq",
        question: "Which form method appends the form data to the URL, making it visible to everyone?",
        options: ["POST", "GET", "SEND", "URL"],
        correctAnswer: "GET"
      },
      {
        type: "text",
        question: "Fill in the blank to create a standard single-line text input field: <input type=\"____\">",
        correctAnswer: ["text", "TEXT"]
      },
      {
        type: "mcq",
        question: "Which HTML input type defines a field where characters are masked (shown as asterisks or dots)?",
        options: ["type=\"hidden\"", "type=\"secret\"", "type=\"password\"", "type=\"mask\""],
        correctAnswer: "type=\"password\""
      },
      {
        type: "mcq",
        question: "Which input type defines a button for submitting form data to a form-handler?",
        options: ["type=\"button\"", "type=\"submit\"", "type=\"send\"", "type=\"action\""],
        correctAnswer: "type=\"submit\""
      },
      {
        type: "text",
        question: "Fill in the blank. The ________ attribute specifies a short hint that describes the expected value of an input field.",
        correctAnswer: ["placeholder", "Placeholder"]
      },
      {
        type: "mcq",
        question: "What does the 'required' attribute do when added to an HTML input tag?",
        options: ["It makes the input field larger", "It specifies that an input field must be filled out before submitting the form", "It requires the user to log in", "It highlights the field in red"],
        correctAnswer: "It specifies that an input field must be filled out before submitting the form"
      },
      {
        type: "mcq",
        question: "Which HTML tag represents the most important (largest) heading?",
        options: ["<header>", "<head>", "<h1>", "<h6>"],
        correctAnswer: "<h1>"
      },
      {
        type: "text",
        question: "Fill in the blank. To create a hyperlink in HTML, you use the ________ tag.",
        correctAnswer: ["a", "A", "<a>"]
      },
      {
        type: "mcq",
        question: "Which attribute provides alternative text for an image, if the image cannot be displayed?",
        options: ["title", "src", "alt", "href"],
        correctAnswer: "alt"
      },
      {
        type: "mcq",
        question: "Which attribute is used to specify the destination address of a hyperlink?",
        options: ["src", "link", "url", "href"],
        correctAnswer: "href"
      },
      {
        type: "text",
        question: "Fill in the blank to specify the image file path: <img ____=\"image.jpg\">",
        correctAnswer: ["src", "SRC"]
      },
      {
        type: "mcq",
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
      },
      {
        type: "mcq",
        question: "What are the three common ways to insert CSS into an HTML document?",
        options: ["Top, Bottom, Middle", "Inline, Internal, External", "Local, Global, Universal", "Primary, Secondary, Tertiary"],
        correctAnswer: "Inline, Internal, External"
      },
      {
        type: "text",
        question: "Fill in the blank. ________ CSS is used to define styles for a single HTML page inside the <head> section.",
        correctAnswer: ["Internal", "internal"]
      },
      {
        type: "mcq",
        question: "Which type of CSS is applied directly to a single HTML element using the 'style' attribute?",
        options: ["Inline CSS", "Internal CSS", "External CSS", "Imported CSS"],
        correctAnswer: "Inline CSS"
      },
      {
        type: "mcq",
        question: "External CSS files should ideally be saved with which file extension?",
        options: [".html", ".css", ".style", ".js"],
        correctAnswer: ".css"
      },
      {
        type: "text",
        question: "Fill in the blank. To connect an external CSS file, you use the <____> tag in the HTML head.",
        correctAnswer: ["link", "LINK"]
      },
      {
        type: "mcq",
        question: "The CSS Box Model is fundamentally composed of four areas. They are Margins, Borders, Padding, and...?",
        options: ["Spacing", "Content", "Shadow", "Outline"],
        correctAnswer: "Content"
      },
      {
        type: "mcq",
        question: "In the CSS Box Model, which property clears the space directly around the content (inside the border)?",
        options: ["Margin", "Padding", "Spacing", "Float"],
        correctAnswer: "Padding"
      },
      {
        type: "text",
        question: "Fill in the blank. In the Box Model, the ________ property clears an area outside the border (spacing between elements).",
        correctAnswer: ["margin", "Margin"]
      },
      {
        type: "mcq",
        question: "Which CSS layout property specifies if/how an element is displayed on the screen (e.g., block, inline)?",
        options: ["position", "visibility", "display", "float"],
        correctAnswer: "display"
      },
      {
        type: "mcq",
        question: "Which CSS property is used to push an element to the left or right, allowing text to wrap around it?",
        options: ["align", "float", "position", "clear"],
        correctAnswer: "float"
      },
      {
        type: "text",
        question: "Fill in the blank. In the CSS box model, the ________ goes directly between the padding and the margin.",
        correctAnswer: ["border", "Border"]
      },
      {
        type: "mcq",
        question: "Which modern CSS layout module provides a 1-dimensional layout system designed to align and distribute space among items in a row or column?",
        options: ["CSS Grid", "CSS Float", "CSS Flexbox", "CSS Position"],
        correctAnswer: "CSS Flexbox"
      },
      {
        type: "mcq",
        question: "Which modern CSS layout module excels at dividing a page into 2-dimensional major regions (rows AND columns)?",
        options: ["CSS Grid", "CSS Flexbox", "CSS Tables", "CSS Block"],
        correctAnswer: "CSS Grid"
      },
      {
        type: "mcq",
        question: "In Flexbox, which property aligns items along the main axis (e.g., horizontally in a default row)?",
        options: ["align-items", "justify-content", "flex-direction", "align-content"],
        correctAnswer: "justify-content"
      },
      {
        type: "text",
        question: "Fill in the blank to change the text color in CSS: ____: blue;",
        correctAnswer: ["color", "Color"]
      },
      {
        type: "mcq",
        question: "What is the primary goal of Responsive Web Design (RWD)?",
        options: ["To make websites load faster on servers", "To make web pages render well on a variety of devices and window or screen sizes", "To secure the website from hackers", "To ensure the site works without JavaScript"],
        correctAnswer: "To make web pages render well on a variety of devices and window or screen sizes"
      },
      {
        type: "mcq",
        question: "Why do we use the `<meta name=\"viewport\">` tag in HTML5?",
        options: ["To connect to a database", "To instruct the browser how to control the page's dimensions and scaling on mobile devices", "To load external CSS files", "To enable media queries"],
        correctAnswer: "To instruct the browser how to control the page's dimensions and scaling on mobile devices"
      },
      {
        type: "text",
        question: "Fill in the blank to complete the viewport tag: <meta name=\"____\" content=\"width=device-width, initial-scale=1.0\">",
        correctAnswer: ["viewport", "Viewport"]
      },
      {
        type: "mcq",
        question: "What CSS technique allows you to apply different style rules for different media types/devices (like phones vs desktops)?",
        options: ["CSS Grid", "Media Queries", "Bootstrap Framework", "Fluid Typography"],
        correctAnswer: "Media Queries"
      },
      {
        type: "mcq",
        question: "Which of the following is the correct syntax for a media query that targets screens 600px wide or smaller?",
        options: ["@media (max-width: 600px)", "@media screen and (min-width: 600px)", "@media max(600px)", "@media size < 600px"],
        correctAnswer: "@media (max-width: 600px)"
      },
      {
        type: "text",
        question: "Fill in the blank. In CSS, the @________ rule is used to include a block of CSS properties only if a certain condition is true.",
        correctAnswer: ["media", "Media"]
      },
      {
        type: "mcq",
        question: "Responsive web design relies heavily on using what type of units for widths?",
        options: ["Absolute units like pixels (px)", "Relative units like percentages (%) or viewport width (vw)", "Points (pt)", "Picas (pc)"],
        correctAnswer: "Relative units like percentages (%) or viewport width (vw)"
      },
      {
        type: "mcq",
        question: "What exactly is Bootstrap?",
        options: ["A backend database system", "A free front-end framework for faster and easier web development", "A JavaScript compiler", "A premium web hosting service"],
        correctAnswer: "A free front-end framework for faster and easier web development"
      },
      {
        type: "mcq",
        question: "What is a major advantage of using Bootstrap?",
        options: ["It removes the need for HTML entirely", "It provides a responsive grid system and pre-styled components out of the box", "It writes PHP code automatically", "It is the only way to make a website secure"],
        correctAnswer: "It provides a responsive grid system and pre-styled components out of the box"
      },
      {
        type: "text",
        question: "Fill in the blank. Bootstrap's responsive grid system is built on a layout of ________ columns.",
        correctAnswer: ["12", "twelve"]
      },
      {
        type: "mcq",
        question: "In Bootstrap, which class provides a responsive fixed-width container?",
        options: [".container", ".container-fluid", ".wrapper", ".box"],
        correctAnswer: ".container"
      },
      {
        type: "mcq",
        question: "In Bootstrap's grid system, columns must be placed immediately inside a...",
        options: [".grid", ".row", ".container", ".layout"],
        correctAnswer: ".row"
      },
      {
        type: "mcq",
        question: "Which Bootstrap class prefix is specifically designed to target medium devices (like tablets)?",
        options: [".col-sm-", ".col-md-", ".col-lg-", ".col-xl-"],
        correctAnswer: ".col-md-"
      },
      {
        type: "text",
        question: "Fill in the blank. To style an element as a basic Bootstrap button, you use the class: class=\"____ btn-primary\"",
        correctAnswer: ["btn", "BTN"]
      },
      {
        type: "mcq",
        question: "What does XML stand for?",
        options: ["eXtra Modern Link", "eXtensible Markup Language", "eXecutable Multiple Language", "X-Markup Language"],
        correctAnswer: "eXtensible Markup Language"
      },
      {
        type: "mcq",
        question: "What is the primary difference in purpose between HTML and XML?",
        options: ["HTML is for formatting data, XML is for displaying data", "XML was designed to carry and structure data, HTML was designed to display data", "XML replaces HTML in modern browsers", "There is no difference"],
        correctAnswer: "XML was designed to carry and structure data, HTML was designed to display data"
      },
      {
        type: "text",
        question: "Fill in the blank. Unlike HTML, XML tags are strictly case ________.",
        correctAnswer: ["sensitive", "Sensitive"]
      },
      {
        type: "mcq",
        question: "Which of the following is a strict requirement for a 'well-formed' XML document?",
        options: ["It must have a single root element containing all other elements", "It must use lowercase tags only", "It does not require closing tags", "It must use predefined HTML tags"],
        correctAnswer: "It must have a single root element containing all other elements"
      },
      {
        type: "mcq",
        question: "In XML, is it acceptable to leave a tag open (like <br> in old HTML)?",
        options: ["Yes, for certain empty elements", "No, all XML elements MUST have a closing tag", "Only if specified in the CSS", "Yes, if the browser allows it"],
        correctAnswer: "No, all XML elements MUST have a closing tag"
      },
      {
        type: "mcq",
        question: "How must attributes be formatted in XML?",
        options: ["Attribute values must always be enclosed in quotes", "Quotes are optional for numbers", "Attributes do not use equal signs", "Attributes must be written in ALL CAPS"],
        correctAnswer: "Attribute values must always be enclosed in quotes"
      },
      {
        type: "text",
        question: "Fill in the blank. DTD is used to validate XML structure. DTD stands for Document ________ Definition.",
        correctAnswer: ["Type", "type"]
      },
      {
        type: "mcq",
        question: "What is the relationship between the Internet and the World Wide Web (WWW)?",
        options: ["They are exactly the same thing", "The WWW is an information system built on top of the physical infrastructure of the Internet", "The Internet is built on top of the WWW", "The WWW is hardware, the Internet is software"],
        correctAnswer: "The WWW is an information system built on top of the physical infrastructure of the Internet"
      },
      {
        type: "mcq",
        question: "In modern browsers (Chrome, Firefox), what tool helps a programmer instantly inspect HTML/CSS and debug JavaScript?",
        options: ["Control Panel", "Developer Tools (DevTools)", "Task Manager", "Terminal"],
        correctAnswer: "Developer Tools (DevTools)"
      },
      {
        type: "text",
        question: "Fill in the blank. The unique address used to locate a specific resource on the web is called a ________.",
        correctAnswer: ["URL", "url", "Uniform Resource Locator"]
      },
      {
        type: "mcq",
        question: "In HTML forms, which attribute is essentially used as a variable name to identify the data when it is sent to the server?",
        options: ["id", "class", "name", "value"],
        correctAnswer: "name"
      },
      {
        type: "mcq",
        question: "Which CSS rule ensures that padding and borders are included in an element's total width and height, preventing layout breaks?",
        options: ["box-sizing: content-box;", "box-sizing: border-box;", "layout: fixed;", "overflow: hidden;"],
        correctAnswer: "box-sizing: border-box;"
      },
      {
        type: "text",
        question: "Fill in the blank. The ________ attribute in the <form> tag specifies the HTTP method (GET or POST) to be used.",
        correctAnswer: ["method", "Method"]
      }
    ]
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
      {
        id: 'database_alison',
        title: "Alison MCQS",
        description: "Previous Access & Relational Design Questions",
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
      {
        id: 'database_i',
        title: "Database I",
        description: "ERM, ERD, Normalization",
        questions: [
          // --- ERD & UML Notations ---
          { type: "mcq", question: "In Chen notation, what geometric shape is used to represent an entity?", options: ["Rectangle", "Diamond", "Oval", "Triangle"], correctAnswer: "Rectangle" },
          { type: "mcq", question: "In Chen notation, how is a relationship between entities typically depicted?", options: ["A dashed line", "A rectangle", "A diamond", "A double oval"], correctAnswer: "A diamond" },
          { type: "mcq", question: "In Crow's Foot notation, what does a circle (O) on the relationship line represent?", options: ["Mandatory cardinality", "Optional cardinality (zero)", "Many cardinality", "A foreign key"], correctAnswer: "Optional cardinality (zero)" },
          { type: "mcq", question: "In Crow's Foot notation, a line ending with a \"crow's foot\" (three branching lines) indicates:", options: ["A one-to-one relationship", "A mandatory one relationship", "A 'many' maximum cardinality", "A weak entity"], correctAnswer: "A 'many' maximum cardinality" },
          { type: "mcq", question: "How is a multi-valued attribute represented in Chen notation?", options: ["A dashed oval", "A double oval", "A diamond", "An underlined text"], correctAnswer: "A double oval" },
          { type: "mcq", question: "In UML class diagrams used for database modeling, what concept replaces the \"Entity\" used in standard ER diagrams?", options: ["Class", "Method", "Actor", "Use Case"], correctAnswer: "Class" },
          { type: "mcq", question: "In UML diagrams, how is relationship cardinality (multiplicity) typically expressed?", options: ["Using crow's feet symbols", "Using geometric shapes", "Using numbers like 1..* or 0..1", "Using shaded diamonds"], correctAnswer: "Using numbers like 1..* or 0..1" },
          { type: "mcq", question: "In Chen notation, a weak entity is specifically depicted using:", options: ["A dashed rectangle", "A double rectangle", "A shaded rectangle", "An oval inside a rectangle"], correctAnswer: "A double rectangle" },
          { type: "mcq", question: "In Crow's Foot notation, a vertical dash (|) crossed with another vertical dash (|) on a relationship line indicates:", options: ["Zero or Many", "Exactly One (Mandatory One)", "One or Many", "Zero or One"], correctAnswer: "Exactly One (Mandatory One)" },
          { type: "mcq", question: "Which of the following notations is most heavily favored by relational database designers for its compact visualization of cardinalities?", options: ["Chen notation", "Crow's Foot notation", "Flowchart notation", "Network notation"], correctAnswer: "Crow's Foot notation" },

          // --- True / False Mix ---
          { type: "mcq", question: "Within the database environment, a data model represents data structures to support a specific problem domain.", options: ["True", "False"], correctAnswer: "True" },
          { type: "mcq", question: "In data models, an entity is a person, place, thing, or event about which data will be collected.", options: ["True", "False"], correctAnswer: "True" },
          { type: "mcq", question: "The logical view of a database reminds us of the simple file concept of data storage.", options: ["True", "False"], correctAnswer: "True" },
          { type: "mcq", question: "A table can be viewed as a persistent representation of a logical relation.", options: ["True", "False"], correctAnswer: "True" },
          { type: "mcq", question: "A disadvantage of the relational DBMS is its inability to hide relational complexity from users.", options: ["True", "False"], correctAnswer: "False" },
          { type: "mcq", question: "Each row in a relational table is known as an entity instance.", options: ["True", "False"], correctAnswer: "True" },
          { type: "mcq", question: "The order of rows and columns is important to the DBMS.", options: ["True", "False"], correctAnswer: "False" },
          { type: "mcq", question: "Character data can contain any character intended for mathematical manipulation.", options: ["True", "False"], correctAnswer: "False" },
          { type: "mcq", question: "In Chen notation, entities and relationships must be oriented horizontally.", options: ["True", "False"], correctAnswer: "False" },
          { type: "mcq", question: "Each table in a relational database must have a primary key.", options: ["True", "False"], correctAnswer: "True" },
          { type: "mcq", question: "Null values represent missing or unknown data.", options: ["True", "False"], correctAnswer: "True" },
          { type: "mcq", question: "A table must have at least one attribute.", options: ["True", "False"], correctAnswer: "True" },
          { type: "mcq", question: "Duplicate rows are allowed in a relational table.", options: ["True", "False"], correctAnswer: "False" },
          { type: "mcq", question: "Attribute values must be atomic (indivisible).", options: ["True", "False"], correctAnswer: "True" },
          { type: "mcq", question: "Tables in a relational database are independent from each other.", options: ["True", "False"], correctAnswer: "True" },

          // --- Keys & Attributes ---
          { type: "mcq", question: "A table can have only one:", options: ["Secondary key", "Alternate key", "Unique key", "Primary key"], correctAnswer: "Primary key" },
          { type: "mcq", question: "If a table has more than one set of attributes that could be chosen as the key, they are called:", options: ["Foreign key", "Integrity key", "Relationship", "Candidate key"], correctAnswer: "Candidate key" },
          { type: "mcq", question: "The candidate key that you choose to identify each row uniquely is called ____________", options: ["Alternate Key", "Primary Key", "Foreign Key", "None of the above"], correctAnswer: "Primary Key" },
          { type: "mcq", question: "A key that can uniquely identify a record but is not selected as the primary key is called a(n) _____.", options: ["Candidate key", "Foreign key", "Surrogate key", "Composite key"], correctAnswer: "Candidate key" },
          { type: "mcq", question: "A _____ key is used strictly for identification purposes.", options: ["Secondary key", "Foreign key", "Primary key", "Composite key"], correctAnswer: "Secondary key" },
          { type: "mcq", question: "A key that automatically generates numeric values is called a(n) _____.", options: ["Foreign key", "Composite key", "Natural key", "Surrogate key"], correctAnswer: "Surrogate key" },
          { type: "mcq", question: "A _____ is an attribute or set of attributes that uniquely identifies each row.", options: ["Foreign key", "Candidate key", "Alternate key", "Primary key"], correctAnswer: "Primary key" },
          { type: "mcq", question: "A _____ is a key that uniquely identifies records in another table.", options: ["Primary key", "Alternate key", "Foreign key", "Composite key"], correctAnswer: "Foreign key" },
          { type: "mcq", question: "A _____ key is composed of more than one attribute.", options: ["Simple key", "Composite key", "Foreign key", "Surrogate key"], correctAnswer: "Composite key" },

          // --- Models & Concepts ---
          { type: "mcq", question: "The _____ model was developed to allow designers to use graphical tools to examine structures.", options: ["Relational model", "Entity relationship model", "Hierarchical model", "Network model"], correctAnswer: "Entity relationship model" },
          { type: "mcq", question: "The _____ data model is considered a semantic data model.", options: ["Relational model", "Hierarchical model", "Object-oriented model", "Network model"], correctAnswer: "Object-oriented model" },
          { type: "mcq", question: "The _____ data model uses inheritance.", options: ["Object-oriented model", "Relational model", "Entity relationship model", "Network model"], correctAnswer: "Object-oriented model" },
          { type: "mcq", question: "A(n) _____ is a brief description of a policy, procedure, or principle in an organization.", options: ["Constraint", "Entity", "Business rule", "Schema"], correctAnswer: "Business rule" },
          { type: "mcq", question: "A(n) _____ is a collection of similar objects with shared structure and behavior.", options: ["Entity", "Class", "Table", "Domain"], correctAnswer: "Class" },
          { type: "mcq", question: "_____ is a language based on object-oriented concepts used to graphically model a system.", options: ["UML", "SQL", "DDL", "XML"], correctAnswer: "UML" },

          // --- Relations and Fundamentals ---
          { type: "mcq", question: "In RDBMS, Data is presented as a collection of ____________", options: ["Table", "Attributes", "Relations", "Entities"], correctAnswer: "Table" },
          { type: "mcq", question: "A ____________ normal form normalization will be needed where all attributes in a relation tuple are not functionally dependent only on the key attribute.", options: ["First", "Second", "Third", "Fourth"], correctAnswer: "Second" },
          { type: "mcq", question: "If an attribute of a composite key is dependent on an attribute of the other composite key, a normalization called ____________ is needed.", options: ["DKNF", "BCNF", "Fourth", "Third"], correctAnswer: "BCNF" },
          { type: "mcq", question: "_____ defines the structure of a relation which consists of a fixed set of attribute-domain pairs.", options: ["Instance", "Schema", "Program", "Super Key"], correctAnswer: "Schema" },
          { type: "mcq", question: "The ____________ operator preserves unmatched rows of the relations being joined.", options: ["Inner join", "Outer join", "Union", "Union join"], correctAnswer: "Outer join" },
          { type: "mcq", question: "In a relational schema, each tuple is divided into fields called", options: ["Relations", "Domains", "Queries", "All of the above"], correctAnswer: "Domains" },
          { type: "mcq", question: "In an ER model, ____________ is described in the database by storing its data.", options: ["Entity", "Attribute", "Relationship", "Notation"], correctAnswer: "Entity" },
          { type: "mcq", question: "DFD stands for", options: ["Data Flow Document", "Data File Diagram", "Data Flow Diagram", "None of the above"], correctAnswer: "Data Flow Diagram" },
          { type: "mcq", question: "A top-to-bottom relationship among the items in a database is established by a", options: ["Hierarchical schema", "Network schema", "Relational Schema", "All of the above"], correctAnswer: "Hierarchical schema" },
          { type: "mcq", question: "Which of the following is not a characteristic of a relational database model?", options: ["Table", "Tree-like structure", "Complex logical relationship", "Records"], correctAnswer: "Tree-like structure" },
          { type: "mcq", question: "____________ is used to determine whether a table contains duplicate rows.", options: ["Unique predicate", "Like Predicate", "Null predicate", "In predicate"], correctAnswer: "Unique predicate" },
          { type: "mcq", question: "DCL stands for", options: ["Data Control Language", "Data Console Language", "Data Console Level", "Data Control Level"], correctAnswer: "Data Control Language" },
          { type: "mcq", question: "____________ is the process of organizing data into related tables.", options: ["Normalization", "Generalization", "Specialization", "None of the above"], correctAnswer: "Normalization" },
          { type: "mcq", question: "A ____________ does not have a distinguishing attribute of its own and mostly are dependent entities, which are part of some another entity.", options: ["Weak entity", "Strong entity", "Non attributes entity", "Dependent entity"], correctAnswer: "Weak entity" },
          { type: "mcq", question: "____________ is the preferred method for enforcing data integrity.", options: ["Constraints", "Stored Procedure", "Triggers", "Cursors"], correctAnswer: "Constraints" },
          { type: "mcq", question: "The number of tuples in a relation is called its ____________ While the number of attributes in a relation is called its ____________", options: ["Degree, Cardinality", "Cardinality, Degree", "Rows, Columns", "Columns, Rows"], correctAnswer: "Cardinality, Degree" },

          // --- Entities & Attributes ---
          { type: "mcq", question: "A(n) _____ is anything about which data are collected and stored.", options: ["Attribute", "Entity", "Relationship", "Constraint"], correctAnswer: "Entity" },
          { type: "mcq", question: "A(n) _____ represents a particular type of object in the real world.", options: ["Entity", "Attribute", "Database", "Schema"], correctAnswer: "Entity" },
          { type: "mcq", question: "A(n) _____ is the equivalent of a field in a file system.", options: ["Record", "Table", "Entity", "Attribute"], correctAnswer: "Attribute" },
          { type: "mcq", question: "_____ help ensure data integrity.", options: ["Entities", "Constraints", "Attributes", "Views"], correctAnswer: "Constraints" },
          { type: "mcq", question: "Students and classes have a _____ relationship.", options: ["One-to-one", "One-to-many", "Many-to-many", "None"], correctAnswer: "Many-to-many" },
          { type: "mcq", question: "_____ are normally expressed in the form of rules.", options: ["Constraints", "Entities", "Relationships", "Attributes"], correctAnswer: "Constraints" },

          // --- More Relational Model specifics ---
          { type: "mcq", question: "A relational database stores data in the form of _____.", options: ["Trees", "Graphs", "Tables", "Objects"], correctAnswer: "Tables" },
          { type: "mcq", question: "Tables are linked through _____.", options: ["Primary keys", "Attributes", "Domains", "Foreign keys"], correctAnswer: "Foreign keys" },
          { type: "mcq", question: "A relational database ensures data integrity through _____.", options: ["Tables", "Constraints", "Relationships", "Keys"], correctAnswer: "Constraints" },
          { type: "mcq", question: "The relational model organizes data logically using _____.", options: ["Relations", "Nodes", "Pointers", "Documents"], correctAnswer: "Relations" },
          { type: "mcq", question: "A row in a table represents a single _____.", options: ["Field", "Table", "Database", "Record"], correctAnswer: "Record" },
          { type: "mcq", question: "A column in a table represents a single _____.", options: ["Record", "Tuple", "Entity", "Attribute"], correctAnswer: "Attribute" },
          { type: "mcq", question: "The relational model uses _____ to uniquely identify rows.", options: ["Indexes", "Keys", "Constraints", "Relationships"], correctAnswer: "Keys" },
          { type: "mcq", question: "A relation is equivalent to a _____.", options: ["Row", "Column", "Database", "Table"], correctAnswer: "Table" },
          { type: "mcq", question: "A relational database allows relationships between tables using _____.", options: ["Foreign keys", "Primary keys", "Composite keys", "Alternate keys"], correctAnswer: "Foreign keys" },
          { type: "mcq", question: "The relational model is based on _____.", options: ["Tree structures", "Mathematical relations", "Network graphs", "File systems"], correctAnswer: "Mathematical relations" },
          { type: "mcq", question: "The relational model simplifies database structure using _____.", options: ["Nodes", "Pointers", "Tables", "Arrays"], correctAnswer: "Tables" },
          { type: "mcq", question: "Each relation must have a _____.", options: ["Foreign key", "Composite key", "Primary key", "Secondary key"], correctAnswer: "Primary key" },
          { type: "mcq", question: "Keys help maintain _____.", options: ["Data integrity", "Data redundancy", "Data anomalies", "Data inconsistencies"], correctAnswer: "Data integrity" },
          { type: "mcq", question: "Attributes define the _____ of an entity.", options: ["Properties", "Relationships", "Keys", "Tuples"], correctAnswer: "Properties" },
          { type: "mcq", question: "Relationships between tables are implemented using _____.", options: ["Primary keys", "Foreign keys", "Indexes", "Domains"], correctAnswer: "Foreign keys" },
          { type: "mcq", question: "A table represents a collection of _____.", options: ["Related data", "Unrelated data", "Programs", "Functions"], correctAnswer: "Related data" },
          { type: "mcq", question: "The relational database model focuses on _____.", options: ["Physical data storage", "Hardware limitations", "Logical data structure", "Network topology"], correctAnswer: "Logical data structure" },
          { type: "mcq", question: "Each attribute must contain _____.", options: ["Multiple values", "Atomic values", "Lists", "Arrays"], correctAnswer: "Atomic values" },
          { type: "mcq", question: "The relational model is widely used because it is _____.", options: ["Complex and rigid", "Hardware-dependent", "Simple and flexible", "Slow and secure"], correctAnswer: "Simple and flexible" },
          { type: "mcq", question: "The relational model organizes data into _____.", options: ["Hierarchies", "Relations (tables)", "Networks", "Objects"], correctAnswer: "Relations (tables)" },
          { type: "mcq", question: "In the relational model, a table is also known as a(n) _____.", options: ["Tuple", "Attribute", "Relation", "Domain"], correctAnswer: "Relation" },
          { type: "mcq", question: "Each row in a relational table is called a(n) _____.", options: ["Tuple", "Attribute", "Domain", "Key"], correctAnswer: "Tuple" },
          { type: "mcq", question: "Each column in a relational table represents a(n) _____.", options: ["Tuple", "Relation", "Domain", "Attribute"], correctAnswer: "Attribute" },
          { type: "mcq", question: "The domain of an attribute refers to _____.", options: ["The name of the column", "The primary key", "The relationship", "The set of possible values for the attribute"], correctAnswer: "The set of possible values for the attribute" }
        ]
      }
    ]
  },
  comp_arch: {
    id: 'comp_arch',
    title: "Computer Architecture",
    description: "Instruction Cycle, Pipelining, Hazards, & Interrupts",
    icon: Cpu,
    gradient: "from-purple-500 to-indigo-600",
    isCompleted: true,
    questions: [
      {
        type: "mcq",
        question: "During the instruction cycle, the Program Counter (PC) is updated:",
        options: ["During execution", "During instruction fetch", "During write back", "During interrupt handling"],
        correctAnswer: "During instruction fetch"
      },
      {
        type: "mcq",
        question: "Which component sends control signals to coordinate CPU operations?",
        options: ["ALU", "Control Unit", "Cache", "MAR"],
        correctAnswer: "Control Unit"
      },
      {
        type: "mcq",
        question: "Which register temporarily stores the instruction fetched from memory?",
        options: ["MAR", "PC", "IR", "MDR"],
        correctAnswer: "IR"
      },
      {
        type: "mcq",
        question: "If the PC contains address 400, the next instruction fetched will be from:",
        options: ["Register 400", "Memory location 400", "Cache location 400", "ALU register 400"],
        correctAnswer: "Memory location 400"
      },
      {
        type: "mcq",
        question: "The Decode stage mainly involves:",
        options: ["Executing arithmetic operations", "Interpreting opcode and operands", "Writing data to memory", "Clearing registers"],
        correctAnswer: "Interpreting opcode and operands"
      },
      {
        type: "mcq",
        question: "Which register holds data read from memory before execution?",
        options: ["MAR", "MDR", "IR", "PC"],
        correctAnswer: "MDR"
      },
      {
        type: "mcq",
        question: "The instruction cycle repeats until:",
        options: ["Memory becomes full", "CPU overheats", "Program execution finishes", "Interrupt occurs"],
        correctAnswer: "Program execution finishes"
      },
      {
        type: "mcq",
        question: "The instruction cycle is controlled primarily by:",
        options: ["ALU", "Control Unit", "Cache controller", "Bus controller"],
        correctAnswer: "Control Unit"
      },
      {
        type: "mcq",
        question: "Which bus carries memory addresses?",
        options: ["Data bus", "Control bus", "Address bus", "Register bus"],
        correctAnswer: "Address bus"
      },
      {
        type: "mcq",
        question: "The CPU fetches instructions sequentially unless modified by:",
        options: ["Arithmetic instruction", "Branch instruction", "Load instruction", "Store instruction"],
        correctAnswer: "Branch instruction"
      },
      {
        type: "mcq",
        question: "Which register is directly connected to the address bus?",
        options: ["MDR", "MAR", "IR", "PC"],
        correctAnswer: "MAR"
      },
      {
        type: "mcq",
        question: "Which register interacts with the data bus?",
        options: ["MDR", "PC", "IR", "MAR"],
        correctAnswer: "MDR"
      },
      {
        type: "mcq",
        question: "The PC is incremented:",
        options: ["Before instruction fetch", "After instruction fetch", "During decode", "During interrupt"],
        correctAnswer: "After instruction fetch"
      },
      {
        type: "mcq",
        question: "Which register contains status flags such as zero and carry?",
        options: ["Status register", "PC", "MAR", "IR"],
        correctAnswer: "Status register"
      },
      {
        type: "mcq",
        question: "User-visible registers mainly support:",
        options: ["Interrupt control", "Program execution", "Memory mapping", "Pipeline control"],
        correctAnswer: "Program execution"
      },
      {
        type: "mcq",
        question: "Control registers are primarily used by:",
        options: ["Application programs", "CPU internal control logic", "Keyboard devices", "Cache controllers"],
        correctAnswer: "CPU internal control logic"
      },
      {
        type: "mcq",
        question: "Which register is involved in both read and write memory operations?",
        options: ["MAR", "MDR", "PC", "IR"],
        correctAnswer: "MDR"
      },
      {
        type: "mcq",
        question: "Which register stores the address of the instruction currently executing?",
        options: ["IR", "PC", "MAR", "MDR"],
        correctAnswer: "PC"
      },
      {
        type: "mcq",
        question: "Which register holds the opcode of an instruction?",
        options: ["MAR", "IR", "PC", "MDR"],
        correctAnswer: "IR"
      },
      {
        type: "mcq",
        question: "The register that stores temporary results of memory operations is:",
        options: ["MDR", "MAR", "PC", "IR"],
        correctAnswer: "MDR"
      },
      {
        type: "mcq",
        question: "The main goal of pipelining is to increase:",
        options: ["Instruction latency", "Instruction throughput", "Memory capacity", "Disk bandwidth"],
        correctAnswer: "Instruction throughput"
      },
      {
        type: "mcq",
        question: "Pipeline efficiency decreases when:",
        options: ["Clock speed increases", "Hazards occur", "Memory size increases", "Registers increase"],
        correctAnswer: "Hazards occur"
      },
      {
        type: "mcq",
        question: "Which of the following causes a pipeline stall?",
        options: ["Hazard", "Cache", "Register", "ALU"],
        correctAnswer: "Hazard"
      },
      {
        type: "mcq",
        question: "If a pipeline has 5 stages, ideally one instruction completes every:",
        options: ["5 cycles", "1 cycle", "10 cycles", "2 cycles"],
        correctAnswer: "1 cycle"
      },
      {
        type: "mcq",
        question: "The pipeline latency equals:",
        options: ["Number of instructions", "Number of pipeline stages", "Clock frequency", "Cache size"],
        correctAnswer: "Number of pipeline stages"
      },
      {
        type: "mcq",
        question: "Which stage performs arithmetic operations?",
        options: ["Decode", "Execute", "Memory access", "Fetch"],
        correctAnswer: "Execute"
      },
      {
        type: "mcq",
        question: "Pipeline performance improves when:",
        options: ["Hazards increase", "Instruction independence increases", "Memory decreases", "Registers decrease"],
        correctAnswer: "Instruction independence increases"
      },
      {
        type: "mcq",
        question: "An expanded pipeline divides stages into:",
        options: ["Larger steps", "Smaller steps", "Random steps", "No steps"],
        correctAnswer: "Smaller steps"
      },
      {
        type: "mcq",
        question: "Pipeline hazards reduce:",
        options: ["Throughput", "Memory capacity", "Register speed", "Disk capacity"],
        correctAnswer: "Throughput"
      },
      {
        type: "mcq",
        question: "Pipeline overlap means:",
        options: ["Instructions execute sequentially", "Only one instruction executes", "Instructions execute simultaneously in stages", "Instructions are ignored"],
        correctAnswer: "Instructions execute simultaneously in stages"
      },
      {
        type: "mcq",
        question: "RAW hazards occur when:",
        options: ["Two instructions write same register", "A later instruction writes before read", "A later instruction reads a value before it is written", "Two instructions fetch memory"],
        correctAnswer: "A later instruction reads a value before it is written"
      },
      {
        type: "mcq",
        question: "WAR hazards occur when:",
        options: ["Read occurs twice", "Write occurs before read", "Read occurs before write", "Write occurs twice"],
        correctAnswer: "Write occurs before read"
      },
      {
        type: "mcq",
        question: "WAW hazards occur when:",
        options: ["Memory fails", "Two reads occur", "Cache fails", "Two writes occur in wrong order"],
        correctAnswer: "Two writes occur in wrong order"
      },
      {
        type: "mcq",
        question: "Which hazard type represents true dependency?",
        options: ["WAR", "Structural", "WAW", "RAW"],
        correctAnswer: "RAW"
      },
      {
        type: "mcq",
        question: "Register renaming helps resolve:",
        options: ["RAW hazards", "WAW and WAR hazards", "Interrupts", "Branch hazards"],
        correctAnswer: "WAW and WAR hazards"
      },
      {
        type: "mcq",
        question: "Data forwarding reduces:",
        options: ["Structural hazards", "Interrupts", "Data hazards", "Exceptions"],
        correctAnswer: "Data hazards"
      },
      {
        type: "mcq",
        question: "Data hazards mainly occur when:",
        options: ["Memory is full", "Instructions share data dependencies", "Registers overflow", "Cache misses"],
        correctAnswer: "Instructions share data dependencies"
      },
      {
        type: "mcq",
        question: "Pipeline interlocking is used to:",
        options: ["Increase cache size", "Reduce registers", "Prevent hazards", "Increase interrupts"],
        correctAnswer: "Prevent hazards"
      },
      {
        type: "mcq",
        question: "Forwarding sends data directly from:",
        options: ["Memory to disk", "Cache to disk", "ALU output to next stage", "Register to keyboard"],
        correctAnswer: "ALU output to next stage"
      },
      {
        type: "mcq",
        question: "RAW hazards are the most common in:",
        options: ["Memory modules", "Pipelined processors", "Disk controllers", "Interrupt controllers"],
        correctAnswer: "Pipelined processors"
      },
      {
        type: "mcq",
        question: "Branch hazards arise from:",
        options: ["Data dependency", "Memory dependency", "Disk dependency", "Control dependency"],
        correctAnswer: "Control dependency"
      },
      {
        type: "mcq",
        question: "A branch instruction changes:",
        options: ["Data register", "MAR value", "PC value", "MDR value"],
        correctAnswer: "PC value"
      },
      {
        type: "mcq",
        question: "Branch prediction attempts to:",
        options: ["Predict instruction results", "Predict register values", "Predict next instruction path", "Predict memory access"],
        correctAnswer: "Predict next instruction path"
      },
      {
        type: "mcq",
        question: "Branch penalty refers to:",
        options: ["Register overflow", "Memory failure", "Delay caused by branch instructions", "Cache miss"],
        correctAnswer: "Delay caused by branch instructions"
      },
      {
        type: "mcq",
        question: "Which method executes the instruction immediately after a branch?",
        options: ["Branch stall", "Forwarding", "Delayed branch", "Prediction"],
        correctAnswer: "Delayed branch"
      },
      {
        type: "mcq",
        question: "Branch Target Buffer stores:",
        options: ["Memory blocks", "Previous branch targets", "Registers", "Interrupts"],
        correctAnswer: "Previous branch targets"
      },
      {
        type: "mcq",
        question: "Speculative execution works with:",
        options: ["Interrupts", "Exceptions", "Cache", "Branch prediction"],
        correctAnswer: "Branch prediction"
      },
      {
        type: "mcq",
        question: "Control hazards mainly affect:",
        options: ["Write-back stage", "Instruction fetch stage", "Memory stage", "Decode stage"],
        correctAnswer: "Instruction fetch stage"
      },
      {
        type: "mcq",
        question: "Branch misprediction results in:",
        options: ["Memory reset", "Cache clear", "Pipeline flush", "Register reset"],
        correctAnswer: "Pipeline flush"
      },
      {
        type: "mcq",
        question: "Flushing a pipeline means:",
        options: ["Clearing registers", "Clearing incorrect instructions", "Clearing memory", "Clearing disk"],
        correctAnswer: "Clearing incorrect instructions"
      },
      {
        type: "mcq",
        question: "Static prediction does NOT rely on:",
        options: ["Compiler hints", "Fixed rules", "Instruction structure", "Runtime information"],
        correctAnswer: "Runtime information"
      },
      {
        type: "mcq",
        question: "Dynamic prediction uses:",
        options: ["Compiler rules", "Hardware tables", "Fixed assumptions", "Manual prediction"],
        correctAnswer: "Hardware tables"
      },
      {
        type: "mcq",
        question: "Two-bit predictors are used in:",
        options: ["Static prediction", "Interrupt systems", "Dynamic branch prediction", "Cache systems"],
        correctAnswer: "Dynamic branch prediction"
      },
      {
        type: "mcq",
        question: "Branch history tables store:",
        options: ["Memory addresses", "Register values", "Past branch outcomes", "Cache lines"],
        correctAnswer: "Past branch outcomes"
      },
      {
        type: "mcq",
        question: "Dynamic predictors improve:",
        options: ["Cache size", "Accuracy of branch guesses", "Register count", "Memory capacity"],
        correctAnswer: "Accuracy of branch guesses"
      },
      {
        type: "mcq",
        question: "Static prediction is usually decided:",
        options: ["During execution", "After execution", "At compile time", "At runtime hardware"],
        correctAnswer: "At compile time"
      },
      {
        type: "mcq",
        question: "Dynamic prediction requires:",
        options: ["No hardware", "Extra hardware logic", "Only software", "Disk storage"],
        correctAnswer: "Extra hardware logic"
      },
      {
        type: "mcq",
        question: "Branch prediction reduces:",
        options: ["Data hazards", "Structural hazards", "Control hazards", "Memory hazards"],
        correctAnswer: "Control hazards"
      },
      {
        type: "mcq",
        question: "Dynamic prediction adapts to:",
        options: ["Memory size", "Disk usage", "Program behavior", "Register count"],
        correctAnswer: "Program behavior"
      },
      {
        type: "mcq",
        question: "Prediction accuracy directly affects:",
        options: ["Memory capacity", "Pipeline performance", "Disk speed", "Register size"],
        correctAnswer: "Pipeline performance"
      },
      {
        type: "mcq",
        question: "Loop buffers store:",
        options: ["Memory data", "Interrupts", "Frequently repeated instructions", "Registers"],
        correctAnswer: "Frequently repeated instructions"
      },
      {
        type: "mcq",
        question: "Loop buffers reduce:",
        options: ["Register usage", "Instruction fetch delay", "Disk usage", "Interrupt handling"],
        correctAnswer: "Instruction fetch delay"
      },
      {
        type: "mcq",
        question: "Interrupts are generated by:",
        options: ["ALU", "Registers", "Cache", "External devices"],
        correctAnswer: "External devices"
      },
      {
        type: "mcq",
        question: "Exceptions are generated by:",
        options: ["Keyboard input", "Mouse movement", "Disk access", "CPU execution errors"],
        correctAnswer: "CPU execution errors"
      },
      {
        type: "mcq",
        question: "An interrupt causes the CPU to:",
        options: ["Shut down", "Reset memory", "Temporarily stop current program", "Clear registers"],
        correctAnswer: "Temporarily stop current program"
      },
      {
        type: "mcq",
        question: "ARM processors follow which architecture?",
        options: ["CISC", "VLIW", "RISC", "Superscalar only"],
        correctAnswer: "RISC"
      },
      {
        type: "mcq",
        question: "A key RISC principle is:",
        options: ["Complex instructions", "Simple instructions", "Variable instructions only", "Random instructions"],
        correctAnswer: "Simple instructions"
      },
      {
        type: "mcq",
        question: "Load/store architecture means:",
        options: ["All instructions access memory", "Arithmetic instructions access memory", "Only load/store access memory", "Cache handles memory"],
        correctAnswer: "Only load/store access memory"
      },
      {
        type: "mcq",
        question: "RISC processors typically have:",
        options: ["Few registers", "Many registers", "No registers", "External registers"],
        correctAnswer: "Many registers"
      },
      {
        type: "mcq",
        question: "ARM instructions are typically:",
        options: ["Variable length", "Random length", "Fixed length", "No length"],
        correctAnswer: "Fixed length"
      },
      {
        type: "mcq",
        question: "An interrupt vector table contains:",
        options: ["Memory blocks", "Addresses of interrupt handlers", "Registers", "Cache lines"],
        correctAnswer: "Addresses of interrupt handlers"
      },
      {
        type: "mcq",
        question: "Each interrupt vector corresponds to:",
        options: ["A memory block", "A register", "A pipeline stage", "A specific interrupt type"],
        correctAnswer: "A specific interrupt type"
      },
      {
        type: "mcq",
        question: "When an interrupt occurs, the CPU:",
        options: ["Clears memory", "Looks up the vector table entry", "Resets registers", "Stops execution"],
        correctAnswer: "Looks up the vector table entry"
      },
      {
        type: "mcq",
        question: "Interrupt service routines are stored in:",
        options: ["Registers", "Cache only", "Disk", "Memory"],
        correctAnswer: "Memory"
      },
      {
        type: "mcq",
        question: "After servicing an interrupt, the CPU:",
        options: ["Resets the system", "Clears registers", "Returns to the interrupted program", "Stops program"],
        correctAnswer: "Returns to the interrupted program"
      },
      {
        type: "mcq",
        question: "The interrupt vector number identifies:",
        options: ["Register index", "Interrupt handler address", "Memory block", "Cache line"],
        correctAnswer: "Interrupt handler address"
      },
      {
        type: "mcq",
        question: "The vector table enables:",
        options: ["Memory expansion", "Register expansion", "Fast interrupt handling", "Cache optimization"],
        correctAnswer: "Fast interrupt handling"
      },
      {
        type: "mcq",
        question: "Interrupt vector tables are usually stored in:",
        options: ["Disk", "Registers", "Main memory", "Cache"],
        correctAnswer: "Main memory"
      },
      {
        type: "mcq",
        question: "Interrupt handling typically saves:",
        options: ["Disk data", "CPU state", "Cache lines", "Keyboard buffer"],
        correctAnswer: "CPU state"
      },
      {
        type: "mcq",
        question: "The main advantage of interrupt vectors is:",
        options: ["Reduced memory", "Increased disk speed", "Reduced registers", "Direct jump to handler"],
        correctAnswer: "Direct jump to handler"
      }
    ]
  },
  programming: {
    id: 'programming',
    title: "Programming and Problem Solving Analysis",
    description: "C++ Operators, Loops, & Control Structures",
    icon: Code,
    gradient: "from-orange-500 to-red-600",
    isFolder: true,
    subModules: [
      {
        id: 'prog_edube',
        title: "Edube",
        description: "Edube Platform Questions",
        questions: [
          {
            type: "mcq",
            question: "What will be the output of the following program?",
            codeSnippet: `#include <iostream>
using namespace std;

int main() {
    int length1 = 12, width1 = 12;
    int length2 = 66, width2 = 45;

    int area1 = length1 * width1;
    int area2 = length2 * width2;

    if(area1 > area2)
        cout << "The first rectangle has a greater area.";
    else
        cout << "The second rectangle has a greater area.";

    return 0;
}`,
            options: ["The first rectangle has a greater area", "Both rectangles have equal area", "The second rectangle has a greater area", "Compilation error"],
            correctAnswer: "The second rectangle has a greater area"
          },
          {
            type: "mcq",
            question: "What is the output of the following code?",
            codeSnippet: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int i = 2;
    string s = "2";

    cout << s + i;
    return 0;
}`,
            options: ["4", "22", "Empty output", "Compilation error"],
            correctAnswer: "Compilation error"
          },
          {
            type: "mcq",
            question: "What is the output of the following snippet?",
            codeSnippet: `#include <iostream>
using namespace std;

int main() {
    short s = 1;
    int i = 2;
    long l = 3;
    float f = 4.4;
    double d = 6.6;

    cout << s/i + f/i + d/s;

    return 0;
}`,
            options: ["8", "8.8", "9", "7.7"],
            correctAnswer: "8.8"
          },
          {
            type: "mcq",
            question: "What will be printed by the following code?",
            codeSnippet: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "0123456789";

    cout << s.substr(3,7).substr(2).substr();

    return 0;
}`,
            options: ["3456789", "6789", "56789", "234567"],
            correctAnswer: "56789"
          },
          {
            type: "mcq",
            question: "What is the output of this program?",
            codeSnippet: `#include <iostream>
using namespace std;

int main() {
    int i = 2;
    float f = 5.8;

    f = (int)f;
    i = (float)i;

    cout << f/i;

    return 0;
}`,
            options: ["2", "2.5", "3", "5"],
            correctAnswer: "2.5"
          },
          {
            type: "mcq",
            question: "What is the result of the following code?",
            codeSnippet: `#include <iostream>

namespace SpaceA {
    int A;
}

namespace SpaceB {
    int A;
}

using namespace SpaceA, SpaceB;

int main() {
    SpaceA::A = SpaceB::A = 1;
    std::cout << A + 1;
    return 0;
}`,
            options: ["1", "2", "3", "Compilation error"],
            correctAnswer: "Compilation error"
          },
          {
            type: "mcq",
            question: "What is the output of the following snippet?",
            codeSnippet: `#include <iostream>
using namespace std;

int main() {
    int i = 2;
    float f = 4.4;

    cout << f % float(i);

    return 0;
}`,
            options: ["0.4", "2.4", "Compilation error", "4"],
            correctAnswer: "Compilation error"
          },
          {
            type: "mcq",
            question: "What will the following code output?",
            codeSnippet: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s1 = "Ab";
    string s2 = "Abc";

    cout << s1.compare(s1);

    return 0;
}`,
            options: ["-1", "1", "0", "Compilation error"],
            correctAnswer: "0"
          },
          {
            type: "mcq",
            question: "What is the output of the following program?",
            codeSnippet: `#include <iostream>
using namespace std;

int main() {
    int *it[3];

    for(int i = 0; i < 3; i++) {
        it[i] = new int[i + 1];

        for(int j = 0; j < i + 1; j++)
            it[i][j] = 10 * i + j;
    }

    cout << it[2][2];

    for(int i = 0; i < 3; i++)
        delete [] it[i];

    return 0;
}`,
            options: ["20", "21", "22", "23"],
            correctAnswer: "22"
          },
          {
            type: "mcq",
            question: "What will be printed by this program?",
            codeSnippet: `#include <iostream>
using namespace std;

namespace S1 {
    int A = 1;
}

namespace S2 {
    int A = 2;
}

int main() {

    {
        using namespace S1;
        S2::A = A + 1;
    }

    {
        using namespace S2;
        S1::A = A + 1;
    }

    cout << S1::A << S2::A;

    return 0;
}`,
            options: ["12", "23", "32", "33"],
            correctAnswer: "32"
          },
          {
            type: "mcq",
            question: "What is the output of the following code?",
            codeSnippet: `#include <iostream>
using namespace std;

int main() {
    char t[3][3], *p = (char *)t;

    for(int i = 0; i < 9; i++)
        *p++ = 'a' + i;

    cout << t[1][1];
}`,
            options: ["c", "d", "e", "f"],
            correctAnswer: "e"
          },
          {
            type: "mcq",
            question: "What is the output of the following snippet?",
            codeSnippet: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "a";

    cout << s + "b" + "c";
}`,
            options: ["abc", "acb", "ab", "Compilation error"],
            correctAnswer: "abc"
          },
          {
            type: "mcq",
            question: "What is the output of the following code?",
            codeSnippet: `#include <iostream>
using namespace std;

namespace S {
    int A = 1;
}

namespace S {
    int B = A + 2;
}

int main(void) {
    S::A = S::A + 1;

    {
        using namespace S;
        ++B;
    }

    cout << S::B << S::A;
}`,
            options: ["32", "42", "33", "43"],
            correctAnswer: "42"
          },
          {
            type: "mcq",
            question: "What is printed on the screen?",
            codeSnippet: `#include <iostream>
using namespace std;

int main()
{
    int i, k = 1;

    for(i = 0; i < 3; i += 2)
        k++;

    cout << k;
}`,
            options: ["1", "2", "3", "4"],
            correctAnswer: "3"
          },
          {
            type: "mcq",
            question: "What is printed on the screen?",
            codeSnippet: `#include <iostream>
using namespace std;

int main()
{
    int i = 1, k = i << 1;

    switch(k) {

        case 1:
            i += 1;
            break;

        case 2:
            i += 2;
            break;

        default:
            i += 3;
    }

    cout << i;
}`,
            options: ["2", "3", "4", "5"],
            correctAnswer: "3"
          },
          {
            type: "mcq",
            question: "What is the value of variable `i`?",
            codeSnippet: `float x = 1.0 / 5.0;
int i = x;`,
            options: ["1", "0", "5", "Compilation error"],
            correctAnswer: "0"
          },
          {
            type: "mcq",
            question: "What is printed by the following code?",
            codeSnippet: `#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<double> arr = {1e-1, 1e0, 1e1};
    double *ptr = arr.data() + 2;

    cout << arr[1] - *ptr;
}`,
            options: ["-9", "9", "-10", "10"],
            correctAnswer: "-9"
          },
          {
            type: "mcq",
            question: "What is the output of the following snippet?",
            codeSnippet: `#include <iostream>
using namespace std;

int main()
{
    short s = 1;
    int i = 2;
    float f = 4.;

    cout << i/static_cast<float>(s) + i/2 + i/f;

    return 0;
}`,
            options: ["3", "3.5", "3.0", "4"],
            correctAnswer: "3.5"
          },
          {
            type: "mcq",
            question: "What is the output of the following code?",
            codeSnippet: `#include <iostream>
#include <string>

using namespace std;

int main()
{
    string s = "123";
    s.append(s.substr(2)).push_back(s[s.length() - 2]);

    cout << s;
}`,
            options: ["12333", "1233", "12332", "12323"],
            correctAnswer: "12333"
          },
          {
            type: "mcq",
            question: "What is the output of the program?",
            codeSnippet: `#include <iostream>
using namespace std;

double eval(double x)
{
    return x / (.5 * x);
}

void use(double n)
{
    int v = 1 / n;

    v = eval(v);

    cout << v;
}

int main()
{
    use(1.f);
}`,
            options: ["0", "1", "2", "Compilation error"],
            correctAnswer: "2"
          },
          {
            type: "mcq",
            question: "What is the value of `k`?",
            codeSnippet: `int k = 2 % 3 + 5 % 3;`,
            options: ["1", "2", "3", "4"],
            correctAnswer: "4"
          },
          {
            type: "mcq",
            question: "What is the output of the following code?",
            codeSnippet: `#include <iostream>
using namespace std;

int main()
{
    int a = 2, b = a >> 1;
    int c = a >> b;
    int d = 1 << c;
    int e = d >> d;

    cout << e;
}`,
            options: ["0", "1", "2", "4"],
            correctAnswer: "0"
          },
          {
            type: "mcq",
            question: "What is printed on the screen?",
            codeSnippet: `#include <iostream>
using namespace std;

int main()
{
    int a = 2, b = a >> 1;
    int c = b >> a;
    int d = 1 << c;
    int e = d << d;

    cout << e;
}`,
            options: ["1", "2", "4", "8"],
            correctAnswer: "2"
          },
          {
            type: "mcq",
            question: "What is the output of the following program?",
            codeSnippet: `#include <iostream>
#include <vector>

using namespace std;

void swap(float* x, float *y)
{
    float z = *x;
    *x = *y;
    *y = z;
}

int main()
{
    vector<float> t = {3., 2., 1.};

    swap(&t[0], &t[2]);

    cout << t[1];
}`,
            options: ["1", "2", "3", "0"],
            correctAnswer: "2"
          },
          {
            type: "mcq",
            question: "What is the output of the following snippet?",
            codeSnippet: `#include <iostream>
using namespace std;

int main()
{
    bool b1 = !true;
    bool b2 = !b1 && false;
    bool b3 = b2 || true;

    if(b3)
        cout << "true";
    else
        cout << "false";
}`,
            options: ["true", "false", "1", "Compilation error"],
            correctAnswer: "true"
          },
          {
            type: "mcq",
            question: "What is printed on the screen?",
            codeSnippet: `#include <iostream>
#include <string>

using namespace std;

string replicate(string s = "x", int r = 1)
{
    string t;

    while(r--)
        t += s;

    return t;
}

int main()
{
    string pattern = "a";

    cout << replicate(pattern);
}`,
            options: ["a", "aa", "x", "ax"],
            correctAnswer: "a"
          },
          {
            type: "mcq",
            question: "What is the output of the following snippet?",
            codeSnippet: `#include <iostream>
using namespace std;

int main()
{
    int i = 2;
    float f = 1;

    cout << (static_cast<float>(i) >> 1);
}`,
            options: ["0", "1", "2", "Compilation error"],
            correctAnswer: "Compilation error"
          },
          {
            type: "mcq",
            question: "What is printed on the screen when the following code is run?",
            codeSnippet: `#include <iostream>
using namespace std;

int main()
{
    int i = 1, k = i & 0;

    do {
        k++;
        if(k > 1)
            i = k;

    } while(i < 2);

    cout << k;
}`,
            options: ["0", "1", "2", "3"],
            correctAnswer: "2"
          },
          {
            type: "mcq",
            question: "What is the output of the following snippet?",
            codeSnippet: `#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<char> text(5);

    char *chr1 = text.data() + 2, *chr2 = chr1 + 2;

    cout << chr2 - text.data();
}`,
            options: ["2", "3", "4", "5"],
            correctAnswer: "4"
          },
          {
            type: "mcq",
            question: "What is the output of the following program?",
            codeSnippet: `#include <iostream>
using namespace std;

int op(int i, int j = 1)
{
    return i * j;
}

int op(char a, char b)
{
    return b - a;
}

int op(float x, float y)
{
    return x / y;
}

int main()
{
    cout << op(2) << op('c', 'a') << op(4.F, 2.F);
}`,
            options: ["2-22", "22-2", "2-12", "222"],
            correctAnswer: "2-22"
          },
          {
            type: "mcq",
            question: "What is printed on the screen?",
            codeSnippet: `#include <iostream>
using namespace std;

int main()
{
    int k = 3;

    if(k > 0) {
        if(k != 3)
            k--;

        if(k == 3)
            k++;
    }

    if(k < 0) {
        k = 5;
    }

    cout << k;
}`,
            options: ["2", "3", "4", "5"],
            correctAnswer: "4"
          }
        ]
      },
      {
        id: 'prog_passco',
        title: "Passco",
        description: "Past Questions and Exams",
        isComingSoon: true,
        questions: []
      }
    ]
  }
};

export default function App() {
  // Navigation State
  const [currentScreen, setCurrentScreen] = useState('dashboard'); // 'dashboard', 'quiz', 'results', 'sub_dashboard'
  const [activeCourseId, setActiveCourseId] = useState(null);
  const [activeSubModuleId, setActiveSubModuleId] = useState(null);
  
  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [warning, setWarning] = useState("");

  // Modals State
  const [isGptModalOpen, setIsGptModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [completedCourseId, setCompletedCourseId] = useState(null);

  // Derived state for the active course and its questions
  const activeCourse = activeCourseId ? courseData[activeCourseId] : null;
  const activeQuestions = activeCourse?.isFolder && activeSubModuleId 
    ? activeCourse.subModules.find(m => m.id === activeSubModuleId).questions 
    : activeCourse?.questions;
  const currentQuestion = activeQuestions ? activeQuestions[currentQuestionIndex] : null;

  // --- Actions ---

  const handleCopy = (text, field) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000); // Reset text after 2 seconds
    } catch (err) {
      console.error('Copy failed', err);
    }
    document.body.removeChild(textArea);
  };

  const handleStartCourse = (courseId) => {
    const course = courseData[courseId];
    
    if (course.isCompleted) {
      setCompletedCourseId(courseId);
    } else if (course.isFolder) {
      setActiveCourseId(courseId);
      setCurrentScreen('sub_dashboard');
    } else {
      setActiveCourseId(courseId);
      setActiveSubModuleId(null);
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedAnswers([]);
      setIsAnswered(false);
      setWarning("");
      setCurrentScreen('quiz');
    }
  };

  const handleProceedToQuestions = () => {
    const courseId = completedCourseId;
    const course = courseData[courseId];
    setCompletedCourseId(null);
    setActiveCourseId(courseId);
    
    if (course.isFolder) {
      setCurrentScreen('sub_dashboard');
    } else {
      setActiveSubModuleId(null);
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedAnswers([]);
      setIsAnswered(false);
      setWarning("");
      setCurrentScreen('quiz');
    }
  };

  const handleStartSubModule = (subModule) => {
    if (subModule.isComingSoon) {
      setShowPromptModal(true);
      return;
    }
    setActiveSubModuleId(subModule.id);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswers([]);
    setIsAnswered(false);
    setWarning("");
    setCurrentScreen('quiz');
  };

  const handleOptionToggle = (option) => {
    if (isAnswered) return;
    setWarning(""); 
    
    const isMulti = Array.isArray(currentQuestion.correctAnswer);
    
    if (isMulti) {
      const maxSelections = currentQuestion.correctAnswer.length;
      if (selectedAnswers.includes(option)) {
        setSelectedAnswers(selectedAnswers.filter(a => a !== option));
      } else {
        if (selectedAnswers.length < maxSelections) {
          setSelectedAnswers([...selectedAnswers, option]);
        } else {
          setWarning(`You can only select ${maxSelections} options. Deselect one first.`);
        }
      }
    } else {
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
    
    let isCorrect = false;
    if (currentQuestion.type === 'text') {
      const typed = selectedAnswers[0]?.toLowerCase().trim() || "";
      const acceptable = currentQuestion.correctAnswer.map(a => a.toLowerCase().trim());
      isCorrect = acceptable.includes(typed);
    } else {
      const isMulti = Array.isArray(currentQuestion.correctAnswer);
      if (isMulti) {
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
    if (currentQuestionIndex + 1 < activeQuestions.length) {
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

  const handleBackNavigation = () => {
    if ((currentScreen === 'quiz' || currentScreen === 'results') && activeCourse?.isFolder) {
      setCurrentScreen('sub_dashboard');
    } else {
      setActiveCourseId(null);
      setActiveSubModuleId(null);
      setCurrentScreen('dashboard');
    }
  };

  // --- Render Functions ---

  const renderDashboard = () => (
    <div className="p-6 sm:p-8 animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Select a Course</h2>
        <p className="text-slate-400 text-sm sm:text-base">Choose a subject to begin your quiz</p>
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
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500`}></div>
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${course.gradient} mb-4 shadow-lg`}>
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1">{course.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-4 line-clamp-2">{course.description}</p>
              
              <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                {course.isFolder ? 'View Modules' : 'Start Quiz'} 
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderSubDashboard = () => (
    <div className="p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{activeCourse.title}</h2>
        <p className="text-slate-400 text-sm sm:text-base">Choose a specific section to begin</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {activeCourse.subModules.map((subModule) => {
          const Icon = activeCourse.icon;
          return (
            <button
              key={subModule.id}
              onClick={() => handleStartSubModule(subModule)}
              className="group text-left bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-500 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${activeCourse.gradient} opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500`}></div>
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${activeCourse.gradient} mb-4 shadow-lg ${subModule.isComingSoon ? 'opacity-50' : ''}`}>
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1">{subModule.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-4 line-clamp-2">{subModule.description}</p>
              
              <div className={`flex items-center text-sm font-semibold transition-colors ${subModule.isComingSoon ? 'text-slate-500' : 'text-blue-400 group-hover:text-blue-300'}`}>
                {subModule.isComingSoon ? 'Coming Soon' : 'Start Quiz'} 
                {!subModule.isComingSoon && <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderQuiz = () => {
    const progress = ((currentQuestionIndex) / activeQuestions.length) * 100;

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
              Q {currentQuestionIndex + 1} of {activeQuestions.length}
            </span>
            <span className="bg-slate-700 px-3 py-1 rounded-full text-slate-200">
              Score: {score}
            </span>
          </div>

          {/* Question Text & Code Snippet */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-white leading-relaxed">
              {currentQuestion.question}
            </h2>
            
            {/* New Code Snippet Renderer */}
            {currentQuestion.codeSnippet && (
              <div className="mt-4 p-4 sm:p-5 bg-[#0d1117] rounded-xl border border-slate-700/50 shadow-inner overflow-x-auto relative group">
                <div className="absolute top-0 right-0 px-2 py-1 bg-slate-800 text-[10px] text-slate-400 rounded-bl-lg rounded-tr-xl font-mono uppercase tracking-wider border-b border-l border-slate-700/50">C++</div>
                <pre className="text-sm sm:text-base font-mono text-[#569cd6] leading-relaxed whitespace-pre-wrap sm:whitespace-pre">
                  <code>{currentQuestion.codeSnippet}</code>
                </pre>
              </div>
            )}

            {currentQuestion.type !== 'text' && Array.isArray(currentQuestion.correctAnswer) && currentQuestion.correctAnswer.length > 1 && (
              <p className="text-blue-400 text-sm mt-4 font-medium">
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
                {currentQuestionIndex + 1 === activeQuestions.length ? 'Finish Course' : 'Next Question'}
                <ArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const totalQuestions = activeQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    let message = "Good effort! Keep studying.";
    if (percentage === 100) message = "Perfect! You've mastered this subject.";
    else if (percentage >= 80) message = "Excellent work!";
    else if (percentage >= 60) message = "Solid performance. A little more review will help!";

    const subModuleTitle = activeCourse?.isFolder && activeSubModuleId 
      ? activeCourse.subModules.find(m => m.id === activeSubModuleId).title 
      : "";

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
        
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {activeCourse.isFolder ? `${activeCourse.title}: ${subModuleTitle}` : activeCourse.title} Complete!
        </h2>
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
            onClick={handleBackNavigation}
            className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${activeCourse.gradient} text-white px-5 py-3.5 rounded-xl font-semibold transition-all hover:opacity-90 shadow-lg`}
          >
            <Home size={18} />
            {activeCourse?.isFolder ? 'Back to Modules' : 'Dashboard'}
          </button>
        </div>
      </div>
    );
  };

  // Determine Title for Header
  let headerTitle = "Student Portal";
  if (currentScreen === 'sub_dashboard') {
    headerTitle = activeCourse?.title;
  } else if (currentScreen === 'quiz' || currentScreen === 'results') {
    if (activeCourse?.isFolder && activeSubModuleId) {
      const sub = activeCourse.subModules.find(s => s.id === activeSubModuleId);
      headerTitle = `${activeCourse.title} - ${sub.title}`;
    } else {
      headerTitle = activeCourse?.title;
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 font-sans text-slate-100">
      <div className="bg-slate-800 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-700 flex flex-col max-h-[90vh]">
        
        {/* Dynamic Header */}
        <div className="bg-slate-800/95 backdrop-blur-md p-3 sm:p-5 border-b border-slate-700/50 flex items-center justify-between sticky top-0 z-10">
          
          {/* Left: Back Button or Spacer */}
          <div className="flex-1 flex justify-start min-w-0">
            {currentScreen !== 'dashboard' ? (
              <button 
                onClick={handleBackNavigation}
                className="p-1.5 sm:p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                title="Go Back"
              >
                <ChevronLeft size={20} />
              </button>
            ) : (
              <a 
                href="https://www.canva.com/brand/join?token=kMt3BN0TaL2FRGUA5n6NBA&brandingVariant=edu&referrer=team-invite"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-200 text-xs sm:text-sm font-medium transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50 hover:shadow-[0_0_12px_rgba(168,85,247,0.2)] whitespace-nowrap shrink-0"
              >
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-purple-500/20 group-hover:bg-gradient-to-r group-hover:from-[#00C4CC] group-hover:to-[#7D2AE8] flex items-center justify-center shrink-0 transition-all duration-300">
                  <span className="text-purple-200 group-hover:text-white text-[9px] sm:text-[10px] font-bold">C</span>
                </div>
                <span className="hidden sm:inline">Canva Pro</span>
                <span className="sm:hidden">Canva</span>
              </a>
            )}
          </div>
          
          {/* Center: Title & Icon */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 px-2 max-w-[55%] sm:max-w-[60%] shrink-0">
            <div className={`p-1.5 sm:p-2 shrink-0 rounded-lg ${currentScreen !== 'dashboard' ? `bg-gradient-to-br ${activeCourse?.gradient || 'from-blue-500 to-blue-600'}` : 'bg-blue-600'}`}>
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <h1 className="text-sm sm:text-xl font-bold text-white tracking-wide truncate">
              {headerTitle}
            </h1>
          </div>
          
          {/* Right: ChatGPT Pro Button */}
          <div className="flex-1 flex justify-end min-w-0">
            {currentScreen === 'dashboard' && (
              <button 
                onClick={() => setIsGptModalOpen(true)}
                className="group flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-200 text-xs sm:text-sm font-medium transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50 hover:shadow-[0_0_12px_rgba(20,184,166,0.2)] whitespace-nowrap shrink-0"
              >
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-teal-500/20 group-hover:bg-[#10A37F] flex items-center justify-center shrink-0 transition-all duration-300">
                  <BrainCircuit size={10} className="text-teal-200 group-hover:text-white" />
                </div>
                <span className="hidden sm:inline">ChatGPT Pro</span>
                <span className="sm:hidden">GPT</span>
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto custom-scrollbar">
          {currentScreen === 'dashboard' && renderDashboard()}
          {currentScreen === 'sub_dashboard' && renderSubDashboard()}
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

      {/* Coming Soon Module Prompt */}
      {showPromptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 w-full max-w-sm shadow-2xl shadow-emerald-900/20 animate-in zoom-in-95 duration-200 relative flex flex-col items-center text-center">
            <div className="p-4 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-4">
              <Database className="text-emerald-400" size={32} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Coming Soon!</h3>
            <p className="text-slate-300 mb-6">Questions are on the way.</p>
            <button
              onClick={() => setShowPromptModal(false)}
              className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-xl transition-all border border-slate-600 shadow-sm"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Completed Course Modal */}
      {completedCourseId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 w-full max-w-sm shadow-2xl shadow-blue-900/20 animate-in zoom-in-95 duration-200 relative flex flex-col items-center text-center">
            <div className="p-4 bg-blue-500/20 rounded-full border border-blue-500/30 mb-4">
              <Check className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Course Completed!</h3>
            <p className="text-slate-300 mb-6">You have completed the {courseData[completedCourseId].title} course.</p>
            <button
              onClick={handleProceedToQuestions}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md mb-3"
            >
              Click here to access questions
            </button>
            <button
              onClick={() => setCompletedCourseId(null)}
              className="w-full bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold px-6 py-3 rounded-xl transition-all border border-slate-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ChatGPT Credentials Modal */}
      {isGptModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-sm shadow-2xl shadow-teal-900/20 animate-in zoom-in-95 duration-200 relative">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#10A37F]/20 rounded-lg border border-[#10A37F]/30">
                  <BrainCircuit className="text-[#10A37F]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">ChatGPT Premium</h3>
              </div>
              <button 
                onClick={() => setIsGptModalOpen(false)} 
                className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                <p className="text-xs text-slate-400 mb-2 font-semibold uppercase tracking-wider">Email Address</p>
                <div className="flex justify-between items-center gap-3">
                  <code className="text-sm sm:text-base text-slate-200 truncate font-mono select-all">premiumgpt1@outlook.com</code>
                  <button
                    onClick={() => handleCopy("premiumgpt1@outlook.com", "email")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                      copiedField === 'email' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white border border-slate-600'
                    }`}
                  >
                    {copiedField === 'email' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                <p className="text-xs text-slate-400 mb-2 font-semibold uppercase tracking-wider">Password</p>
                <div className="flex justify-between items-center gap-3">
                  <code className="text-sm sm:text-base text-slate-200 truncate font-mono select-all">SaffulmadeIt</code>
                  <button
                    onClick={() => handleCopy("SaffulmadeIt", "password")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                      copiedField === 'password' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white border border-slate-600'
                    }`}
                  >
                    {copiedField === 'password' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center space-y-3">
              <p className="text-[11px] sm:text-xs font-semibold text-red-400 bg-red-500/10 p-2.5 rounded-lg border border-red-500/20">
                ⚠️ Do not share, multiple logins at different locations might cause a permanent ban
              </p>
              <p className="text-xs text-slate-500">Access provided for study purposes only.</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}