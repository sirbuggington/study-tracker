import type { StudyPlan } from './types';

export const studyPlan: StudyPlan = {
  title: "Application Developer Study Plan",
  goal: "Become interview-credible for a junior Application Developer role on the Microsoft stack: C#, VB.NET, SQL Server, ASP.NET, Blazor, Visual Studio",
  startDate: "2026-04-01",
  endDate: "2026-04-20",
  dailyQuestion: "Did I produce a working artifact or increase my ability to explain the system clearly?",
  coreRules: [
    "The project matters more than the courses.",
    "Use EF Core from the start. Do not rewrite data access later.",
    "Do not add an API layer unless the base app is already working cleanly.",
    "Sundays are off. No fake \"light study.\"",
    "Use AI to explain and unblock, not to do all the thinking for you."
  ],
  completionCriteria: "I built a CRUD application using Blazor Server, Entity Framework Core, and SQL Server — and here's the GitHub repo to prove it. I can also read, understand, and write basic VB.NET code, and I can translate fluently between C# and VB.NET.",
  courseReference: [
    { number: 1, name: "Get started with C#, Part 1", hours: "~6 hrs", link: "https://learn.microsoft.com/en-us/training/paths/get-started-c-sharp-part-1/" },
    { number: 2, name: "Query and modify data with T-SQL", hours: "~6 hrs", link: "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/" },
    { number: 3, name: "Build web apps with ASP.NET Core for beginners", hours: "~5 hrs", link: "https://learn.microsoft.com/en-us/training/paths/aspnet-core-web-app/" },
    { number: 4, name: "Build web apps with Blazor", hours: "~5 hrs", link: "https://learn.microsoft.com/en-us/training/paths/build-web-apps-with-blazor/" },
    { number: 5, name: "Implement classes, properties, and methods", hours: "~4 hrs", link: "https://learn.microsoft.com/en-us/training/paths/implement-classes-properties-and-methods/" },
    { number: 6, name: "Create a web API with ASP.NET Core controllers", hours: "~1 hr", link: "https://learn.microsoft.com/en-us/training/modules/build-web-api-aspnet-core/" },
    { number: 7, name: "Entity Framework Core", hours: "~3-4 hrs", link: "https://learn.microsoft.com/en-us/ef/core/" },
    { number: 8, name: "Debug .NET apps with Visual Studio", hours: "~1 hr", link: "https://learn.microsoft.com/en-us/training/modules/dotnet-debug-visual-studio/" },
    { number: 9, name: "GitHub Foundations", hours: "~4 hrs", link: "https://learn.microsoft.com/en-us/training/paths/github-foundations/" },
    { number: 10, name: "MDN JavaScript basics (optional)", hours: "~3-4 hrs", link: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting" },
    { number: 11, name: "Add decision logic with if/else in C#", hours: "~1 hr", link: "https://learn.microsoft.com/en-us/training/modules/csharp-if-elseif-else/" },
    { number: 12, name: "Evaluate Boolean expressions in C#", hours: "~1 hr", link: "https://learn.microsoft.com/en-us/training/modules/csharp-evaluate-boolean-expressions/" },
    { number: 13, name: "Branch with switch-case in C#", hours: "~1 hr", link: "https://learn.microsoft.com/en-us/training/modules/csharp-switch-case/" },
    { number: 14, name: "Create stored procedures and user-defined functions", hours: "~1 hr", link: "https://learn.microsoft.com/en-us/training/modules/create-stored-procedures-table-valued-functions/" },
    { number: 15, name: "VB.NET Console App Tutorial (Visual Studio)", hours: "~1 hr", link: "https://learn.microsoft.com/en-us/visualstudio/get-started/visual-basic/tutorial-console" },
    { number: 16, name: "VB.NET Fundamentals for Absolute Beginners (26 episodes)", hours: "~6 hrs", link: "https://learn.microsoft.com/en-us/shows/visual-basic-fundamentals-for-absolute-beginners/" },
    { number: 17, name: "VB.NET Debugging Tutorial (Visual Studio)", hours: "~1 hr", link: "https://learn.microsoft.com/en-us/visualstudio/get-started/visual-basic/tutorial-debugger" },
    { number: 18, name: "VB.NET Language Features & Programming Guide", hours: "~2 hrs", link: "https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/" },
    { number: 19, name: "VB.NET Walkthroughs (Classes, Interfaces, LINQ)", hours: "~2 hrs", link: "https://learn.microsoft.com/en-us/dotnet/visual-basic/walkthroughs" },
    { number: 20, name: "freeCodeCamp VB.NET Full Course for Beginners", hours: "~3 hrs", link: "https://www.youtube.com/watch?v=HFWQdGn5DaU" }
  ],
  weeks: [
    {
      id: "week-1",
      weekNumber: 1,
      title: "WEEK 1 — Foundation",
      subtitle: "Learn the core stack fast, then move into building.",
      days: [
        {
          id: "day-1",
          dayNumber: 1,
          date: "April 1",
          weekday: "Wednesday",
          title: "First contact with C#",
          subtitle: "Day 1",
          isRestDay: false,
          mustFinish: [
            { id: "d1-m1", text: "Complete C# Part 1, Modules 1-3", link: "https://learn.microsoft.com/en-us/training/paths/get-started-c-sharp-part-1/", hours: 3, detail: "Open the Microsoft Learn link and work through the first 3 modules in order. Module 1 covers \"Hello World\" and basic output. Module 2 covers variables and data types (string, int, bool, etc.). Module 3 covers basic string formatting and operations.\nEach module has interactive coding exercises built into the browser — complete every one. Don't skip the knowledge checks at the end of each module." },
            { id: "d1-m2", text: "Type all examples yourself — do not copy/paste", hours: 3, detail: "When the course shows you a code example, type it out by hand in Visual Studio or the browser editor. This is about building muscle memory for C# syntax — semicolons, curly braces, Console.WriteLine(), etc.\nCopying and pasting feels faster but you skip the part where your brain learns the patterns. If you make a typo and get an error, that's a feature — you're learning to read error messages." },
            { id: "d1-m3", text: "Write 5-10 bullet-point recap from memory (no peeking)", hours: 0.5, detail: "Close your browser and notes. Open a blank text file or grab paper. Write down everything you remember learning today in bullet points.\nExamples: \"Variables store data and have a type like string or int.\" \"Console.WriteLine() prints to the screen.\" \"Strings use double quotes, not single.\"\nThis forces active recall which is how knowledge actually sticks. It's okay if you only get 5 — that means those 5 are solid." },
            { id: "d1-m4", text: "Get quizzed by Claude on today's C# basics", hours: 0.5, isQuiz: true, detail: "Open Claude and ask to be quizzed on Day 1 material. Suggested prompt:\n\"Quiz me on C# basics: variables, data types (string, int, bool, decimal), Console.WriteLine(), string formatting, and string interpolation. Start with definitions, then give me code to write and predict output.\"\nAnswer from memory — no peeking at notes. If you get something wrong, that's the thing to review tomorrow." }
          ],
          niceToFinish: [
            { id: "d1-n1", text: "Start Module 4 — Number operations", hours: 1.5, detail: "Module 4 covers math operations in C# — addition, subtraction, multiplication, division, and the modulus operator (%). It also covers how C# handles integer division vs decimal division, which trips people up.\nGetting a head start here means Day 2 will go faster." },
            { id: "d1-n2", text: "Open a blank console app and intentionally break things to see what errors look like", hours: 1, detail: "In Visual Studio: File > New > Project > Console App (.NET). Then try things that will break: forget a semicolon, use an undeclared variable, put a string where a number should go.\nThe goal is to get comfortable with the red error squiggles and the error list panel. Read what the error says — C# error messages are usually pretty helpful." }
          ],
          endOfDayProof: "You can explain what a variable is, what a string is, and how to print to the screen — without looking at notes."
        },
        {
          id: "day-2",
          dayNumber: 2,
          date: "April 2",
          weekday: "Thursday",
          title: "Finish C# foundations",
          subtitle: "Day 2",
          isRestDay: false,
          mustFinish: [
            { id: "d2-m1", text: "Complete C# Part 1, Modules 4-6", hours: 3, detail: "Module 4 covers number operations and type conversions. Module 5 is a guided project where you build a program that calculates and displays student grades. Module 6 is a guided project where you build a GPA calculator.\nModules 5-6 combine everything from the entire Part 1 path into real working programs. Follow the step-by-step instructions carefully — you should have working code at the end of each." },
            { id: "d2-m2", text: "Complete: Add decision logic with if/else in C#", link: "https://learn.microsoft.com/en-us/training/modules/csharp-if-elseif-else/", hours: 1, detail: "This module teaches if, else, and else if statements — how to make your code do different things based on conditions. This is one of the most fundamental building blocks: 'if this is true, do this; otherwise, do that.'\nComplete all exercises and knowledge checks." },
            { id: "d2-m3", text: "Complete: Evaluate Boolean expressions in C#", link: "https://learn.microsoft.com/en-us/training/modules/csharp-evaluate-boolean-expressions/", hours: 1, detail: "This module teaches comparison operators (==, !=, >, <) and logical operators (&&, ||, !). These are how you build the conditions inside your if statements. After this you'll be able to write things like: if (age >= 18 && hasLicense == true).\nComplete all exercises and knowledge checks." },
            { id: "d2-m4", text: "Complete: Branch with switch-case in C#", link: "https://learn.microsoft.com/en-us/training/modules/csharp-switch-case/", hours: 1, detail: "The switch statement is an alternative to long if/else chains when you're matching one value against many options. Example: switch on a status string to handle 'Open', 'In Progress', 'Closed' differently. You'll use this pattern in the Work Order Tracker.\nComplete all exercises and knowledge checks." },
            { id: "d2-m5", text: "Build one tiny extra console app yourself (tip calculator, unit converter, calorie counter — anything)", hours: 1.5, detail: "Pick something simple and build it from scratch. A tip calculator: ask for bill amount, ask for tip percentage, calculate and display the total. A unit converter: ask for a temperature in Fahrenheit, convert to Celsius.\nThe point is to write code without someone telling you what to type. It's okay if it's ugly — it just needs to work. Use Console.ReadLine() to get user input and Convert.ToInt32() or Convert.ToDouble() to convert it." },
            { id: "d2-m6", text: "Write 5-10 bullet-point recap from memory", hours: 0.5, detail: "Same as yesterday — close everything and write down what you learned. Focus on new concepts: if/else, switch, boolean expressions, type casting, and the guided projects.\nTry to include at least one code snippet from memory, like how to write an if statement or a switch block." },
            { id: "d2-m7", text: "Get quizzed by Claude on C# foundations", hours: 0.5, isQuiz: true, detail: "Open Claude and ask to be quizzed on Day 2 material. Suggested prompt:\n\"Quiz me on C# foundations: if/else statements, boolean expressions (comparison and logical operators), switch statements, number operations, type casting, and the guided projects from C# Part 1. Make me write code, not just explain concepts.\"\nThis covers everything from the full C# Part 1 path plus the three new modules. You should be able to write basic programs from scratch by now." },
            { id: "d2-m8", text: "VB.NET first contact: Complete the VB.NET Console App tutorial + watch Episodes 1-4 of VB.NET Fundamentals", link: "https://learn.microsoft.com/en-us/visualstudio/get-started/visual-basic/tutorial-console", hours: 2.5, detail: "Hamilton County's existing codebase is VB.NET — most daily work involves maintaining legacy VB.NET code. You need to know this language just as well as C#.\n\nFirst, complete the full VB.NET Console App tutorial in Visual Studio: create a VB.NET project, write Hello World, add user input with Console.ReadLine(), and do the \"Extra credit: Add two numbers\" section. This takes about 30-45 minutes.\n\nThen watch Episodes 1-4 of VB.NET Fundamentals for Absolute Beginners on Microsoft Learn (https://learn.microsoft.com/en-us/shows/visual-basic-fundamentals-for-absolute-beginners/). These cover: series intro, setting up Visual Studio, creating your first VB.NET program, and dissecting what you just built.\n\nBy the end, you should see how every C# concept you learned today has a VB.NET equivalent:\n- int x = 5; becomes Dim x As Integer = 5\n- if (x > 5) { } becomes If x > 5 Then ... End If\n- switch becomes Select Case\n- // comment becomes ' comment\n- void method becomes Sub, non-void becomes Function\n- } becomes End If, End Sub, End Class\n\nDon't memorize everything — just get comfortable so VB.NET isn't foreign when you see it later. You'll go deep on Day 9." }
          ],
          niceToFinish: [
            { id: "d2-n1", text: "Rebuild one guided project from scratch without following the instructions", hours: 1.5, detail: "Pick either the student grades or GPA calculator project. Close the instructions. Open a new blank console app and try to rebuild it from memory.\nYou'll get stuck — that's the point. When you do, try to figure it out yourself for a few minutes before looking back at the original. This is the difference between following a recipe and knowing how to cook." }
          ],
          endOfDayProof: "You can write a basic C# console program on your own without copying line by line. Entire C# Part 1 path is complete — green checkmarks on all 6 modules. You've also created your first VB.NET console app."
        },
        {
          id: "day-3",
          dayNumber: 3,
          date: "April 3",
          weekday: "Friday",
          title: "SQL, first half",
          subtitle: "Day 3",
          isRestDay: false,
          mustFinish: [
            { id: "d3-m1", text: "Complete T-SQL, Modules 1-3", link: "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/", hours: 3, detail: "T-SQL is how you talk to SQL Server databases. Module 1 introduces SELECT statements — how to pull data out of a table. Module 2 covers sorting (ORDER BY) and filtering (WHERE). Module 3 covers JOINs — combining data from multiple tables.\nModule 3 teaches several JOIN types: INNER JOIN (rows that match in both tables — the most common), LEFT/RIGHT OUTER JOIN (all rows from one table even if there's no match in the other), FULL OUTER JOIN (all rows from both tables), and CROSS JOIN. Know the difference between INNER and LEFT JOIN especially — interviewers ask about JOIN types." },
            { id: "d3-m2", text: "Practice: SELECT, WHERE, ORDER BY, JOIN", hours: 2.5, detail: "Write queries by hand. Start simple: SELECT * FROM TableName. Then add conditions: WHERE Status = 'Open'. Then sort: ORDER BY CreatedDate DESC. Then join: SELECT w.Title, c.Name FROM WorkOrders w INNER JOIN Categories c ON w.CategoryId = c.Id.\nThen try a LEFT JOIN to see how unmatched rows show up as NULL. Know the difference — interviewers ask about JOIN types.\nIf you don't have a database yet, use the Microsoft Learn sandbox or write queries in a text file to practice the syntax. The key patterns to nail: SELECT columns FROM table WHERE condition ORDER BY column, and INNER JOIN with ON." },
            { id: "d3-m3", text: "Write 5-10 bullet-point recap from memory", hours: 0.5, detail: "Write what you remember about SQL. Focus on: what SELECT does, how WHERE filters rows, what JOIN does and when you need it, the difference between WHERE and ORDER BY.\nBonus: write out a sample JOIN query from memory." },
            { id: "d3-m4", text: "Get quizzed by Claude on SQL (SELECT, WHERE, JOIN)", hours: 0.5, isQuiz: true, detail: "Open Claude and ask to be quizzed on Day 3 material. Suggested prompt:\n\"Quiz me on T-SQL basics: SELECT statements, WHERE clauses, ORDER BY, and JOINs. Make me write actual SQL queries — give me a table structure and ask me to write queries that pull specific data. Include at least one JOIN question.\"\nSQL is best learned by writing it. Expect to write 5-8 queries from scratch." }
          ],
          niceToFinish: [
            { id: "d3-n1", text: "Open SSMS and run a few queries against any local database", hours: 1, detail: "SSMS = SQL Server Management Studio. If you have SQL Server installed locally, open SSMS, connect to your local instance, and find any database. Try running SELECT queries against existing tables.\nIf you don't have SSMS installed yet, install SQL Server Express (free) and SSMS. You'll need both for the project later anyway." },
            { id: "d3-n2", text: "Write 5 practice queries on your own sample tables", hours: 1, detail: "Create a simple table: CREATE TABLE Products (Id INT, Name NVARCHAR(100), Price DECIMAL(10,2)). Insert some test data. Then write queries: find products over $10, sort by price, count how many products exist, find the most expensive one.\nThis hands-on practice makes the syntax feel natural instead of academic." },
            { id: "d3-n3", text: "Start Module 4 — Subqueries", hours: 1.5, detail: "Module 4 covers subqueries — a query inside another query. Example: SELECT * FROM WorkOrders WHERE CategoryId IN (SELECT Id FROM Categories WHERE Name = 'Urgent').\nThis is a more advanced technique. Getting a head start means tomorrow will go smoother." }
          ],
          endOfDayProof: "You can explain what a JOIN does and write a basic join query yourself without looking anything up."
        },
        {
          id: "day-4",
          dayNumber: 4,
          date: "April 4",
          weekday: "Saturday",
          title: "SQL, finish it",
          subtitle: "Day 4",
          isRestDay: false,
          mustFinish: [
            { id: "d4-m1", text: "Complete T-SQL, Modules 4-6", hours: 3, detail: "Module 4 covers subqueries and derived tables. Module 5 covers data modification — INSERT (add rows), UPDATE (change rows), DELETE (remove rows). Module 6 covers aggregate functions like COUNT, SUM, AVG, and GROUP BY.\nModule 5 is especially critical because these are the SQL operations behind every CRUD app. When your Blazor app saves a work order, EF Core generates an INSERT statement behind the scenes." },
            { id: "d4-m1b", text: "Complete: Stored procedures and user-defined functions", link: "https://learn.microsoft.com/en-us/training/modules/create-stored-procedures-table-valued-functions/", hours: 1, detail: "A stored procedure is a saved SQL query that lives inside the database and can be called by name. Instead of writing a long query every time, you store it once and call EXEC GetOpenWorkOrders. This module covers creating, calling, and passing parameters to stored procedures.\nYou won't use stored procedures in the project (EF Core handles your queries), but you need to know what they are for interviews — many enterprise apps use them heavily." },
            { id: "d4-m2", text: "Practice: subqueries, GROUP BY, INSERT, UPDATE, DELETE", hours: 2.5, detail: "Write these statements by hand against a test table:\nINSERT INTO Products (Name, Price) VALUES ('Widget', 9.99)\nUPDATE Products SET Price = 12.99 WHERE Name = 'Widget'\nDELETE FROM Products WHERE Name = 'Widget'\nSELECT CategoryId, COUNT(*) AS Total FROM Products GROUP BY CategoryId\nGROUP BY is how you get counts and totals per category — useful for reporting." },
            { id: "d4-m3", text: "Write 5-10 bullet-point recap from memory", hours: 0.5, detail: "Focus on CRUD in SQL: INSERT adds data, SELECT reads data, UPDATE changes data, DELETE removes data. Also recap GROUP BY and what aggregate functions do.\nTry writing out an INSERT and an UPDATE statement from memory." },
            { id: "d4-m4", text: "Get quizzed by Claude on SQL (subqueries, GROUP BY, CRUD)", hours: 0.5, isQuiz: true, detail: "Open Claude and ask to be quizzed on Day 4 material. Suggested prompt:\n\"Quiz me on T-SQL: subqueries, GROUP BY with aggregate functions (COUNT, SUM, AVG), INSERT, UPDATE, and DELETE statements. Give me table schemas and make me write the SQL. Include questions that combine GROUP BY with WHERE and HAVING.\"\nYou should be able to write any basic CRUD SQL statement from memory now." }
          ],
          niceToFinish: [
            { id: "d4-n1", text: "Read through the EF Core Getting Started page", link: "https://learn.microsoft.com/en-us/ef/core/get-started/overview/first-app", hours: 1.5, detail: "EF Core (Entity Framework Core) is the bridge between your C# code and SQL Server. Instead of writing raw SQL, you write C# and EF Core generates the SQL for you.\nJust read through this page to get a feel for the concepts: DbContext, model classes, migrations. You don't need to build anything yet — that's Day 7. This is just reducing the surprise factor." },
            { id: "d4-n2", text: "Write a few INSERT/UPDATE/DELETE statements in SSMS against a test table", hours: 1, detail: "Open SSMS, connect to your local SQL Server, and practice writing data modification statements against a test table. Create a table, insert rows, update some, delete some.\nThis hands-on practice means you'll understand what EF Core is doing behind the scenes when you start the project." }
          ],
          endOfDayProof: "You can do basic SQL CRUD without looking up every command. Entire T-SQL path is complete."
        },
        {
          id: "day-5",
          dayNumber: 5,
          date: "April 5",
          weekday: "Sunday",
          title: "Web frameworks marathon",
          subtitle: "Day 5",
          isRestDay: false,
          mustFinish: [
            { id: "d5-m1", text: "Complete all modules of ASP.NET Core for beginners", link: "https://learn.microsoft.com/en-us/training/paths/aspnet-core-web-app/", hours: 5, detail: "ASP.NET Core is Microsoft's web framework — it's what lets you build websites and web apps with C#. This learning path covers the fundamentals: how a request becomes a response, how Razor pages work, how to structure a web app.\nThis is a long one (~5 hours). Take breaks every 60-90 minutes. The goal is to understand the big picture — you don't need to memorize every detail." },
            { id: "d5-m2", text: "Complete Blazor, Modules 1-4 (Intro, First app, To-do list, Data interaction)", link: "https://learn.microsoft.com/en-us/training/paths/build-web-apps-with-blazor/", hours: 2.5, detail: "Blazor is a framework built on ASP.NET Core that lets you build interactive web UIs with C# instead of JavaScript. Module 1 explains what Blazor is. Module 2 has you build your first Blazor app. Module 3 builds a to-do list. Module 4 covers data binding.\nThe to-do list project in Module 3 is basically a mini version of what your final Work Order Tracker will be. Pay close attention to how components work and how data flows." },
            { id: "d5-m3", text: "Write 5-10 bullet-point recap from memory", hours: 0.5, detail: "Key things to capture: What is ASP.NET Core? What is Blazor and how does it relate to ASP.NET? What is a Blazor component? What is data binding? What's the difference between Blazor Server and Blazor WebAssembly?\nDon't worry if you can't answer all of these — write what you remember." },
            { id: "d5-m4", text: "Get quizzed by Claude on ASP.NET Core and Blazor", hours: 0.75, isQuiz: true, detail: "Open Claude and ask to be quizzed on Day 5 material. Suggested prompt:\n\"Quiz me on ASP.NET Core and Blazor fundamentals. Cover: what ASP.NET Core is, how Blazor relates to it, Blazor Server vs WebAssembly, what a .razor component is, data binding, and the component lifecycle. Mix conceptual questions with 'write the code' questions — have me write small Blazor component snippets.\"\nThis is a bigger quiz because you covered two frameworks today. Take your time." }
          ],
          niceToFinish: [
            { id: "d5-n1", text: "Continue into Blazor Modules 5-6 (Routing, Forms/validation)", hours: 1.5, detail: "Module 5 covers routing — how different URLs map to different pages in your Blazor app. Module 6 covers forms and validation — how to build input forms and make sure the data is valid before saving.\nBoth are critical for the project, but you'll cover them on Day 7 if you don't get to them today." },
            { id: "d5-n2", text: "Write a one-paragraph summary: What is ASP.NET? What is Blazor? How do they relate?", hours: 0.5, detail: "In your own words, explain: ASP.NET Core is a web framework for building web apps with C#. Blazor is a UI framework that runs on top of ASP.NET Core and lets you build interactive web pages using C# components instead of JavaScript. Blazor Server runs your C# code on the server and sends UI updates to the browser over a real-time connection.\nThis is an interview question. Practice explaining it simply." },
            { id: "d5-n3", text: "Open a fresh Blazor Server project in Visual Studio and inspect the file structure", hours: 0.5, detail: "File > New > Project > Blazor Server App. Look at the file structure: Pages/ folder has your pages (.razor files), Program.cs is the entry point, wwwroot/ has static files like CSS.\nOpen a .razor file and notice how it mixes HTML and C# code. This is the Razor syntax you'll be writing for the next two weeks." }
          ],
          endOfDayProof: "You can explain what ASP.NET Core is, what Blazor is, and how they relate. You've built a to-do list in Blazor."
        },
        {
          id: "day-6",
          dayNumber: 6,
          date: "April 6",
          weekday: "Monday",
          title: "REST DAY",
          subtitle: "Day 6",
          isRestDay: true,
          mustFinish: [],
          niceToFinish: [],
          endOfDayProof: "Go outside. Hike Sunset Rock. Do literally anything that isn't a screen. The proof is that you actually took the day off."
        }
      ]
    },
    {
      id: "week-2",
      weekNumber: 2,
      title: "WEEK 2 — Build the Project + Fill Gaps",
      subtitle: "Finish Blazor, then build the real app. Everything else gets layered in through the project.",
      days: [
        {
          id: "day-7",
          dayNumber: 7,
          date: "April 7",
          weekday: "Tuesday",
          title: "Finish Blazor, start the project",
          subtitle: "Day 7",
          isRestDay: false,
          mustFinish: [
            { id: "d7-m1", text: "Complete Blazor, Modules 5-8 (Routing, Forms, Reusable components, Connect Four)", link: "https://learn.microsoft.com/en-us/training/paths/build-web-apps-with-blazor/", hours: 2.5, detail: "Finish the remaining Blazor modules. Module 5: routing (how URLs map to pages). Module 6: forms and validation. Module 7: reusable components (building components you can share across pages). Module 8: build a Connect Four game.\nModules 5-6 are the most important for your project. Modules 7-8 are good to know but less critical.\nNote: Blazor supports a 'code-behind' pattern where you put C# logic in a separate .razor.cs file instead of mixing it into the .razor file. The courses may not cover this, but it's a common pattern in real projects — ask Claude about it when you start building." },
            { id: "d7-m2", text: "Create a new Blazor Server project in Visual Studio called \"WorkOrderTracker\"", hours: 0.5, detail: "File > New > Project > Blazor Server App. Name it \"WorkOrderTracker\". Choose .NET 8 (or latest). This is the project you'll be building for the rest of the plan.\nDelete the sample pages (Counter, Weather) — you won't need them. Keep the layout and nav menu structure." },
            { id: "d7-m3", text: "Install EF Core NuGet packages", hours: 0.5, detail: "In Visual Studio: Tools > NuGet Package Manager > Manage NuGet Packages for Solution. Install these packages:\n- Microsoft.EntityFrameworkCore.SqlServer\n- Microsoft.EntityFrameworkCore.Tools\nThese let your C# code talk to SQL Server through EF Core." },
            { id: "d7-m4", text: "Create your first two model classes: WorkOrder and Category", hours: 1.5, detail: "Create a Models/ folder. Add two C# class files:\nWorkOrder.cs: public class with properties like Id (int), Title (string), Description (string), CategoryId (int), Category (navigation property).\nCategory.cs: public class with Id (int), Name (string), WorkOrders (ICollection<WorkOrder>).\nThese classes define what your database tables will look like. Each property becomes a column." },
            { id: "d7-m5", text: "Run your first EF Core migration and verify the tables exist in SQL Server", hours: 1.5, detail: "First, create a DbContext class (e.g., AppDbContext) that inherits from DbContext. Add DbSet<WorkOrder> and DbSet<Category> properties. Register it in Program.cs with your connection string.\nThen open Package Manager Console (Tools > NuGet Package Manager > Package Manager Console) and run:\nAdd-Migration InitialCreate\nUpdate-Database\nOpen SSMS and verify the tables were created." },
            { id: "d7-m6", text: "Get a basic page that reads from the database (even if it's empty)", hours: 1.5, detail: "Create a new .razor page (e.g., WorkOrders.razor). Inject your DbContext. In the OnInitializedAsync method, load the work orders from the database. Display them in a simple HTML table or list.\nEven if the table is empty, this proves the full pipeline works: Blazor page > DbContext > SQL Server > back to the page." },
            { id: "d7-m7", text: "Get quizzed by Claude on Blazor and EF Core setup", hours: 0.75, isQuiz: true, detail: "Open Claude and ask to be quizzed on Day 7 material. Suggested prompt:\n\"Quiz me on Blazor and EF Core setup. Cover: Blazor routing, forms and validation, what a DbContext is, how to define model classes for EF Core, what a migration does, how to run migrations, and how to inject and use a DbContext in a Razor page. Make me write code snippets.\"\nThis is where theory meets practice — you should be able to explain how your actual project is wired together." }
          ],
          niceToFinish: [
            { id: "d7-n1", text: "Seed a few categories and work orders into the database", hours: 1, detail: "Add seed data so your app has something to display. In your DbContext, override OnModelCreating and use modelBuilder.Entity<Category>().HasData() to insert a few categories (e.g., \"Plumbing\", \"Electrical\", \"General\").\nRun Add-Migration SeedData, then Update-Database. Now your list page should show real data." },
            { id: "d7-n2", text: "Wire up the list page to display real data", hours: 1, detail: "If your list page is just showing a loading message or is empty, make it display the actual work orders with their category names. Use a table with columns for Title, Category, Status, and Date.\nThis sets you up perfectly for tomorrow's CRUD work." },
            { id: "d7-n3", text: "Skim the Blazor JavaScript interop docs (optional)", link: "https://learn.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/", hours: 0.5, detail: "JS interop lets you call JavaScript functions from C# and vice versa. You won't need this for the project, but it's good to know it exists — an interviewer might ask 'what if you needed to use a JavaScript charting library in Blazor?' Just skim the overview page." }
          ],
          endOfDayProof: "The Blazor path is 100% done. Your app runs and displays real database data. EF Core created your tables successfully."
        },
        {
          id: "day-8",
          dayNumber: 8,
          date: "April 8",
          weekday: "Wednesday",
          title: "Full CRUD — the most important day of the entire plan",
          subtitle: "Day 8",
          isRestDay: false,
          mustFinish: [
            { id: "d8-m1", text: "List page — displays all work orders from the database", hours: 1.5, detail: "Build a page that loads all work orders from the database and displays them in a table. Include columns for Title, Category, Status, and Created Date. Each row should have Edit and Delete buttons.\nUse @inject to get your DbContext, load data in OnInitializedAsync, and use a @foreach loop to render rows." },
            { id: "d8-m2", text: "Create form — saves a new work order to the database", hours: 2, detail: "Build a form with input fields for Title, Description, and a Category dropdown. When the user clicks Save, create a new WorkOrder object, set its properties from the form, add it to the DbContext, and call SaveChangesAsync().\nUse Blazor's EditForm component with an InputText for the title and InputSelect for the category. After saving, redirect back to the list page." },
            { id: "d8-m3", text: "Edit form — updates an existing work order", hours: 1.5, detail: "Build an edit page that loads an existing work order by its Id (passed as a route parameter like /edit/5). Pre-fill the form fields with current values. When saved, update the entity and call SaveChangesAsync().\nTip: the edit form can be very similar to the create form — the main difference is loading existing data first." },
            { id: "d8-m4", text: "Delete button — removes a work order", hours: 1, detail: "Add a Delete button to each row in the list. When clicked, find the work order by Id, remove it from the DbContext, and call SaveChangesAsync(). Refresh the list.\nFor now a simple button is fine — you can add a confirmation dialog later." },
            { id: "d8-m5", text: "Category dropdown — pulls from the Category table", hours: 1, detail: "On your create and edit forms, the Category field should be a dropdown that shows all categories from the database, not a text input. Load categories in OnInitializedAsync and render them with an InputSelect or <select> element.\nThis demonstrates that you understand relational data — a work order belongs to a category." },
            { id: "d8-m6", text: "Basic validation — required fields, reasonable field lengths", hours: 1, detail: "Add [Required] and [MaxLength(200)] data annotations to your model properties. Use Blazor's DataAnnotationsValidator component in your forms. This prevents saving a work order with a blank title or a 10,000-character description.\nTest it: try submitting an empty form and verify you see validation messages." },
            { id: "d8-m7", text: "Get quizzed by Claude on full CRUD implementation", hours: 1, isQuiz: true, detail: "Open Claude and ask to be quizzed on Day 8 material. Suggested prompt:\n\"Quiz me on building a full CRUD app with Blazor Server and EF Core. Cover: displaying a list from the database, building a create form, editing an existing record, deleting a record, wiring up a dropdown from a related table, data annotations for validation, and how SaveChangesAsync works. Mix conceptual questions with 'write the Blazor/C# code' questions. Grade me honestly.\"\nThis is the most important quiz of the plan. If you can explain CRUD flows clearly, you can explain them in an interview." }
          ],
          niceToFinish: [
            { id: "d8-n1", text: "Add a Status field (Open, In Progress, Closed)", hours: 0.75, detail: "Add a Status property to your WorkOrder model. You can use a string for now or an enum. Add it as a dropdown on your forms and display it in the list.\nThis makes the app feel more real — work orders have a lifecycle." },
            { id: "d8-n2", text: "Add a Created Date that auto-fills when a record is created", hours: 0.5, detail: "Add a CreatedDate property (DateTime) to WorkOrder. In your create logic, set it to DateTime.Now before saving. Display it in the list.\nDon't put it on the form — it should fill in automatically." },
            { id: "d8-n3", text: "Improve field names and page titles", hours: 0.5, detail: "Make sure your pages have clear titles (\"Work Orders\", \"Create Work Order\", \"Edit Work Order\"). Make sure your table headers are readable (\"Title\" not \"title\", \"Category\" not \"CategoryId\").\nSmall polish like this makes the app feel more professional." }
          ],
          endOfDayProof: "You can create a work order, see it in the list, edit it, and delete it. All four operations work without crashing. Data flows from form to EF Core to SQL Server to back to screen."
        },
        {
          id: "day-9",
          dayNumber: 9,
          date: "April 9",
          weekday: "Thursday",
          title: "OOP + VB.NET deep dive",
          subtitle: "Day 9",
          isRestDay: false,
          mustFinish: [
            { id: "d9-m1", text: "Complete \"Implement classes, properties, and methods\" path (~4 hrs)", link: "https://learn.microsoft.com/en-us/training/paths/implement-classes-properties-and-methods/", hours: 4, detail: "This path teaches Object-Oriented Programming (OOP) in C#. You'll learn about: classes (blueprints for objects), properties (data an object holds), methods (things an object can do), access modifiers (public vs private), constructors (how objects are created), and inheritance.\nConnect everything back to your project — your WorkOrder and Category classes are real examples of OOP.\nAlso pay attention to Dictionary<TKey, TValue> if it comes up — it's a collection that maps keys to values, like a phone book maps names to numbers. Example: Dictionary<string, int> maps string keys to int values." },
            { id: "d9-m2", text: "Go back into your project and clean up your model classes using what you learned", hours: 1.5, detail: "Look at your WorkOrder.cs and Category.cs files with fresh eyes. Are the property names clear? Are types appropriate (string vs int vs DateTime)? Do navigation properties make sense?\nConsider: should Description be required or optional? Should you add a default value for Status? Is your naming consistent?" },
            { id: "d9-m3", text: "Add proper access modifiers (public/private) where they make sense", hours: 1, detail: "Access modifiers control who can see and use your code. Public means anyone can access it. Private means only the class itself can use it.\nYour model properties should be public (EF Core needs to access them). Helper methods that are only used inside a class should be private. Your DbContext should be public but its internal configuration methods can be private." },
            { id: "d9-m5", text: "VB.NET deep dive: Work through VB.NET language features guide + Defining Classes walkthrough", link: "https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/", hours: 3, detail: "Now that you know C# OOP, translate it all to VB.NET. This is the main VB.NET learning block — take it seriously.\n\nWork through the VB.NET Language Features guide (https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/). Focus on these sections:\n- Variables: Dim x As Integer = 5 (instead of int x = 5)\n- Data Types: Integer, String, Boolean, Double, Date\n- Control Flow: If/Then/End If, Select Case/End Select, For/Next, For Each/Next, Do/Loop\n- Procedures: Sub (void methods) vs Function (methods that return values)\n- Classes and Objects: Public Class...End Class, Public Property, Public Sub/Function\n\nThen complete the \"Defining Classes\" walkthrough (https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/objects-and-classes/walkthrough-defining-classes). This has you build a class from scratch in VB.NET with properties, methods, and access modifiers — exactly what you just learned in C#.\n\nWrite at least 10 VB.NET code snippets by hand, translating things you wrote in C# this week. Key VB.NET-isms to nail:\n- Sub = void method, Function = returns a value\n- AndAlso / OrElse instead of && / ||\n- Nothing instead of null\n- Is / IsNot for reference comparison\n- Not case-sensitive (unlike C#)\n- Explicit block endings: End If, End Sub, End Function, End Class" },
            { id: "d9-m4", text: "Get quizzed by Claude on OOP and VB.NET", hours: 0.75, isQuiz: true, detail: "Open Claude and ask to be quizzed on Day 9 material. Suggested prompt:\n\"Quiz me on OOP in C#: classes vs objects, properties, methods, constructors, access modifiers (public/private/protected), encapsulation, and inheritance. Make me write class definitions from scratch. Show me broken classes and have me find the errors. Use my WorkOrder and Category models as context.\nAlso quiz me on VB.NET syntax: Dim declarations, Sub vs Function, If/Then/End If, Select Case, For/Next, Public Class/End Class, and translating C# OOP code to VB.NET. Give me C# code and make me rewrite it in VB.NET.\"\nOOP is conceptually dense and VB.NET translation takes practice — expect to think hard on these." }
          ],
          niceToFinish: [
            { id: "d9-n1", text: "Add a simple service class between your pages and EF Core (only if the code is getting messy)", hours: 1.5, detail: "If your Razor pages have a lot of database code mixed in, create a WorkOrderService class that handles all the data operations (GetAll, GetById, Create, Update, Delete). Your pages then call the service instead of directly using DbContext.\nThis is called separation of concerns. Only do this if your code is getting tangled — don't add complexity for its own sake." },
            { id: "d9-n2", text: "Add a Status enum: Open / In Progress / Closed", hours: 0.5, detail: "Instead of storing status as a string (which can have typos), create an enum:\npublic enum WorkOrderStatus { Open, InProgress, Closed }\nChange your WorkOrder model to use this enum type. EF Core will store it as an integer in the database but your code works with readable names." },
            { id: "d9-n3", text: "Add a constructor to WorkOrder that sets default values", hours: 0.5, detail: "Add a constructor to your WorkOrder class that sets default values:\npublic WorkOrder() { Status = WorkOrderStatus.Open; CreatedDate = DateTime.Now; }\nThis means new work orders automatically start as \"Open\" with today's date." },
            { id: "d9-n4", text: "Refactor duplicate code into reusable methods", hours: 1, detail: "Look for code that's repeated in multiple places. If your create and edit pages both load categories the same way, move that into a shared method. If you format dates the same way in multiple places, make a helper method.\nDon't over-do it — only extract things that are genuinely repeated." },
            { id: "d9-n5", text: "Watch Episodes 5-10 of VB.NET Fundamentals (variables, branching, operators, loops)", link: "https://learn.microsoft.com/en-us/shows/visual-basic-fundamentals-for-absolute-beginners/", hours: 1, detail: "Episodes 5-10 of the VB.NET Fundamentals for Absolute Beginners series cover: declaring variables and assigning values, the If/Then/Else decision statement, operators/expressions/statements, For/Next iterations, creating arrays, and creating helper methods.\nWatch at 1.5x speed and code along in Visual Studio. This reinforces what you learned from the docs today with video instruction and hands-on examples." }
          ],
          endOfDayProof: "You understand your own model classes instead of treating them like magic objects. You can explain what a class, property, and method are using your own project as the example."
        },
        {
          id: "day-10",
          dayNumber: 10,
          date: "April 10",
          weekday: "Friday",
          title: "EF Core deep dive + search/filter",
          subtitle: "Day 10",
          isRestDay: false,
          mustFinish: [
            { id: "d10-m1", text: "Read/practice EF Core docs: Relationships, Querying, Saving Data, Migrations", link: "https://learn.microsoft.com/en-us/ef/core/", hours: 3.5, detail: "Read these sections of the EF Core docs:\n- Relationships: how to define one-to-many (Category has many WorkOrders), which you already have\n- Querying: how to use LINQ to filter and sort data (.Where(), .OrderBy(), .Include())\n- Saving: how SaveChanges works, change tracking\n- Migrations: how to update your database schema when your models change\nFocus on querying — you'll use LINQ heavily for search and filter.\nSide note: older .NET apps use ADO.NET DataTables instead of EF Core — a DataTable is basically an in-memory copy of a database table with rows and columns. You don't need to learn ADO.NET, but if an interviewer mentions DataTable or DataSet, know that EF Core is the modern replacement for that approach." },
            { id: "d10-m2", text: "Add search to your work order list (search by title)", hours: 1.5, detail: "Add a text input above your list. When the user types and clicks Search (or presses Enter), filter the results. In your query, add .Where(w => w.Title.Contains(searchTerm)).\nMake sure it works with partial matches (typing \"plumb\" finds \"Plumbing repair\") and is case-insensitive." },
            { id: "d10-m3", text: "Add filter by Status (show only Open, only Closed, etc.)", hours: 1.5, detail: "Add a dropdown or button group above the list: All, Open, In Progress, Closed. When selected, filter the query: .Where(w => w.Status == selectedStatus).\nCombine this with search so both can be active at once — e.g., search for \"plumb\" within \"Open\" work orders." },
            { id: "d10-m4", text: "Add at least one sort option (by date, status, or title)", hours: 1, detail: "Add a sort dropdown: \"Newest first\", \"Oldest first\", \"Title A-Z\". Apply the sort to your query using .OrderBy() or .OrderByDescending().\nExample: .OrderByDescending(w => w.CreatedDate) for newest first." },
            { id: "d10-m5", text: "Get quizzed by Claude on EF Core and LINQ", hours: 0.75, isQuiz: true, detail: "Open Claude and ask to be quizzed on Day 10 material. Suggested prompt:\n\"Quiz me on EF Core and LINQ: how EF Core maps models to tables, relationships (one-to-many), navigation properties, .Where(), .OrderBy(), .Include(), .Select(), change tracking, SaveChangesAsync, and migrations. Give me scenarios and make me write the LINQ queries. Show me broken queries and have me fix them.\"\nLINQ is the bridge between your C# code and the database — nail this and EF Core makes sense." }
          ],
          niceToFinish: [
            { id: "d10-n1", text: "Add filter by Category", hours: 1, detail: "Add another dropdown that shows all categories. When selected, filter to show only work orders in that category. This is another .Where() clause on CategoryId." },
            { id: "d10-n2", text: "Add a detail view page for a single work order", hours: 1, detail: "Create a page at /workorder/{id} that shows all the details of a single work order. Include title, description, category, status, created date, and any other fields. Add an Edit button that links to the edit page.\nThis is a simple read-only page but it's good practice for route parameters." },
            { id: "d10-n3", text: "Add a \"Last Modified\" date that updates on edit", hours: 0.5, detail: "Add a LastModifiedDate property to WorkOrder. In your edit/update logic, set it to DateTime.Now before saving. Display it in the list or detail view.\nThis lets you see when a work order was last touched." },
            { id: "d10-n4", text: "Clean up your LINQ queries", hours: 0.5, detail: "Review your database queries. Are you loading more data than you need? Are you making multiple database calls where one would do? Use .Include() to eager-load related data (like Category names) in a single query instead of loading them separately." }
          ],
          endOfDayProof: "Your app has working search and at least one filter. You can explain how EF Core maps your models to tables and how a LINQ query reaches the database."
        },
        {
          id: "day-11",
          dayNumber: 11,
          date: "April 11",
          weekday: "Saturday",
          title: "Debugging + API concepts",
          subtitle: "Day 11",
          isRestDay: false,
          mustFinish: [
            { id: "d11-m1", text: "Complete \"Debug .NET apps with Visual Studio\" module (~1 hr)", link: "https://learn.microsoft.com/en-us/training/modules/dotnet-debug-visual-studio/", hours: 1, detail: "This module teaches you how to use Visual Studio's debugger: setting breakpoints, stepping through code line by line, inspecting variables, and using the watch window.\nDebugging is one of the most important skills for any developer. After this module you should know how to pause your running app at any line and see exactly what's happening.\nAlso explore the Visual Studio Designer tools: in SSMS, right-click a table and choose 'Design' to see/edit the table structure visually. 'Designer' is a term you may hear in interviews — it just means the visual editor for UI layouts or database schemas." },
            { id: "d11-m2", text: "Set breakpoints in your project and step through a create flow", hours: 1.5, detail: "Put a breakpoint on the first line of your \"save new work order\" code. Run the app, fill out the create form, and click Save. The app will pause at your breakpoint.\nStep through each line (F10) and watch: the form data flowing into a WorkOrder object, the object being added to DbContext, SaveChangesAsync writing to the database. Check the variable values at each step." },
            { id: "d11-m3", text: "Set breakpoints in your project and step through an update flow", hours: 1.5, detail: "Same thing but for editing. Put a breakpoint where you load the existing work order. Step through the load, see the original values, then step through the update and save.\nNotice how EF Core's change tracking knows which properties changed." },
            { id: "d11-m4", text: "Find and fix at least 2 real bugs or edge cases in your app", hours: 2.5, detail: "Use your app as a real user would and try to break it. Common bugs to look for:\n- What happens if you try to delete a category that has work orders?\n- What happens if you enter special characters in the title?\n- What happens if you click Save twice quickly?\n- Does the search work with empty input?\nFix at least 2 issues you find. Document what the bug was and how you fixed it — this is interview material." },
            { id: "d11-m5", text: "Complete \"Create a web API with ASP.NET Core controllers\" module (~1 hr) — learn the concept only", link: "https://learn.microsoft.com/en-us/training/modules/build-web-api-aspnet-core/", hours: 1, detail: "This teaches you about REST APIs — how web applications communicate data using HTTP (GET, POST, PUT, DELETE). A controller handles incoming requests and returns JSON responses.\nYou don't need to add an API to your project. Just understand the concept so you can talk about it in an interview: \"I built a Blazor Server app. If I needed mobile support, I could add API controllers to serve JSON data.\"" },
            { id: "d11-m7", text: "Complete the VB.NET Debugging Tutorial in Visual Studio", link: "https://learn.microsoft.com/en-us/visualstudio/get-started/visual-basic/tutorial-debugger", hours: 1.5, detail: "At Hamilton County, you'll debug VB.NET code regularly — this tutorial is directly job-relevant.\n\nThis Microsoft tutorial walks through debugging a VB.NET app in Visual Studio step by step. You'll:\n1. Create a new VB.NET console project with a loop and a helper Sub\n2. Set breakpoints and hit them (F5)\n3. Step through code line by line (F10 = Step Over, F11 = Step Into)\n4. Inspect variables using data tips (hover over variables)\n5. Use the Autos and Locals windows to see variable values\n6. Set a Watch on a variable to track it across iterations\n7. Examine the Call Stack to see how functions called each other\n8. Change execution flow by dragging the yellow arrow\n\nYou already learned these debugging concepts with C# earlier today. Now see them in a VB.NET context — the debugger works identically, but the code syntax is different. Complete the full tutorial from start to finish." },
            { id: "d11-m6", text: "Get quizzed by Claude on debugging, API concepts, and VB.NET debugging", hours: 0.5, isQuiz: true, detail: "Open Claude and ask to be quizzed on Day 11 material. Suggested prompt:\n\"Quiz me on debugging in Visual Studio and REST API concepts. Cover: breakpoints, stepping through code (F10/F11), the watch window, inspecting variables, what a REST API is, HTTP methods (GET/POST/PUT/DELETE), what a controller does, and when you'd add an API layer. Show me buggy C# code and have me find the issues. Also show me buggy VB.NET code and have me find the issues — test my ability to debug in both languages.\"\nDebugging is a skill interviewers love to ask about — be ready to explain your process in both C# and VB.NET." }
          ],
          niceToFinish: [
            { id: "d11-n1", text: "Practice explaining one bug fix out loud like an interview answer", hours: 0.5, detail: "Pick one of the bugs you fixed. Explain it using the STAR format: Situation (what the app does), Task (what went wrong), Action (how you debugged and fixed it), Result (what the fix was).\nExample: \"I found that deleting a category would crash because work orders still referenced it. I used breakpoints to trace the error, then added a check that prevents deleting categories that have work orders.\"" },
            { id: "d11-n2", text: "Find and fix 1-2 more edge cases (empty inputs, special characters, etc.)", hours: 1.5, detail: "Keep stress-testing your app. Try: very long titles (500+ characters), HTML in input fields (<script>alert('test')</script>), navigating directly to /edit/99999 (a work order that doesn't exist).\nEach fix makes your app more robust and gives you more interview stories." }
          ],
          endOfDayProof: "You can step through a create/update flow in the debugger and understand what's happening at each line. You can explain what an API controller is, even if you didn't add one to your project."
        },
        {
          id: "day-12",
          dayNumber: 12,
          date: "April 12",
          weekday: "Sunday",
          title: "Git + project polish",
          subtitle: "Day 12",
          isRestDay: false,
          mustFinish: [
            { id: "d12-m1", text: "Complete first half of GitHub Foundations path (~4 hrs)", link: "https://learn.microsoft.com/en-us/training/paths/github-foundations/", hours: 4, detail: "This covers Git fundamentals: repositories, commits, branches, merging, and GitHub. Git tracks every change you make to your code. GitHub stores your Git repositories online where others (or interviewers) can see them.\nKey concepts: git init (start tracking), git add (stage changes), git commit (save a snapshot), git push (upload to GitHub), git branch (work on features separately)." },
            { id: "d12-m2", text: "Create a GitHub repo for your Work Order Tracker", hours: 0.5, detail: "Go to github.com and create a new repository called \"WorkOrderTracker\" (or similar). Make it public so interviewers can see it. Don't initialize with a README since you already have code.\nGitHub will show you instructions for pushing an existing project." },
            { id: "d12-m3", text: "Push your project to GitHub", hours: 0.5, detail: "In your project folder, open a terminal and run:\ngit init\ngit add .\ngit commit -m \"Initial commit: Work Order Tracker\"\ngit remote add origin https://github.com/yourusername/WorkOrderTracker.git\ngit push -u origin main\nVerify your code appears on GitHub." },
            { id: "d12-m4", text: "Write a README.md (what the app does, tech used, how to run it)", hours: 1, detail: "Create a README.md file in your project root. Include:\n- What the app does (1-2 sentences)\n- Technologies used (Blazor Server, EF Core, SQL Server)\n- How to set up and run the project (prerequisites, connection string, migrations)\n- Screenshot if possible\nThis is the first thing anyone sees when they visit your repo." },
            { id: "d12-m5", text: "Confirm all CRUD actions still work", hours: 1, detail: "Do a full test of every feature: create a work order, view the list, edit a work order, delete a work order, search, filter. Make sure nothing is broken.\nThis is your regression test — making sure new code didn't break old features." },
            { id: "d12-m6", text: "Get quizzed by Claude on Git fundamentals", hours: 0.5, isQuiz: true, detail: "Open Claude and ask to be quizzed on Day 12 material. Suggested prompt:\n\"Quiz me on Git and GitHub fundamentals: git init, git add, git commit, git push, git pull, branches, merging, what a remote is, what a README should contain, and the basic Git workflow. Make me write out the git commands for common scenarios like creating a branch and merging it back.\"\nGit is mostly conceptual — focus on knowing the commands and when to use them." }
          ],
          niceToFinish: [
            { id: "d12-n1", text: "Create a branch, make a small change, merge it back (practice the workflow)", hours: 1, detail: "Practice the branch workflow:\ngit checkout -b feature/small-improvement\n(make a small code change)\ngit add . && git commit -m \"Small improvement\"\ngit checkout main\ngit merge feature/small-improvement\ngit push\nThis is how real teams work — every feature gets its own branch." },
            { id: "d12-n2", text: "Clean up the UI — consistent spacing, readable layout", hours: 1, detail: "Look at your app with fresh eyes. Is the table easy to read? Are buttons clearly labeled? Is there consistent spacing? Add some basic CSS or Bootstrap styling if it looks rough.\nA clean UI shows attention to detail in an interview." },
            { id: "d12-n3", text: "Review code top to bottom and rename anything confusingly named", hours: 1, detail: "Read through every file in your project. Rename variables and methods that aren't clear: 'x' should be 'workOrder', 'DoThing()' should be 'SaveWorkOrder()'. Remove any commented-out code or TODO comments you've already handled.\nClean code is readable code." }
          ],
          endOfDayProof: "Someone else could open the repo and understand what the app is and how to run it."
        },
        {
          id: "day-13",
          dayNumber: 13,
          date: "April 13",
          weekday: "Monday",
          title: "REST DAY",
          subtitle: "Day 13",
          isRestDay: true,
          mustFinish: [],
          niceToFinish: [],
          endOfDayProof: "Same as last Sunday. No fake \"light study.\" Recharge — you're entering the home stretch."
        }
      ]
    },
    {
      id: "week-3",
      weekNumber: 3,
      title: "WEEK 3 — Polish and Prepare",
      subtitle: "Make it demoable, then make it explainable.",
      days: [
        {
          id: "day-14",
          dayNumber: 14,
          date: "April 14",
          weekday: "Tuesday",
          title: "Harden the project",
          subtitle: "Day 14",
          isRestDay: false,
          mustFinish: [
            { id: "d14-m1", text: "Test every path: create, read, update, delete, search, filter", hours: 2.5, detail: "Systematically test every feature. Create 5+ work orders with different categories and statuses. Edit some, delete some. Search for partial titles. Filter by each status. Sort by each option. Try combinations: search + filter + sort.\nKeep a list of anything that breaks or feels wrong." },
            { id: "d14-m2", text: "Handle at least 2 edge cases (empty fields, very long text, deleting a category that has work orders)", hours: 2.5, detail: "Edge cases are situations normal users will hit that you might not have planned for:\n- Submit a form with all empty fields — does validation catch it?\n- Enter a 1000-character title — does it break the layout or database?\n- Delete a category that has work orders assigned to it — crash or graceful error?\n- Navigate to /edit/0 or /edit/abc — what happens?\nFix at least 2 of these. Add try/catch blocks where appropriate." },
            { id: "d14-m3", text: "Make sure no action crashes the app with an unhandled error", hours: 2, detail: "Go through every user action and try to crash the app. Click buttons rapidly, navigate to invalid URLs, submit forms with weird data.\nWhere you find crashes, add error handling: try/catch blocks, null checks, validation. The app should never show a raw error page to the user — instead show a friendly message." },
            { id: "d14-m4", text: "Add created date and last modified date if not already done", hours: 1.5, detail: "If you haven't already: add CreatedDate and LastModifiedDate properties to your WorkOrder model. Set CreatedDate when creating, update LastModifiedDate when editing.\nRun a new migration: Add-Migration AddDateFields, then Update-Database. Display these dates in your list and detail views." },
            { id: "d14-m5", text: "Get quizzed by Claude on testing and edge cases", hours: 0.75, isQuiz: true, detail: "Open Claude and ask to be quizzed on Day 14 material. Suggested prompt:\n\"Quiz me on testing and hardening a Blazor app. Cover: common edge cases (empty inputs, long strings, invalid IDs, cascade deletes), error handling with try/catch, null checks, input validation beyond data annotations, and how to think about what could go wrong. Give me scenarios and ask me what would happen and how I'd fix it.\"\nThis quiz is about thinking defensively — what breaks, and how do you prevent it?" }
          ],
          niceToFinish: [
            { id: "d14-n1", text: "Add pagination if the list could get long", hours: 1.5, detail: "If your list has 50+ work orders, it should be paginated. Show 10 or 20 per page with Next/Previous buttons. Use .Skip() and .Take() in your LINQ query:\n.Skip((page - 1) * pageSize).Take(pageSize)\nAdd page navigation at the bottom of the list." },
            { id: "d14-n2", text: "Add a confirmation dialog before deleting (\"Are you sure?\")", hours: 0.5, detail: "Currently your delete button probably deletes immediately. Add a confirmation step — either a JavaScript confirm() dialog or a Blazor modal that asks \"Are you sure you want to delete this work order?\"\nThis prevents accidental deletions." },
            { id: "d14-n3", text: "Improve validation messages", hours: 0.5, detail: "Instead of generic \"The field is required\" messages, make them specific: \"Title is required\", \"Description must be less than 500 characters\", \"Please select a category\".\nUse the [Required(ErrorMessage = \"...\")] attribute to customize messages." }
          ],
          endOfDayProof: "Your app is no longer just a demo — it survives normal mistakes and bad input gracefully."
        },
        {
          id: "day-15",
          dayNumber: 15,
          date: "April 15",
          weekday: "Wednesday",
          title: "Code review + final polish",
          subtitle: "Day 15",
          isRestDay: false,
          mustFinish: [
            { id: "d15-m1", text: "Review your code top to bottom — prefer clear naming over comments", hours: 2.5, detail: "Open every file in your project and read it critically. For each file ask: would someone else understand this? Rename unclear variables: 'res' to 'workOrders', 'ctx' to 'dbContext'. Remove commented-out code. Remove unnecessary using statements.\nGood code reads like prose. If you need a comment to explain what a method does, the method name isn't clear enough." },
            { id: "d15-m2", text: "Make sure EF Core migrations are clean (no junk migrations)", hours: 1, detail: "Look in your Migrations/ folder. If you have migrations with names like \"AddedField2\" or \"FixedTypo\", consider squashing them. You can delete all migration files, delete the database, and run Add-Migration InitialCreate to get one clean migration.\nThis makes your project history look professional. Only do this if you're comfortable recreating the database." },
            { id: "d15-m3", text: "Full retest of every feature", hours: 2, detail: "Do one final complete test: create, read, update, delete, search, filter, sort. Test on different screen sizes if possible. Check that dates display correctly, validation works, and the app doesn't crash.\nThis is your final sign-off that the app works." },
            { id: "d15-m4", text: "Push final code to GitHub", hours: 0.5, detail: "Stage all changes, commit with a message like \"Final polish and cleanup\", and push to GitHub. Verify the repo looks good — check that the README displays properly and no sensitive files (like connection strings with passwords) are visible.\ngit add . && git commit -m \"Final polish\" && git push" },
            { id: "d15-m6", text: "Build a small VB.NET console CRUD app from scratch (mini work order manager)", link: "https://learn.microsoft.com/en-us/dotnet/visual-basic/developing-apps/", hours: 2.5, detail: "Prove you can actually write VB.NET, not just read it. Create a new VB.NET Console App in Visual Studio (File > New > Project > Console App, select Visual Basic).\n\nBuild a mini work order manager that stores data in a List(Of WorkOrder) — no database needed. Implement:\n1. A WorkOrder class with properties: Id (Integer), Title (String), Status (String)\n2. A menu system using Select Case:\n   1 = Add work order\n   2 = List all work orders\n   3 = Update status\n   4 = Delete work order\n   5 = Exit\n3. Console.ReadLine() for user input\n4. Basic validation (don't allow empty titles)\n\nTarget: 50-100 lines of VB.NET code. Key syntax you'll use:\n- Dim orders As New List(Of WorkOrder)\n- Sub AddWorkOrder() / End Sub\n- Function GetNextId() As Integer / End Function\n- If title = \"\" Then ... End If\n- Select Case choice / Case \"1\" ... End Select\n- For Each order In orders ... Next\n\nWhen you're done, you'll have a working VB.NET app you can reference in the interview: \"I also built a console CRUD app in VB.NET to make sure I'm comfortable in both languages.\"" },
            { id: "d15-m5", text: "Get quizzed by Claude on code review, clean code, and VB.NET", hours: 0.5, isQuiz: true, detail: "Open Claude and ask to be quizzed on Day 15 material. Suggested prompt:\n\"Quiz me on code quality and clean code practices in C#. Cover: naming conventions, when to use comments vs better names, what makes code readable, how to spot and clean up EF Core migrations, what to look for in a code review, and common code smells. Show me messy code and have me refactor it.\nAlso quiz me on VB.NET code I wrote today — show me buggy VB.NET and have me fix it. Test my ability to write and debug VB.NET from scratch.\"\nClean code is a skill that separates junior devs who just make things work from ones who make things maintainable." }
          ],
          niceToFinish: [
            { id: "d15-n1", text: "Skim MDN JavaScript Modules 1-3 (variables, functions, events)", link: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting", hours: 3, detail: "The job listing may mention JavaScript. This MDN path covers the basics: variables (let, const), functions, and DOM events. You don't need to be a JS expert, but being able to say \"I understand JavaScript fundamentals\" is a plus.\nThis is purely optional — your Blazor project demonstrates the core skills they're looking for." },
            { id: "d15-n2", text: "Add one more small feature (assigned-to field, priority level, due date, notes)", hours: 2, detail: "Pick ONE feature to add. An AssignedTo string field is simplest — add the property, update the form, update the list. A priority level (Low/Medium/High) is also easy using an enum.\nDon't add multiple features — do one well rather than three halfway." }
          ],
          endOfDayProof: "You can navigate the whole codebase without feeling lost. The code reads clearly without heavy comments. The project is stable enough to demo. You also have a working VB.NET console app."
        },
        {
          id: "day-16",
          dayNumber: 16,
          date: "April 16",
          weekday: "Thursday",
          title: "Interview preparation",
          subtitle: "Day 16",
          isRestDay: false,
          mustFinish: [
            { id: "d16-m1", text: "Practice a 2-minute walkthrough of your project out loud", hours: 1, detail: "Stand up and talk through your project as if you're showing it to an interviewer. Cover: what the app does, why you built it, the tech stack, and do a live demo (create, edit, delete, search).\nTime yourself — keep it under 2 minutes. Practice until it flows naturally without awkward pauses. You should be able to do this without AI help." },
            { id: "d16-m2", text: "Practice explaining your database schema (tables, relationships, why you structured it that way)", hours: 1, detail: "Draw or describe your database tables. Explain: \"I have a WorkOrders table and a Categories table. They have a one-to-many relationship — each category can have many work orders, and each work order belongs to one category. The foreign key is CategoryId on the WorkOrders table.\"\nBe ready to explain why you chose this structure." },
            { id: "d16-m3", text: "Practice explaining a CRUD flow (user clicks create -> form validates -> EF Core saves -> list refreshes)", hours: 1, detail: "Walk through the full lifecycle: \"The user clicks Create New. The app shows a form with validation. They fill in the title, select a category, and click Save. Blazor validates the input, creates a WorkOrder object, passes it to EF Core's DbContext, which generates an INSERT SQL statement and sends it to SQL Server. After saving, the app redirects to the list page which reloads the data.\"\nPractice saying this smoothly." },
            { id: "d16-m4", text: "Practice explaining what EF Core does and why you used it", hours: 0.75, detail: "\"Entity Framework Core is an ORM — an Object-Relational Mapper. It maps my C# classes to database tables so I can work with data using C# objects instead of writing raw SQL. I used it because it's the standard data access tool in the .NET ecosystem, it handles migrations, change tracking, and LINQ queries.\"\nBe ready for: \"Why not just write SQL directly?\" Answer: \"EF Core gives you type safety, migration management, and works across different database providers.\"" },
            { id: "d16-m5", text: "Practice explaining a debugging story (how you found and fixed a real bug using breakpoints)", hours: 0.75, detail: "Pick a real bug you found and fixed during this plan. Structure your answer:\n1. What was the problem? (\"Deleting a category crashed the app\")\n2. How did you find it? (\"I set a breakpoint and stepped through the delete code\")\n3. What was the root cause? (\"Work orders still referenced the category\")\n4. How did you fix it? (\"Added a check to prevent deleting categories with work orders\")\nThis shows problem-solving skills." },
            { id: "d16-m6", text: "Map your skills to every bullet point on the job listing — write down how you'd answer each one", hours: 2, detail: "Open the Hamilton County job listing. For each requirement or responsibility, write down 1-2 sentences about how you'd address it. Examples:\n- \"C# development\" → \"I completed the C# learning path and built a full CRUD app in C#\"\n- \"SQL Server\" → \"I completed the T-SQL path and my app uses SQL Server as its database\"\n- \"Web development\" → \"I built a Blazor Server web application\"\nHave an answer for every bullet point, even if some are stretches." },
            { id: "d16-m7", text: "Write 2-3 questions you'd ask the hiring manager about their tech environment", hours: 0.5, detail: "Prepare questions that show genuine interest and technical awareness:\n- \"What does your current tech stack look like? Is it mostly .NET or mixed?\"\n- \"How does your team handle deployments and code reviews?\"\n- \"What would my first project or first 90 days look like?\"\nDon't ask about salary or PTO in a first interview. Focus on showing curiosity about the work." },
            { id: "d16-m9", text: "Practice explaining your VB.NET knowledge and how you'd handle legacy VB.NET maintenance", hours: 0.5, detail: "Prepare answers for VB.NET-related interview questions:\n\n\"Do you have experience with VB.NET?\"\n→ \"I studied VB.NET alongside C# during my preparation. I built a VB.NET console CRUD app, completed Microsoft's VB.NET debugging tutorial, and worked through the language features guide and Defining Classes walkthrough. Since both languages target .NET, the concepts are identical — I can translate fluently between C# and VB.NET.\"\n\n\"How would you approach maintaining legacy VB.NET code?\"\n→ \"I'd start by reading the existing code to understand what it does, using breakpoints and stepping through it in Visual Studio. VB.NET's explicit End blocks — End If, End Sub, End Class — make the structure very clear. I'd make small, focused changes and test thoroughly before committing. For common legacy patterns like ADO.NET DataTables, Windows Forms, and On Error GoTo, I know what to look for even though the modern equivalent is Try/Catch.\"\n\nPractice these answers out loud until they sound natural." },
            { id: "d16-m8", text: "Mock interview quiz with Claude", hours: 1, isQuiz: true, detail: "Open Claude and ask for a mock interview. Suggested prompt:\n\"Conduct a mock technical interview with me for a junior Application Developer position at a county government. The role uses C#, VB.NET, SQL Server, ASP.NET Core, and Blazor. The team maintains legacy VB.NET code and builds new features in C#/Blazor. I built a Work Order Tracker using Blazor Server and EF Core, and I also built a VB.NET console CRUD app. Ask me 12-15 questions mixing: tell me about your project, explain a technical concept, how would you debug X, write a SQL query for Y, translate this C# code to VB.NET, and how would you approach maintaining legacy VB.NET code. Give me feedback after each answer.\"\nTreat this like the real thing. Answer out loud if you can, not just by typing. This is the culmination of everything." }
          ],
          niceToFinish: [
            { id: "d16-n1", text: "Record yourself doing the project walkthrough and watch it back", hours: 1, detail: "Use your phone to record yourself doing the 2-minute project walkthrough. Watch it back. Notice filler words (um, uh, like), nervous habits, or places where you stumble.\nRe-record until you're comfortable with how you present. This is awkward but incredibly effective." },
            { id: "d16-n2", text: "Research Hamilton County IT department or similar local government IT environments", hours: 1.5, detail: "Look up what Hamilton County's IT department does, what systems they manage, and what their tech environment might look like. Check their website, news articles, or LinkedIn profiles of current employees.\nUnderstanding your potential employer shows preparation. Government IT often involves maintaining legacy systems, serving citizens, and working within budget constraints." }
          ],
          endOfDayProof: "You can talk through the project clearly without AI helping. You can answer \"Tell me about a project you built\" without hesitating."
        },
        {
          id: "day-17-19",
          dayNumber: 17,
          date: "April 17-19",
          weekday: "Fri-Sun",
          title: "Overflow — pick the highest-need area only",
          subtitle: "Days 17-19",
          isRestDay: false,
          mustFinish: [
            { id: "d17-m1", text: "Pick one main priority and focus: revisit weak material, add a feature, deep-dive VB.NET, practice Git, do a mock interview, or prepare applications", hours: 8, detail: "Assess honestly where you're weakest and spend these final days there. Options:\n- If C# concepts are shaky: re-do practice exercises from Week 1\n- If VB.NET needs more work: complete the freeCodeCamp VB.NET full course and/or remaining episodes of the Bob Tabor VB.NET Fundamentals series\n- If the project has bugs: fix them and add polish\n- If Git feels unfamiliar: practice branching, merging, pull requests\n- If you stumble explaining things: do mock interviews with a friend or record yourself\n- If you haven't applied yet: set up job alerts, tailor your resume, write a cover letter\nDo NOT scatter across all of these. Pick ONE and go deep." }
          ],
          niceToFinish: [
            { id: "d17-n1", text: "Add a lightweight reporting page", hours: 4, detail: "Build a page that shows summary stats: total work orders, count by status, count by category. Use LINQ GroupBy queries to get the counts.\nThis is a simple feature but it demonstrates that you can build more than just CRUD — you can present data meaningfully." },
            { id: "d17-n2", text: "Add an \"Assigned To\" field", hours: 2, detail: "Add an AssignedTo string property to WorkOrder. Add it to the create and edit forms as a text input. Show it in the list. Add the ability to filter by assigned person.\nRun Add-Migration AddAssignedTo and Update-Database." },
            { id: "d17-n3", text: "Try Azure deployment if you have capacity", hours: 3, detail: "Deploy your app to Azure App Service (free tier available). This means your app is live on the internet and you can show it in an interview by opening a URL instead of running it locally.\nIn Visual Studio: right-click your project > Publish > Azure > Azure App Service. You'll also need to set up an Azure SQL Database or use the free tier." },
            { id: "d17-n4", text: "Research other local government IT roles in Chattanooga", hours: 2, detail: "Don't put all your eggs in one basket. Search for IT roles at: City of Chattanooga, UTC (University of Tennessee at Chattanooga), EPB, Hamilton County Schools, and other local government entities.\nSet up job alerts on Indeed, LinkedIn, and the specific organization career pages." },
            { id: "d17-n5", text: "Get quizzed by Claude on your weakest area", hours: 0.5, isQuiz: true, detail: "Open Claude and ask to be quizzed on whatever you struggled with most. Suggested prompt:\n\"Quiz me on [your weakest topic — C# basics, VB.NET, SQL, Blazor, EF Core, OOP, or debugging]. I've been studying for 2+ weeks and this is the area I'm least confident in. Start easy and escalate. Focus on the gaps in my understanding.\"\nBe honest about what you don't know yet. These final days are for shoring up weaknesses, not reviewing strengths." },
            { id: "d17-n6", text: "Complete freeCodeCamp's VB.NET Full Course for Beginners (3 hrs)", link: "https://www.youtube.com/watch?v=HFWQdGn5DaU", hours: 3, detail: "This free 3-hour freeCodeCamp course is a comprehensive introduction to VB.NET programming, covering fundamentals, user interface design, and data processing with hands-on practice.\nCode along — pause frequently and type the code yourself. After each section, try to write a small VB.NET program without looking at the video.\nIf VB.NET is your weakest area, this is the nuclear option for the overflow days. Combined with what you've already learned, this will make you genuinely comfortable reading and writing VB.NET code." }
          ],
          endOfDayProof: "The app is better in one meaningful way, not ten tiny half-finished ways. Or you are materially better at explaining it."
        }
      ]
    },
    {
      id: "week-4",
      weekNumber: 4,
      title: "WEEK 4 — Certifications",
      subtitle: "Stack free credentials to strengthen your resume.",
      days: [
        {
          id: "day-20",
          dayNumber: 20,
          date: "April 20",
          weekday: "Sunday",
          title: "Free certifications & skill badges",
          subtitle: "Day 20",
          isRestDay: false,
          mustFinish: [
            { id: "d20-m1", text: "Take the LinkedIn C# Skill Assessment", link: "https://www.linkedin.com/skill-assessments/C%23/quiz-intro/", hours: 0.25, detail: "15-question multiple choice quiz, ~15 minutes. If you score in the top 30%, you get a visible \"C# Verified\" badge on your LinkedIn profile that recruiters can filter by. You can retake after 24 hours if you don't pass.\nReview C# basics before starting — variables, types, classes, inheritance, LINQ, async/await. The questions test practical knowledge, not trivia." },
            { id: "d20-m2", text: "Take the LinkedIn .NET Framework Skill Assessment", link: "https://www.linkedin.com/skill-assessments/.NET%20Framework/quiz-intro/", hours: 0.25, detail: "Covers .NET concepts — CLR, assemblies, namespaces, garbage collection, dependency injection. 15 questions, ~15 minutes.\nGood complement to the C# badge. Shows you understand the platform, not just one language." },
            { id: "d20-m3", text: "Take the LinkedIn SQL Skill Assessment", link: "https://www.linkedin.com/skill-assessments/MySQL/quiz-intro/", hours: 0.25, detail: "Covers SQL fundamentals — SELECT, JOIN, GROUP BY, subqueries, indexes. 15 questions, ~15 minutes.\nThe assessment is labeled \"MySQL\" but the SQL concepts are universal and apply directly to SQL Server/T-SQL. Your T-SQL knowledge from Days 3-4 should carry you through." },
            { id: "d20-m4", text: "Take the LinkedIn Visual Basic Skill Assessment", link: "https://www.linkedin.com/skill-assessments/Visual%20Basic/quiz-intro/", hours: 0.25, detail: "VB.NET syntax and concepts. 15 questions, ~15 minutes.\nGetting this badge alongside C# shows you know both languages — exactly what Hamilton County needs. Review Dim declarations, Sub vs Function, If/Then/End If, and Select Case before starting." },
            { id: "d20-m5", text: "Take the LinkedIn Git Skill Assessment", link: "https://www.linkedin.com/skill-assessments/Git/quiz-intro/", hours: 0.25, detail: "Covers Git commands, branching, merging, rebasing. 15 questions, ~15 minutes.\nQuick win to round out your profile. Review: git add, git commit, git push, git branch, git merge, git pull, and what a pull request is." }
          ],
          niceToFinish: [
            { id: "d20-n1", text: "Take the HackerRank C# (Basic) Skills Certification", link: "https://www.hackerrank.com/skills-verification/c_sharp_basic", hours: 1, detail: "Timed coding test — 1-2 problems, 60 minutes. You write actual C# code that has to pass test cases. If you pass, you get a shareable certificate with a unique URL you can put on your resume and LinkedIn.\nHarder than LinkedIn badges because you write real code, but more impressive to employers for the same reason. Topics: classes, data structures, basic algorithms." },
            { id: "d20-n2", text: "Take the HackerRank SQL (Basic) Skills Certification", link: "https://www.hackerrank.com/skills-verification/sql_basic", hours: 1, detail: "Timed SQL test — write actual queries that pass test cases. Same deal: pass and get a shareable certificate.\nTopics: SELECT, WHERE, JOIN, GROUP BY, ORDER BY, aggregate functions. If this feels easy, try the SQL (Intermediate) cert too." },
            { id: "d20-n3", text: "Take the HackerRank Problem Solving (Basic) Skills Certification", link: "https://www.hackerrank.com/skills-verification/problem_solving_basic", hours: 1.5, detail: "General algorithmic problem solving. Tests your ability to think through a problem and write working code. Good signal to employers that you can code beyond just following tutorials.\nTopics: arrays, sorting, basic algorithms, string manipulation." },
            { id: "d20-n4", text: "Verify your Microsoft Learn profile is complete and shareable", link: "https://learn.microsoft.com/en-us/users/me/achievements", hours: 0.25, detail: "Log into Microsoft Learn and check your achievements page. Every learning path you completed during this plan should show as a badge — C# Part 1, T-SQL, ASP.NET Core, Blazor, OOP, GitHub Foundations, and more.\nMake sure your profile is public, then copy your profile URL and add it to your resume and LinkedIn. This shows exactly which Microsoft courses you completed — concrete proof of your learning." }
          ],
          endOfDayProof: "Your LinkedIn profile has 3-5 skill badges visible to recruiters. You have at least one HackerRank certificate you can link on your resume."
        }
      ]
    }
  ]
};
